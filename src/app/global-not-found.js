/* eslint-disable @next/next/no-html-link-for-pages -- Use full-page navigation without client routing or prefetching on the standalone 404. */
/* eslint-disable @next/next/no-img-element -- Serve the existing logo directly without the image optimization service. */

import { Outfit } from 'next/font/google';
import styles from './global-not-found.module.css';

const outfit = Outfit({ subsets: ['latin'], display: 'swap' });

export const metadata = {
    title: 'Stranica nije pronađena | Eneplus',
    robots: { index: false, follow: true },
};

function Arrow({ diagonal = false }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Generated at build time: no locale lookup, request headers or client state.
export default function GlobalNotFound() {
    return (
        <html lang="sr">
            <body className={`${outfit.className} ${styles.body}`}>
                <header className={styles.header}>
                    <a href="/sr" aria-label="Eneplus — početna" className={styles.logo}>
                        <img src="/Assets/enepluslogo2.png" alt="Eneplus" width="180" height="54" />
                    </a>
                    <a href="/sr/kontakt" className={styles.headerLink}>Kontakt <Arrow diagonal /></a>
                </header>
                <main className={styles.main}>
                    <div className={styles.grid} aria-hidden="true" />
                    <div className={styles.glow} aria-hidden="true" />
                    <div className={styles.content}>
                        <div className={styles.copy}>
                            <p className={styles.eyebrow}><span /> ENEPLUS · STRANICA NIJE PRONAĐENA</p>
                            <h1 className={styles.title}>Vratimo se na<br /><span>pravi put.</span></h1>
                            <p className={styles.description}>
                                Stranica koju tražite ne postoji ili je premeštena.
                                Naša energija je i dalje tu — pronađite ono što vam je potrebno.
                            </p>
                            <div className={styles.actions}>
                                <a href="/sr" className={styles.primary}>Na početnu <Arrow /></a>
                                <a href="/sr/usluge" className={styles.secondary}>Istražite usluge <Arrow diagonal /></a>
                            </div>
                            <section lang="en" className={styles.english} aria-label="English">
                                <span className={styles.language}>EN</span>
                                <div>
                                    <h2>Let’s get you back on track.</h2>
                                    <p>This page doesn’t exist or has moved. <a href="/en">Back to home <span aria-hidden="true">↗</span></a></p>
                                </div>
                            </section>
                        </div>
                        <div className={styles.visual} aria-hidden="true">
                            <div className={styles.orbit} />
                            <div className={styles.innerOrbit} />
                            <span className={styles.nodeTop} />
                            <span className={styles.nodeBottom} />
                            <span className={styles.axis} />
                            <span className={styles.errorCode}>404<span className={styles.plus}>+</span></span>
                            <span className={styles.visualCaption}><span /> NOVI PRAVAC. ISTA ENERGIJA.</span>
                        </div>
                    </div>
                    <footer className={styles.footer}>
                        <span>ENERGIJA ZNANJA. SNAGA REŠENJA.</span>
                        <a href="/sr/kontakt">Tu smo da pomognemo <Arrow diagonal /></a>
                    </footer>
                </main>
            </body>
        </html>
    );
}
