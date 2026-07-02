'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './Audits.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const scenarios = [
    { id: 1, icon: '🏭' },
    { id: 2, icon: '🏛️' },
    { id: 3, icon: '🏨' },
];

const processSteps = [1, 2, 3, 4, 5];
const faqItems = [1, 2, 3, 4, 5, 6, 7, 8];
const servicesList = Array.from({ length: 7 });
const benefitsList = Array.from({ length: 6 });

export default function EnergyAuditsPage() {
    const t = useTranslations('EnergyAuditsPage');
    const locale = useLocale();
    
    const introRef = useRef(null);
    const scenariosRef = useRef(null);
    const processRef = useRef(null);
    const legalRef = useRef(null);
    const faqRef = useRef(null);
    const ctaRef = useRef(null);
    const heroActionsRef = useRef(null);

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate intro text blocks
            if (introRef.current) {
                const textBlocks = introRef.current.querySelectorAll(`.${styles.textBlock}`);
                gsap.fromTo(textBlocks,
                    { y: 40, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: introRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate scenario cards
            if (scenariosRef.current) {
                const cards = scenariosRef.current.querySelectorAll(`.${styles.scenarioCard}`);
                gsap.fromTo(cards,
                    { scale: 0.85, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.12,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: scenariosRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate process steps
            if (processRef.current) {
                const steps = processRef.current.querySelectorAll(`.${styles.processStep}`);
                gsap.fromTo(steps,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: processRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate CTA
            if (ctaRef.current) {
                gsap.fromTo(ctaRef.current,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate hero actions
            if (heroActionsRef.current) {
                gsap.fromTo(heroActionsRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    // FAQ Schema Markup (JSON-LD)
    const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": t(`faq${item}Question`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faq${item}Answer`)
            }
        }))
    };

    // Service Schema Markup
    const serviceSchemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": locale === 'sr' ? "Energetski pregled" : "Energy Audit",
        "description": t.raw('metadata.description') || '',
        "provider": {
            "@type": "Organization",
            "name": "Eneplus",
            "url": "https://www.eneplus.rs",
            "telephone": "+381648172033",
            "email": "office@eneplus.rs",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Beograd",
                "addressCountry": "RS"
            }
        },
        "areaServed": {
            "@type": "Country",
            "name": "Serbia"
        },
        "serviceType": locale === 'sr' ? "Energetski pregled" : "Energy Audit"
    };

    return (
        <main className={styles.pageWrapper}>
            {/* JSON-LD Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaData) }}
            />

            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroContainer}>
                    <span className={styles.overline}>{t('overline')}</span>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle1')}<br />
                        <span className={styles.highlight}>{t('heroTitle2')}</span>
                    </h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
                    <div ref={heroActionsRef} className={styles.heroActions}>
                        <Link href="/contact" className={styles.heroCta}>
                            {t('ctaButton')}
                            <span className={styles.heroCtaIcon}>→</span>
                        </Link>
                        <a href="tel:+381648172033" className={styles.heroPhone}>
                            <span className={styles.heroPhoneIcon}>📞</span>
                            {t('heroPhoneText')}
                        </a>
                    </div>
                    <div className={styles.trustBadges}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('trustBadge1Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('trustBadge1Label')}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('trustBadge2Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('trustBadge2Label')}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('trustBadge3Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('trustBadge3Label')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className={styles.introSection}>
                <div ref={introRef} className={styles.introContainer}>
                    <h2 className={styles.introTitle}>{t('introTitle')}</h2>
                    <div className={styles.introContent}>
                        <div className={styles.textBlock}>
                            <p className={styles.leadText}>{t('introText1')}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p>{t('introText2')}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p>{t('introText3')}</p>
                        </div>
                        <div className={styles.textBlock}>
                            <p>{t('introText4')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCENARIOS SECTION */}
            <section className={styles.scenariosSection}>
                <div className={styles.scenariosContainer}>
                    <div className={styles.scenariosHeader}>
                        <h2 className={styles.scenariosTitle}>{t('scenariosTitle')}</h2>
                    </div>
                    <div ref={scenariosRef} className={styles.scenariosGrid}>
                        {scenarios.map((scenario) => (
                            <div key={scenario.id} className={styles.scenarioCard}>
                                <div className={styles.scenarioNumber}>
                                    {String(scenario.id).padStart(2, '0')}
                                </div>
                                <span className={styles.scenarioIcon}>{scenario.icon}</span>
                                <h3 className={styles.scenarioTitle}>
                                    {t(`scenario${scenario.id}Title`)}
                                </h3>
                                <p className={styles.scenarioText}>
                                    {t(`scenario${scenario.id}Text`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS TIMELINE SECTION */}
            <section className={styles.processSection}>
                <div className={styles.processContainer}>
                    <div className={styles.processHeader}>
                        <span className={styles.processOverline}>{t('processOverline')}</span>
                        <h2 className={styles.processTitle}>{t('processTitle')}</h2>
                    </div>
                    <div ref={processRef} className={styles.processTimeline}>
                        {processSteps.map((step) => (
                            <div key={step} className={styles.processStep}>
                                <div className={styles.processStepNumber}>{step}</div>
                                <div className={styles.processStepContent}>
                                    <h3 className={styles.processStepTitle}>{t(`process${step}Title`)}</h3>
                                    <p className={styles.processStepText}>{t(`process${step}Text`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES INCLUDED SECTION */}
            <section className={styles.servicesSection}>
                <div className={styles.servicesContainer}>
                    <div className={styles.servicesHeader}>
                        <h2 className={styles.sectionTitle}>{t('servicesTitle')}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t.rich('servicesSubtitle', {
                                highlight: (chunks) => <span className={styles.standardHighlight}>{chunks}</span>
                            })}
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        <div className={styles.serviceCard}>
                            <ul className={styles.checkList}>
                                {servicesList.slice(0, 4).map((_, index) => (
                                    <li key={index}>{t(`servicesList.${index}`)}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <ul className={styles.checkList}>
                                {servicesList.slice(4, 7).map((_, index) => (
                                    <li key={index + 4}>{t(`servicesList.${index + 4}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEGAL RULES SECTION */}
            <section ref={legalRef} className={styles.legalSection}>
                <div className={styles.legalContainer}>
                    <h2 className={styles.legalTitle}>{t('legalTitle')}</h2>
                    <p className={styles.legalText}>{t('legalText1')}</p>
                    <div className={styles.legalHighlight}>
                        <p>{t('legalHighlight')}</p>
                    </div>
                    <p className={styles.legalText}>{t('legalText2')}</p>
                    <ul className={styles.legalList}>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <li key={item} className={styles.legalListItem}>
                                <span className={styles.legalListIcon}>✓</span>
                                {t(`legalItem${item}`)}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>
                    <h2 className={styles.benefitsTitle}>{t('benefitsTitle')}</h2>
                    <div className={styles.benefitsGrid}>
                        {benefitsList.map((_, index) => (
                            <div key={index} className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>+</span>
                                <span className={styles.benefitText}>{t(`benefitsList.${index}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ ACCORDION SECTION */}
            <section ref={faqRef} className={styles.faqSection} id="faq">
                <div className={styles.faqContainer}>
                    <div className={styles.faqHeader}>
                        <span className={styles.faqOverline}>{t('faqOverline')}</span>
                        <h2 className={styles.faqTitle}>{t('faqTitle')}</h2>
                    </div>
                    <div className={styles.faqList}>
                        {faqItems.map((item) => (
                            <div key={item} className={styles.faqItem}>
                                <button
                                    className={openFaq === item ? styles.faqQuestionOpen : styles.faqQuestion}
                                    onClick={() => toggleFaq(item)}
                                    aria-expanded={openFaq === item}
                                >
                                    {t(`faq${item}Question`)}
                                    <span className={openFaq === item ? styles.faqToggleOpen : styles.faqToggle}>
                                        +
                                    </span>
                                </button>
                                <div className={`${styles.faqAnswer} ${openFaq === item ? styles.faqAnswerOpen : ''}`}>
                                    <p>{t(`faq${item}Answer`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div ref={ctaRef} className={styles.ctaContainer}>
                    <div className={styles.ctaGlow}></div>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>{t('ctaText')}</p>
                    <div className={styles.ctaActions}>
                        <Link href="/contact" className={styles.ctaButton}>
                            {t('ctaButton')}
                        </Link>
                        <a href="tel:+381648172033" className={styles.ctaPhone}>
                            <span className={styles.ctaPhoneIcon}>📞</span>
                            +381 64 817 2033
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
