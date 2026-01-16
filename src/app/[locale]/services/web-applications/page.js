'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './App.module.css';

export default function WebAppsPage() {
    const t = useTranslations('WebAppsPage');
    const locale = useLocale();

    const offerList = Array.from({ length: 3 });

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
                                {t('introText')}
                            </p>
                            <div className={styles.techTags}>
                                <span>JAVA</span>
                                <span>JavaScript</span>
                                <span>Node.js</span>
                                <span>Angular</span>
                                <span>React</span>
                                <span>Vue</span>
                                <span>Redux</span>
                                <span>MongoDB</span>
                                <span>MySQL</span>
                                <span>HTML</span>
                                <span>CSS</span>
                            </div>
                        </div>

                        <div className={styles.specializationBlock}>
                            <h3 className={styles.specializationTitle}>{t('specializationTitle')}</h3>
                            <p className={styles.specializationText} dangerouslySetInnerHTML={{ __html: t.raw('specializationText') }}></p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/apps.avif"
                                alt="Razvoj web aplikacija i prezentacija"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRESENTATION SECTION */}
            <section className={styles.offerSection}>
                <div className={styles.offerContainer}>
                    <div className={styles.offerCard}>
                        <h3 className={styles.offerTitle}>{t('offerTitle')}</h3>
                        <div className={styles.offerLine}></div>
                        <p className={styles.offerText}>
                            {t('offerText')}
                        </p>
                        <ul className={styles.offerList}>
                            {offerList.map((_, index) => (
                                <li key={index}>{t(`offerList.${index}`)}</li>
                            ))}
                        </ul>
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
