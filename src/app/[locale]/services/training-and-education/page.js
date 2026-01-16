'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Training.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function TrainingPage() {
    const t = useTranslations('TrainingPage');
    const locale = useLocale();
    const listRef = useRef(null);

    // Array of 4 items for the training list
    const trainingItems = Array.from({ length: 4 });

    useEffect(() => {
        if (!listRef.current) return;

        const items = listRef.current.querySelectorAll(`.${styles.cardItem}`);

        const ctx = gsap.context(() => {
            gsap.fromTo(items,
                {
                    y: 40,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, listRef);

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
                        <div className={styles.highlightBlock}>
                            <p className={styles.leadText}>
                                {t('leadText')}
                            </p>
                        </div>

                        <div className={styles.specializationBlock}>
                            <h3 className={styles.specializationTitle}>{t('expertiseTitle')}</h3>
                            <p className={styles.specializationText} dangerouslySetInnerHTML={{ __html: t.raw('expertiseText') }}></p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/trening.avif"
                                alt="Treninzi i edukacije"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    <div className={styles.introBlock}>
                        <h2 style={{
                            fontFamily: 'var(--font-outfit)',
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            marginBottom: '2rem',
                            color: '#1a1a1a',
                            textTransform: 'uppercase'
                        }}>
                            {t('listTitle')}
                        </h2>
                    </div>

                    <div ref={listRef} className={styles.gridContainer}>
                        {trainingItems.map((_, index) => (
                            <div key={index} className={styles.cardItem}>
                                <div className={styles.cardMarker}></div>
                                <h3 className={styles.cardText}>{t(`trainingItems.${index}`)}</h3>
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
