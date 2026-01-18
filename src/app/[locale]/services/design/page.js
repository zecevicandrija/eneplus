'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Design.module.css';

export default function DesignPage() {
    const t = useTranslations('DesignPage');
    const locale = useLocale();

    // Create array items for mapping
    const offerList = Array.from({ length: 3 });
    const benefitsList = Array.from({ length: 3 });

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

            {/* INTRO SPLIT SECTION */}
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introContent}>
                        <div className={styles.highlightBlock}>
                            <p className={styles.leadText}>
                                {t('introText')}
                            </p>
                        </div>

                        <div className={styles.warningBlock}>
                            <div className={styles.warningIcon}>!</div>
                            <p className={styles.warningText} dangerouslySetInnerHTML={{ __html: t.raw('warningText') }}></p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/projektovanje.avif"
                                alt="Arhitektonsko projektovanje i planiranje"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OFFER SECTION */}
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

            {/* INTEGRAL APPROACH SECTION */}
            <section className={styles.integralSection}>
                <div className={styles.integralContainer}>
                    <div className={styles.integralBlock}>
                        <h2 className={styles.integralTitle}>{t('integralTitle')}</h2>
                        <p className={styles.integralText}>
                            {t('integralText')}
                        </p>
                        <div className={styles.benefitsGrid}>
                            {benefitsList.map((_, index) => (
                                <div key={index} className={styles.benefitItem}>
                                    <span className={styles.checkIcon}>✓</span>
                                    <span>{t(`benefitsList.${index}`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>{t('ctaText')}</p>
                    <Link href="/contact" className={styles.ctaButton}>{t('ctaButton')}</Link>
                </div>
            </section>
        </main>
    );
}
