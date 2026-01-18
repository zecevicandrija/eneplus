'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Team.module.css';

export default function Team() {
    const t = useTranslations('Team');
    const locale = useLocale();

    return (
        <section className={styles.teamSection}>
            <div className={styles.bgDecoGlow}></div>
            <div className={styles.bgDecoLine}></div>

            <div className={styles.container}>

                <div className={styles.headerContent}>
                    <span className={styles.overline}>{t('overline')}</span>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.description}>
                        {t('description')}
                    </p>
                </div>

                <div className={styles.teamGrid}>
                    {/* Zeljko */}
                    <div className={styles.memberCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/Assets/zeljko.avif"
                                alt={t('zeljko.name')}
                                width={120}
                                height={120}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.memberInfo}>
                            <h3 className={styles.name}>{t('zeljko.name')}</h3>
                            <p className={styles.role}>{t('zeljko.title')}</p>
                            <a href={`tel:${t('zeljko.phone').replace(/\s/g, '')}`} className={styles.phone}>
                                {t('zeljko.phone')}
                            </a>
                        </div>
                    </div>

                    {/* Nikola */}
                    <div className={styles.memberCard}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/Assets/nikola.avif"
                                alt={t('nikola.name')}
                                width={120}
                                height={120}
                                className={styles.avatar}
                            />
                        </div>
                        <div className={styles.memberInfo}>
                            <h3 className={styles.name}>{t('nikola.name')}</h3>
                            <p className={styles.role}>{t('nikola.title')}</p>
                            <a href={`tel:${t('nikola.phone').replace(/\s/g, '')}`} className={styles.phone}>
                                {t('nikola.phone')}
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="/contact" className={styles.ctaButton}>
                        {t('cta')}
                    </Link>
                </div>

            </div>
        </section>
    );
}
