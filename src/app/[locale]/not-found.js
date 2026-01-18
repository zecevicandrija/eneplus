'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './NotFound.module.css';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh' }}>
            <section className={styles.section} style={{ flex: 1 }}>
                <div className={styles.bgDecoGlow}></div>
                <div className={styles.bgDecoLine}></div>
                <div className={styles.container}>
                    <div className={styles.glassCard}>
                        <div className={styles.heading}>
                            <span className={styles.titlePrefix}>{t('titlePrefix')}</span>
                            <span className={styles.titleAccent}>{t('titleAccent')}</span>
                        </div>
                        <p className={styles.description}>
                            {t('description')}
                        </p>
                        <div className={styles.ctaWrapper}>
                            <Link href="/" className={styles.ctaButton}>
                                <span className={styles.btnText}>{t('button')}</span>
                                <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
