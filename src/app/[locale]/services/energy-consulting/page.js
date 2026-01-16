'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import styles from './EnCons.module.css';

export default function EnergyConsultingPage() {
    const t = useTranslations('EnergyConsultingPage');
    const requirementsList = Array.from({ length: 3 });

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

                        <div className={styles.bookingInfoBlock}>
                            <h3 className={styles.infoTitle}>{t('bookingTitle')}</h3>
                            <p dangerouslySetInnerHTML={{ __html: t.raw('bookingText') }}></p>
                            <p className={styles.infoNote}>
                                {t('infoNote')}
                            </p>
                            <ul className={styles.requirementsList}>
                                {requirementsList.map((_, index) => (
                                    <li key={index}>{t(`requirementsList.${index}`)}</li>
                                ))}
                            </ul>
                            <div className={styles.importantNote}>
                                {t('importantNote')}
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/encons.avif"
                                alt="Energetski konsalting"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>

                        {/* Time Slot Info Card overlaid on image or below */}
                        <div className={styles.timeSlotCard}>
                            <h4 className={styles.timeSlotTitle}>{t('timeSlotTitle')}</h4>
                            <p dangerouslySetInnerHTML={{ __html: t.raw('timeSlotText') }}></p>
                            <p className={styles.confirmationText}>
                                {t('confirmationText')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTANTS TEAM SECTION */}
            <section className={styles.teamSection}>
                <div className={styles.teamContainer}>
                    <h2 className={styles.teamSectionTitle}>{t('teamTitle')}</h2>
                    <p className={styles.teamSectionSubtitle}>{t('teamSubtitle')}</p>

                    <div className={styles.teamGrid}>
                        <div className={styles.teamMemberCard}>
                            <div className={styles.memberAvatar}>
                                <Image
                                    src="/Assets/zeljko.avif"
                                    alt={t('teamMembers.zeljko.name')}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{t('teamMembers.zeljko.name')}</h3>
                                <p className={styles.memberTitle}>{t('teamMembers.zeljko.title')}</p>
                                <a href="tel:+381641872552" className={styles.memberContact}>{t('teamMembers.zeljko.phone')}</a>
                            </div>
                        </div>

                        <div className={styles.teamMemberCard}>
                            <div className={styles.memberAvatar}>
                                <Image
                                    src="/Assets/nikola.avif"
                                    alt={t('teamMembers.nikola.name')}
                                    width={100}
                                    height={100}
                                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{t('teamMembers.nikola.name')}</h3>
                                <p className={styles.memberTitle}>{t('teamMembers.nikola.title')}</p>
                                <a href="tel:+381648375706" className={styles.memberContact}>{t('teamMembers.nikola.phone')}</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.generalContact}>
                        <p dangerouslySetInnerHTML={{ __html: t.raw('generalContact') }}></p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                    <p className={styles.ctaText}>
                        {t('ctaText')}
                    </p>
                    <a href="mailto:office@eneplus.rs" className={styles.ctaButton}>{t('ctaButton')}</a>
                </div>
            </section>
        </main>
    );
}
