'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('Footer');
    const tServices = useTranslations('Services');
    const tNav = useTranslations('Navbar');
    const locale = useLocale();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        usluge: [
            { name: tServices('energyManagement.name'), href: `/${locale}/services/energy-management` },
            { name: tServices('audits.name'), href: `/${locale}/services/energy-audits` },
            { name: tServices('iso.name'), href: `/${locale}/services/iso-50001` },
            { name: tServices('design.name'), href: `/${locale}/services/design` },
        ],
        kompanija: [
            { name: tNav('about'), href: `/${locale}/about` },
            { name: tNav('services'), href: `/${locale}/services` },
            { name: tNav('software'), href: `/${locale}/software` },
            { name: tNav('contact'), href: `/${locale}/contact` },
        ],
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerGlow}></div>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    {/* Logo & Description */}
                    <div className={styles.brandColumn}>
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/Assets/enepluslogo.png"
                                alt="Eneplus Logo"
                                width={160}
                                height={50}
                                style={{ objectFit: 'contain', height: 'auto' }}
                            />
                        </div>
                        <p className={styles.brandDescription}>
                            {t('description')}
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.linksSection}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>{t('servicesTitle')}</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.usluge.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>{t('companyTitle')}</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.kompanija.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.columnTitle}>{t('contactTitle')}</h4>
                            <ul className={styles.linkList}>
                                <li className={styles.contactItem}>
                                    <span>office@eneplus.rs</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <span>+381 64 8172033</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <span>+381 64 8375706</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <span>Vrbas, Srbija</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <p className={styles.copyright}>
                        © {currentYear} Eneplus. {t('rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
