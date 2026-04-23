const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

// Initialize turndown service for markdown conversion
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Settings
const BASE_URL = 'http://localhost:3000'; // Target local server
const START_URL = 'http://localhost:3000/sr'; // Start page (Serbian locale)
const OUTPUT_DIR = path.join(__dirname, '../public');

const visitedUrls = new Set();
const queue = [START_URL];
let generatedCount = 0;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function crawl() {
    console.log(`\n========================================`);
    console.log(`🚀 Pokrećem Markdown Mirrors Crawler`);
    console.log(`========================================\n`);

    // Ensure public dir exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    while (queue.length > 0) {
        const urlToVisit = queue.shift();

        // Skip if already visited or not part of our domain
        if (visitedUrls.has(urlToVisit) || !urlToVisit.startsWith(BASE_URL)) {
            continue;
        }

        visitedUrls.add(urlToVisit);

        try {
            const response = await fetch(urlToVisit);
            
            if (!response.ok) {
                console.log(`❌ Preskačem ${urlToVisit} (Status: ${response.status})`);
                continue;
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('text/html')) {
                continue; // Only parse HTML pages
            }

            const html = await response.text();
            const $ = cheerio.load(html);

            // 1. Extract metadata
            const title = $('title').text().trim() || 'No Title';
            const description = $('meta[name="description"]').attr('content') || '';
            let canonicalUrl = $('link[rel="canonical"]').attr('href') || urlToVisit;

            // Ako je kanonički URL lokalan, pretvorimo ga u pravi produkcijski za SEO (opciono)
            canonicalUrl = canonicalUrl.replace('http://localhost:3000', 'https://www.eneplus.rs');

            // 2. Pronalazimo sve unutrašnje linkove kako bismo i njih skenirali
            $('a').each((i, link) => {
                let href = $(link).attr('href');
                if (href) {
                    let absoluteUrl = '';
                    if (href.startsWith('http://localhost:3000') || href.startsWith('https://localhost:3000')) {
                        absoluteUrl = href;
                    } else if (href.startsWith('/')) {
                        absoluteUrl = `${BASE_URL}${href}`;
                    }
                    
                    if (absoluteUrl.startsWith(BASE_URL) && !visitedUrls.has(absoluteUrl)) {
                        // Strip hash fragments
                        const urlWithoutHash = absoluteUrl.split('#')[0];
                        
                        // Ignore assets
                        if (!urlWithoutHash.match(/\.(pdf|jpg|png|svg|css|js|json|xml|ico)$/i)) {
                            if (!visitedUrls.has(urlWithoutHash) && !queue.includes(urlWithoutHash)) {
                                queue.push(urlWithoutHash);
                            }
                        }
                    }
                }
            });

            // 3. Brisanje nepotrebnih elemenata (nav, footer, chat widgeti...)
            $('nav, footer, script, style, noscript, iframe, header, [role="navigation"]').remove();
            
            $('*').each((i, el) => {
                const className = $(el).attr('class') || '';
                const idName = $(el).attr('id') || '';
                
                const combined = (className + ' ' + idName).toLowerCase();
                
                if (combined.includes('nav') || 
                    combined.includes('footer') || 
                    combined.includes('cta-split') || 
                    combined.includes('cookie') ||
                    combined.startsWith('ghl')) {
                    $(el).remove();
                }
            });

            // 4. Brisanje praznih divova i spanova
            let cleanAgain = true;
            while (cleanAgain) {
                cleanAgain = false;
                $('div, span').each((i, el) => {
                    if ($(el).text().trim() === '' && $(el).children().length === 0) {
                        $(el).remove();
                        cleanAgain = true;
                    }
                });
            }

            // 5. Izdvajamo glavni sadržaj (<main> ako postoji, inače <body>)
            let mainContent = $('main').html();
            if (!mainContent) {
                mainContent = $('body').html();
            }

            if (!mainContent) {
                console.log(`⚠️ Nema glavnog sadržaja na: ${urlToVisit}`);
                continue;
            }

            // 6. Konverzija u Markdown
            let markdown = turndownService.turndown(mainContent);

            // 7. Čišćenje Markdown-a
            // Uklanjanje više od 3 prazne linije
            markdown = markdown.replace(/\n{3,}/g, '\n\n'); 
            // Brisanje usamljenih brojeva tipa "01", "02" (step numbers)
            markdown = markdown.replace(/^[0-9]{2}$/gm, ''); 
            // Brisanje separatora za liste (ako su slučajno generisani viškovi)
            markdown = markdown.replace(/^[\*\-\+]\s*$/gm, '');
            // Brisanje slika bez alt taga
            markdown = markdown.replace(/\!\[\]\([^\)]+\)/g, ''); 

            // 8. Priprema putanje i kreiranje foldera
            const urlObj = new URL(urlToVisit);
            let pathname = urlObj.pathname; // npr. "/sr/usluge"
            
            let dirPath = OUTPUT_DIR;
            if (pathname !== '/') {
                dirPath = path.join(OUTPUT_DIR, pathname);
            }
            
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }
            
            const filePath = path.join(dirPath, 'index.md');
            const dateStr = new Date().toISOString().split('T')[0];
            
            // 9. Dodavanje Frontmatter zaglavlja
            const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
url: "${canonicalUrl}"
last_updated: "${dateStr}"
---

`;

            // Upisivanje fajla
            fs.writeFileSync(filePath, frontmatter + markdown.trim() + '\n', 'utf8');
            console.log(`✅ Kreirano: /public${pathname === '/' ? '' : pathname}/index.md`);
            generatedCount++;

            // Kratka pauza da ne preopteretimo server
            await sleep(100);

        } catch (error) {
            console.error(`❌ Greška prilikom preuzimanja ${urlToVisit}:`, error.message);
        }
    }
    
    console.log(`\n========================================`);
    console.log(`🎉 Završeno! Ukupno generisanih Markdown ogledala: ${generatedCount}`);
    console.log(`========================================\n`);
}

crawl();
