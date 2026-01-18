'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Iso.module.css';

export default function IsoPage() {
    const t = useTranslations('IsoPage');
    const locale = useLocale();

    const directBenefitsList = Array.from({ length: 7 });
    const businessBenefitsList = Array.from({ length: 6 });

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
                                {t('leadText')}
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('navPurpose')}
                            </p>
                            <p>
                                {t('introText')}
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/iso.avif"
                                alt="ISO 50001 Standard"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefitsIntro}>
                        <h2 className={styles.sectionTitle}>{t('benefitsTitle')}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t('benefitsSubtitle')}
                        </p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        {/* Direct Benefits */}
                        <div className={styles.benefitCard}>
                            <h3 className={styles.cardTitle}>{t('directBenefitsTitle')}</h3>
                            <div className={styles.cardLine}></div>
                            <ul className={styles.benefitList}>
                                {directBenefitsList.map((_, index) => (
                                    <li key={index}>{t(`directBenefitsList.${index}`)}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Intangible & Process Benefits */}
                        <div className={styles.benefitCard}>
                            <h3 className={styles.cardTitle}>{t('businessBenefitsTitle')}</h3>
                            <div className={styles.cardLine}></div>
                            <ul className={styles.benefitList}>
                                {businessBenefitsList.map((_, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: t.raw(`businessBenefitsList.${index}`) }}></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION SECTION */}
            <section className={styles.implSection}>
                <div className={styles.implContainer}>
                    <div className={styles.implContent}>
                        <h2 className={styles.implTitle}>{t('implTitle')}</h2>
                        <p className={styles.implText}>
                            {t('implText')}
                        </p>
                        <div className={styles.consultingBlock}>
                            <p>
                                <strong>{t('consultingBold')}</strong>
                            </p>
                            <p>
                                {t('consultingText')}
                            </p>
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
