'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Manage.module.css';

export default function ProjectManagementPage() {
    const t = useTranslations('ProjectManagementPage');
    const locale = useLocale();

    const workflowSteps = [
        { title: t('workflowSteps.0'), icon: "📋" },
        { title: t('workflowSteps.1'), icon: "🏗️" },
        { title: t('workflowSteps.2'), icon: "💰" },
        { title: t('workflowSteps.3'), icon: "📅" },
        { title: t('workflowSteps.4'), icon: "⚙️" },
        { title: t('workflowSteps.5'), icon: "🏁" }
    ];

    const methodList = [
        { title: t('methodList.0.title'), text: t('methodList.0.text') },
        { title: t('methodList.1.title'), text: t('methodList.1.text') },
        { title: t('methodList.2.title'), text: t('methodList.2.text') }
    ];

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
                                {t('introLead')}
                            </p>
                        </div>

                        <div className={styles.textBlock}>
                            <p>
                                {t('introText1')}
                            </p>
                            <p>
                                {t('introText2')}
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/project.avif"
                                alt="Upravljanje projektima"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKFLOW SECTION */}
            <section className={styles.workflowSection}>
                <div className={styles.workflowContainer}>
                    <div className={styles.workflowHeader}>
                        <h2 className={styles.sectionTitle}>{t('workflowTitle')}</h2>
                        <p className={styles.sectionSubtitle}>
                            {t('workflowSubtitle')}
                        </p>
                    </div>

                    <div className={styles.timelineGrid}>
                        {workflowSteps.map((item, index) => (
                            <div key={index} className={styles.timelineCard}>
                                <div className={styles.stepNumber}>0{index + 1}</div>
                                <div className={styles.iconWrapper}>{item.icon}</div>
                                <h3 className={styles.stepTitle}>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className={styles.methodSection}>
                <div className={styles.methodContainer}>
                    <div className={styles.methodContent}>
                        <h2 className={styles.methodTitle}>{t('methodTitle')}</h2>
                        <p className={styles.methodText}>
                            {t('methodText')}
                        </p>
                        <ul className={styles.methodList}>
                            {methodList.map((item, index) => (
                                <li key={index}>
                                    <span className={styles.checkIcon}>✓</span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.text}</p>
                                    </div>
                                </li>
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
                    <Link href="/contact" className={styles.ctaButton}>{t('ctaButton')}</Link>
                </div>
            </section>
        </main>
    );
}
