'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Cert.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CertificationPage() {
    const t = useTranslations('CertificationPage');
    const locale = useLocale();
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(sectionRef.current.querySelectorAll('.anim-block'), {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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

            {/* CONTENT SECTION - ELABORAT */}
            <section ref={sectionRef} className={styles.contentSection}>
                <div className={styles.contentContainer}>
                    {/* Block 1: Elaborat */}
                    <div className={`${styles.contentBlock} anim-block`}>
                        <div className={styles.blockHeader}>
                            <h2 className={styles.blockTitle}>{t('elaboratTitle')}</h2>
                            <div className={styles.titleUnderline}></div>
                        </div>
                        <div className={styles.textWrapper}>
                            <p>
                                {t('elaboratText')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPLIT SECTION - ENERGETSKI PASOS */}
            <section className={styles.splitSection}>
                <div className={styles.splitContainer}>
                    <div className={styles.splitContent}>
                        <div className={styles.contentBlock} style={{ background: 'transparent', border: 'none', padding: 0 }}>
                            <div className={styles.blockHeader}>
                                <h2 className={styles.blockTitle}>{t('passportTitle')}</h2>
                                <div className={styles.titleUnderline}></div>
                            </div>
                            <div className={styles.textWrapper}>
                                <p>
                                    {t('passportText1')}
                                </p>
                                <p>
                                    {t('passportText2')}
                                </p>
                                <p>
                                    {t('passportText3')}
                                </p>

                                <a
                                    href="https://www.daibau.rs/clanak/785/energetski_pasos#zeljko-zecevic-pr-biro-za-konsalting-i-inzenjering-u-oblasti-energetske-efikasnosti-eneplus-vrbas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.externalLinkBtn}
                                >
                                    {t('passportLink')}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            <Image
                                src="/Assets/pasos.avif"
                                alt="Energetski pasoš zgrade"
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.projectImage}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
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
