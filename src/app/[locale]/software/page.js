'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './Software.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const videoUrls = {
    SRB: "https://www.youtube.com/embed/HHUTF3Wh8zU?si=bYTQG5_nwwFN_fFq",
    ENG: "https://www.youtube.com/embed/GXZirVdLHLA",
    DE: "https://www.youtube.com/embed/-tThB7m0RJg"
};

const features = [
    "Benchmarking",
    "Emissions Monitoring",
    "Cost / Use Reporting",
    "Energy audit database",
    "Energy Price Analysis",
    "Budgeting & Forecasting",
    "Bill Database",
    "Weather Normalization"
];

const modulesList = [
    { id: "lighting", icon: "💡" },
    { id: "heating", icon: "🔥" },
    { id: "water", icon: "💧" },
    { id: "buildings", icon: "🏢" },
    { id: "fleet", icon: "🚗" }
];

export default function SoftwarePage() {
    const t = useTranslations('SoftwarePage');
    const locale = useLocale();
    const featuresRef = useRef(null);
    const capabilitiesRef = useRef(null);
    const modulesRef = useRef(null);
    const [videoLang, setVideoLang] = useState('SRB');

    // Get capabilities list from translations
    const capabilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => t(`capabilitiesList.${i}`));

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate features
            if (featuresRef.current) {
                const featureCards = featuresRef.current.querySelectorAll(`.${styles.featureTag}`);
                gsap.fromTo(featureCards,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.08,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: featuresRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate capabilities
            if (capabilitiesRef.current) {
                const capabilityItems = capabilitiesRef.current.querySelectorAll(`.${styles.capabilityItem}`);
                gsap.fromTo(capabilityItems,
                    { x: -30, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.06,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: capabilitiesRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate modules
            if (modulesRef.current) {
                const moduleCards = modulesRef.current.querySelectorAll(`.${styles.moduleCard}`);
                gsap.fromTo(moduleCards,
                    { scale: 0.8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: modulesRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <main className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroGlowSecondary}></div>
                <div className={styles.heroContainer}>
                    <span className={styles.overline}>{t('overline')}</span>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle1')}<br />
                        <span className={styles.highlight}>{t('heroTitle2')}</span><br />
                        <span className={styles.heroSubtitle}>{t('heroSubtitle')}</span>
                    </h1>
                    <div className={styles.heroLine}></div>
                    <div ref={featuresRef} className={styles.featureTags}>
                        {features.map((feature, index) => (
                            <span key={index} className={styles.featureTag}>{feature}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introContent}>
                        <p className={styles.leadText}>
                            {t('leadText')}
                        </p>
                        <div className={styles.targetAudience}>
                            <h3 className={styles.targetTitle}>{t('targetTitle')}</h3>
                            <p className={styles.targetText} dangerouslySetInnerHTML={{ __html: t.raw('targetText') }}></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className={styles.videoSection}>
                <div className={styles.videoContainer}>
                    <div className={styles.videoHeader}>
                        <span className={styles.videoLabel}>{t('videoLabel')}</span>
                        <h2 className={styles.videoTitle}>{t('videoTitle')}</h2>

                        <div className={styles.langControls}>
                            <button
                                className={`${styles.langButton} ${videoLang === 'SRB' ? styles.langButtonActive : ''}`}
                                onClick={() => setVideoLang('SRB')}
                            >
                                SRB
                            </button>
                            <button
                                className={`${styles.langButton} ${videoLang === 'ENG' ? styles.langButtonActive : ''}`}
                                onClick={() => setVideoLang('ENG')}
                            >
                                ENG
                            </button>
                            <button
                                className={`${styles.langButton} ${videoLang === 'DE' ? styles.langButtonActive : ''}`}
                                onClick={() => setVideoLang('DE')}
                            >
                                DE
                            </button>
                        </div>
                    </div>
                    <div className={styles.videoWrapper}>
                        <div className={styles.videoFrame}>
                            <iframe
                                src={videoUrls[videoLang]}
                                title="Energy Management Software Prezentacija"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.videoGlow}></div>
                    </div>
                </div>
            </section>

            {/* CAPABILITIES SECTION */}
            <section className={styles.capabilitiesSection}>
                <div className={styles.capabilitiesContainer}>
                    <div className={styles.capabilitiesHeader}>
                        <span className={styles.capabilitiesLabel}>{t('capabilitiesLabel')}</span>
                        <h2 className={styles.capabilitiesTitle}>{t('capabilitiesTitle')}</h2>
                    </div>
                    <div ref={capabilitiesRef} className={styles.capabilitiesList}>
                        {capabilities.map((capability, index) => (
                            <div key={index} className={styles.capabilityItem}>
                                <div className={styles.capabilityNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <p className={styles.capabilityText}>{capability}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODULES SECTION */}
            <section className={styles.modulesSection}>
                <div className={styles.modulesContainer}>
                    <div className={styles.modulesHeader}>
                        <span className={styles.modulesLabel}>{t('modulesLabel')}</span>
                        <h2 className={styles.modulesTitle}>{t('modulesTitle')}</h2>
                    </div>
                    <div ref={modulesRef} className={styles.modulesGrid}>
                        {modulesList.map((module, index) => (
                            <div key={index} className={styles.moduleCard}>
                                <span className={styles.moduleIcon}>{module.icon}</span>
                                <h3 className={styles.moduleName}>{t(`modules.${module.id}`)}</h3>
                                <div className={styles.moduleDecor}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>{t('ctaText')}</p>
                    <Link href={`/${locale}/contact`} className={styles.ctaButton}>{t('ctaButton')}</Link>
                </div>
            </section>
        </main>
    );
}
