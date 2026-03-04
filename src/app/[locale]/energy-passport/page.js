'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './EnergyPassport.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const scenarios = [
    { id: 1, icon: '🏗️' },
    { id: 2, icon: '🏠' },
    { id: 3, icon: '💰' },
];

export default function EnergyPassportPage() {
    const t = useTranslations('EnergyPassportPage');
    const introRef = useRef(null);
    const scenariosRef = useRef(null);
    const ctaRef = useRef(null);
    const heroActionsRef = useRef(null);

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
                        <span className={styles.highlight}>{t('heroTitle2')}</span>
                    </h1>
                    <div className={styles.heroLine}></div>
                    <div ref={heroActionsRef} className={styles.heroActions}>
                        <Link href="/energy-passport/request" className={styles.heroCta}>
                            {t('ctaButton')}
                            <span className={styles.heroCtaIcon}>→</span>
                        </Link>
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

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div ref={ctaRef} className={styles.ctaContainer}>
                    <div className={styles.ctaGlow}></div>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>{t('ctaText')}</p>
                    <Link href="/energy-passport/request" className={styles.ctaButton}>
                        {t('ctaButton')}
                    </Link>
                </div>
            </section>
        </main>
    );
}
