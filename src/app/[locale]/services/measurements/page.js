'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Measurements.module.css';

export default function MeasurementsPage() {
    const t = useTranslations('MeasurementsPage');
    const locale = useLocale();

    // Arrays for mapping content.
    const thermoList = Array.from({ length: 3 });
    const parameterLabels = Array.from({ length: 4 });

    // Helper for icons mapping
    const getParameterIcon = (index) => {
        const icons = ['🌡️', '☁️', '💧', '💡'];
        return icons[index] || '';
    };

    return (
        <main className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroContainer}>
                    <span className={styles.overline}>{t('overline')}</span>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle')}
                    </h1>
                    <div className={styles.heroLine}></div>
                </div>
            </section>

            {/* INTRO/THERMOGRAPHY SPLIT SECTION */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introContent}>
                        <h2 className={styles.contentTitle}>{t('thermoTitle')}</h2>
                        <div className={styles.highlightBlock}>
                            <p className={styles.leadText}>
                                {t('thermoLead')}
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('thermoText')}
                            </p>
                            <ul className={styles.featureList}>
                                {thermoList.map((_, index) => (
                                    <li key={index}>{t(`thermoList.${index}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/merenja.avif"
                                alt="Termovizijska merenja"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOWER DOOR SECTION */}
            <section className={styles.blowerSection}>
                <div className={styles.blowerContainer}>
                    <div className={styles.blowerContent}>
                        <h2 className={styles.sectionTitleWhite}>{t('blowerTitle')}</h2>
                        <p className={styles.sectionSubtitleWhite}>{t('blowerSubtitle')}</p>

                        <div className={styles.blowerGrid}>
                            <div className={styles.blowerCard}>
                                <h3 className={styles.cardTitle}>{t('preventionTitle')}</h3>
                                <p>
                                    {t('preventionText')}
                                </p>
                            </div>
                            <div className={styles.blowerCard}>
                                <h3 className={styles.cardTitle}>{t('comfortTitle')}</h3>
                                <p>
                                    {t('comfortText')}
                                </p>
                            </div>
                            <div className={styles.blowerCard}>
                                <h3 className={styles.cardTitle}>{t('standardsTitle')}</h3>
                                <p>
                                    {t('standardsText')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMFORT SECTION */}
            <section className={styles.comfortSection}>
                <div className={styles.comfortContainer}>
                    <div className={styles.comfortHeader}>
                        <h2 className={styles.contentTitle}>{t('comfortCheckTitle')}</h2>
                        <p className={styles.leadText}>
                            {t('comfortCheckLead')}
                        </p>
                    </div>

                    <div className={styles.parameterGrid}>
                        {parameterLabels.map((_, index) => (
                            <div key={index} className={styles.parameterItem}>
                                <span className={styles.parameterIcon}>{getParameterIcon(index)}</span>
                                <span className={styles.parameterLabel}>{t(`parameterLabels.${index}`)}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>{t.rich('ctaText')}</p>
                    <Link href="/contact" className={styles.ctaButton}>{t('ctaButton')}</Link>
                </div>
            </section>
        </main>
    );
}
