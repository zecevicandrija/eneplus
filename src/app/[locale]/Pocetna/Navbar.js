'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Navbar.module.css';
import { getAlternateBlogPath } from '@/lib/actions';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [alternatePath, setAlternatePath] = useState(null);
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const pathname = usePathname();

    // Get the path without locale prefix for switching
    const getPathWithoutLocale = () => {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length > 0 && (segments[0] === 'sr' || segments[0] === 'en')) {
            return '/' + segments.slice(1).join('/');
        }
        return pathname;
    };

    const otherLocale = locale === 'sr' ? 'en' : 'sr';

    useEffect(() => {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length >= 3 && segments[1] === 'blog') {
            const currentSlug = segments[2];
            getAlternateBlogPath(locale, currentSlug).then(path => {
                if (path) setAlternatePath(path);
                else setAlternatePath(null);
            });
        } else {
            setAlternatePath(null);
        }
    }, [pathname, locale]);

    const switchLocalePath = alternatePath || `/${otherLocale}${getPathWithoutLocale()}`;

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '/about' },
        { name: t('energyPassport'), href: '/energy-passport' },
        { name: t('services'), href: '/services' },
        { name: t('ourClients'), href: '/our-clients' },
        { name: t('software'), href: '/software' },
        { name: t('media'), href: '/media' },
        { name: t('blog'), href: '/blog' },
        { name: t('contact'), href: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image
                    src="/Assets/enepluslogo2.png"
                    alt="Eneplus Logo"
                    width={200}
                    height={60}
                    style={{ objectFit: 'contain', width: 'auto', height: '100%' }}
                    priority
                />
            </Link>

            <nav className={styles.nav}>
                {/* Language Toggle - Desktop (using direct link, not router.push) */}
                <a href={switchLocalePath} className={styles.langToggle} aria-label="Toggle Language">
                    <span className={locale === 'sr' ? styles.langActive : ''}>SR</span>
                    <span className={styles.langDivider}>/</span>
                    <span className={locale === 'en' ? styles.langActive : ''}>EN</span>
                </a>

                {/* Desktop Menu */}
                <ul className={styles.navList}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Controls */}
                <div className={styles.mobileControls}>
                    {/* Language Toggle - Mobile (using direct link) */}
                    <a href={switchLocalePath} className={styles.langToggleMobile} aria-label="Toggle Language">
                        {otherLocale.toUpperCase()}
                    </a>

                    {/* Mobile Hamburger */}
                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        <div className={styles.hamburgerLine} style={{ transform: mobileOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
                        <div className={styles.hamburgerLine} style={{ opacity: mobileOpen ? 0 : 1 }}></div>
                        <div className={styles.hamburgerLine} style={{ transform: mobileOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavList}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
