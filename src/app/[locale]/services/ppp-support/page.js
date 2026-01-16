'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Ppp.module.css';

export default function PppSupportPage() {
    const t = useTranslations('PppSupportPage');
    const locale = useLocale();

    // Arrays for mapping content
    const servicesList = Array.from({ length: 8 });
    const phases = Array.from({ length: 4 });

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

                        <div className={styles.servicesBlock}>
                            <h3 className={styles.servicesTitle}>{t('servicesTitle')}</h3>
                            <ul className={styles.servicesList}>
                                {servicesList.map((_, index) => (
                                    <li key={index}>{t(`servicesList.${index}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/ppp.avif"
                                alt="Javno-privatno partnerstvo"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PHASES SECTION */}
            <section className={styles.phasesSection}>
                <div className={styles.phasesContainer}>
                    <h2 className={styles.phasesSectionTitle}>{t('phasesSectionTitle')}</h2>
                    <p className={styles.phasesSubtitle}>{t('phasesSubtitle')}</p>

                    <div className={styles.phasesGrid}>
                        {phases.map((_, index) => {
                            const phaseNum = (index + 1).toString().padStart(2, '0');
                            const listLength = index === 0 || index === 1 || index === 2 || index === 3 ? 2 : 0; // Each phase has 2 items in current JSON

                            return (
                                <div key={index} className={styles.phaseCard}>
                                    <div className={styles.phaseHeader}>
                                        <span className={styles.phaseNumber}>{phaseNum}</span>
                                        <h3 className={styles.phaseTitle}>{t(`phases.${index}.title`)}</h3>
                                    </div>
                                    <div className={styles.phaseContent}>
                                        <h4 className={styles.phaseSubtitle}>{t(`phases.${index}.subtitle`)}</h4>
                                        <ul className={styles.phaseList}>
                                            <li>{t(`phases.${index}.list.0`)}</li>
                                            <li>{t(`phases.${index}.list.1`)}</li>
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
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
