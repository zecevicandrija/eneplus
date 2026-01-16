'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import styles from './Contact.module.css';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.3 }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <main className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.heroSection} ref={heroRef}>
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

            {/* CONTENT SECTION */}
            <section className={styles.contentSection} ref={contentRef}>
                <div className={styles.contentContainer}>
                    {/* Left Column: Info */}
                    <div className={styles.infoColumn}>

                        {/* Company Details */}
                        <div className={styles.infoBlock}>
                            <h2 className={styles.blockTitle}>{t('companyInfoTitle')}</h2>
                            <ul className={styles.dataList}>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('pib')}:</span>
                                    <span className={styles.dataValue}>109366766</span>
                                </li>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('idNumber')}:</span>
                                    <span className={styles.dataValue}>64123637</span>
                                </li>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('account')}:</span>
                                    <span className={styles.dataValue}>160-445565-41 (Banca Intesa)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className={styles.infoBlock}>
                            <h2 className={styles.blockTitle}>{t('contactTitle')}</h2>
                            <ul className={styles.dataList}>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('email')}:</span>
                                    <a href="mailto:office@eneplus.rs" className={styles.contactLink}>office@eneplus.rs</a>
                                </li>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('phones')}:</span>
                                    <div className={styles.phonesList}>
                                        <a href="tel:+381648172033" className={styles.contactLink}>+381 64 817 2033</a>
                                        <a href="tel:+381648375706" className={styles.contactLink}>+381 64 837 5706</a>
                                    </div>
                                </li>
                                <li className={styles.dataItem}>
                                    <span className={styles.dataLabel}>{t('address')}:</span>
                                    <span className={styles.dataValue}>Stevana Doronjskog 38, 21460 Vrbas, Srbija</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className={styles.socialWrapper}>
                            <h2 className={styles.socialTitle}>{t('socialTitle')}</h2>
                            <div className={styles.socialLinks}>
                                <a href="https://www.youtube.com/channel/UCu8ntxFoaJFflSxjzWO_hYw" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                                <a href="https://x.com/EneplusOffice" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X (Twitter)">
                                    <FaXTwitter />
                                </a>
                                <a href="https://www.instagram.com/eneplus_vrbas/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Map */}
                    <div className={styles.mapColumn}>
                        <iframe
                            src="https://maps.google.com/maps?q=Stevana+Doronjskog+38,+Vrbas&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            title="Eneplus Location"
                            className={styles.mapFrame}
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
