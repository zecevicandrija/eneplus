'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './About.module.css';

export default function About() {
    const t = useTranslations('About');
    const locale = useLocale();

    return (
        <section className={styles.aboutSection}>
            <div className={styles.bgDecoGlow}></div>
            <div className={styles.bgDecoLine}></div>

            <div className={styles.innerGrid}>
                {/* Image Side */}
                <div className={styles.imageArea}>
                    <div className={styles.imageWrapperMasked}>
                        <img
                            src="/Assets/pocetna.avif"
                            alt="Eneplus Energetska Efikasnost"
                            className={styles.mainImage}
                        />
                        <div className={styles.imageOverlayGradient}></div>
                    </div>

                    {/* Floating Tech Marker - kept as is */}
                    <div className={styles.techFloatingMarker}>
                        <span>{t('analytics')}</span>
                    </div>
                </div>

                {/* Content Side - Wrapper for better alignment */}
                <div className={styles.contentArea}>
                    {/* Glass Card Container */}
                    <div className={styles.glassCard}>

                        <div className={styles.headerBlock}>
                            <span className={styles.overline}>{t('overline')}</span>
                            <h2 className={styles.heading}>
                                {t('titleLine1')}<br />
                                <span className={styles.highlight}>{t('titleHighlight')}</span>
                            </h2>
                        </div>

                        <div className={styles.TextBlockLayout}>
                            <div className={styles.textBlockItem}>
                                <div className={styles.blockMarker}>01</div>
                                <div className={styles.textContent}>
                                    <p className={styles.leadParagraph}>
                                        <strong>ENEPLUS</strong> {t('p1')}
                                    </p>
                                </div>
                            </div>

                            <div className={`${styles.textBlockItem} ${styles.offsetBlock}`}>
                                <div className={styles.blockMarker}>02</div>
                                <div className={styles.textContent}>
                                    <p>{t('p2')}</p>
                                    <p>{t('p3')}</p>
                                </div>
                            </div>

                            {/* CTA Button Area */}
                            <div className={styles.ctaWrapper}>
                                <Link href="/results" className={styles.ctaButton}>
                                    <span className={styles.btnText}>{t('cta')}</span>
                                    <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
