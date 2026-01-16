'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';
import styles from './EnMenadzment.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function EnMenadzmentPage() {
    const t = useTranslations('EnergyManagementPage');
    const locale = useLocale();
    const isoSectionRef = useRef(null);
    const stepsContainerRef = useRef(null);

    // Create array of 7 items for mapping
    const isoSteps = Array.from({ length: 7 });

    useEffect(() => {
        if (!isoSectionRef.current || !stepsContainerRef.current) return;

        const stepCards = stepsContainerRef.current.querySelectorAll(`.${styles.stepCard}`);

        const ctx = gsap.context(() => {
            // ISO Steps staggered scroll animation
            gsap.fromTo(stepCards,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: stepsContainerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, isoSectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <main className={styles.pageWrapper}>
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
                </div>
            </section>

            {/* INTRO SPLIT SECTION */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introContent}>
                        <p className={styles.leadText}>
                            {t('leadText')}
                        </p>

                        <div className={styles.textBlock}>
                            <p>
                                {t('p1')}
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('p2')}
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('p3')}
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/managment.avif"
                                alt="Energetski menadžment"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ISO 50001 SECTION - Steps with scroll animation */}
            <section ref={isoSectionRef} className={styles.isoSection}>
                <div className={styles.isoContainer}>
                    <div className={styles.isoHeader}>
                        <span className={styles.isoLabel}>{t('isoLabel')}</span>
                        <h2 className={styles.isoTitle}>{t('isoTitle')}</h2>
                        <p className={styles.isoSubtitle}>{t('isoSubtitle')}</p>
                    </div>

                    <div ref={stepsContainerRef} className={styles.stepsGrid}>
                        {isoSteps.map((_, index) => (
                            <div key={index} className={styles.stepCard}>
                                <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>
                                <p className={styles.stepText}>{t(`isoSteps.${index}`)}</p>
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
