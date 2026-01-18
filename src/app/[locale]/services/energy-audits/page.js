'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Audits.module.css';

export default function EnergyAuditsPage() {
    const t = useTranslations('EnergyAuditsPage');
    const locale = useLocale();

    // Arrays for mapping content. Assuming lists are fixed length as per current design.
    const servicesList = Array.from({ length: 6 });
    const benefitsList = Array.from({ length: 7 });

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
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('detailsText1')}
                            </p>
                            <p>
                                {t('detailsText2')}
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/pregled.avif"
                                alt="Energetski pregled objekta"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STRATEGIC IMPORTANCE SECTION */}
            <section className={styles.strategySection}>
                <div className={styles.strategyContainer}>
                    <p className={styles.strategyText}>
                        {t('strategyText')}
                    </p>
                </div>
            </section>

            {/* SERVICES SECTION */}
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
                                {servicesList.slice(0, 3).map((_, index) => (
                                    <li key={index}>{t(`servicesList.${index}`)}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.serviceCard}>
                            <ul className={styles.checkList}>
                                {servicesList.slice(3, 6).map((_, index) => (
                                    <li key={index + 3}>{t(`servicesList.${index + 3}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
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
