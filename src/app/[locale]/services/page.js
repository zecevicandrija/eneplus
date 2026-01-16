'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import {
    HiOutlineLightningBolt,
    HiOutlineDocumentReport,
    HiOutlineAcademicCap,
    HiOutlineBadgeCheck,
    HiOutlinePencilAlt,
    HiOutlineCode,
    HiOutlineOfficeBuilding,
    HiOutlineShieldCheck,
    HiOutlineChatAlt,
    HiOutlineSearchCircle,
    HiOutlineChartSquareBar,
    HiOutlineClipboardList
} from 'react-icons/hi';

const servicesList = [
    { id: "energyManagement", route: "/services/energy-management", icon: HiOutlineLightningBolt },
    { id: "certification", route: "/services/energy-certification", icon: HiOutlineBadgeCheck },
    { id: "consulting", route: "/services/energy-consulting", icon: HiOutlineChatAlt },
    { id: "studies", route: "/services/studies-and-analysis", icon: HiOutlineDocumentReport },
    { id: "training", route: "/services/training-and-education", icon: HiOutlineAcademicCap },
    { id: "design", route: "/services/design", icon: HiOutlinePencilAlt },
    { id: "web", route: "/services/web-applications", icon: HiOutlineCode },
    { id: "ppp", route: "/services/ppp-support", icon: HiOutlineOfficeBuilding },
    { id: "iso", route: "/services/iso-50001", icon: HiOutlineShieldCheck },
    { id: "audits", route: "/services/energy-audits", icon: HiOutlineSearchCircle },
    { id: "measurements", route: "/services/measurements", icon: HiOutlineChartSquareBar },
    { id: "management", route: "/services/project-management", icon: HiOutlineClipboardList }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function ServicesPage() {
    const t = useTranslations('Services');
    const tPage = useTranslations('ServicesPage');
    const locale = useLocale();

    return (
        <main className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroContainer}>
                    <span className={styles.overline}>{tPage('overline')}</span>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {tPage('heroTitle1')}<br /><span className={styles.highlight}>{tPage('heroTitle2')}</span>
                    </motion.h1>
                    <div className={styles.heroLine}></div>
                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {tPage('subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.grid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                variants={itemVariants}
                            >
                                <Link href={`/${locale}${service.route}`} className={styles.cardLink}>
                                    <div className={styles.cardGlow}></div>
                                    <div className={styles.cardContent}>
                                        <div className={styles.iconWrapper}>
                                            <service.icon size={32} />
                                        </div>
                                        <h3 className={styles.cardTitle}>{t(`${service.id}.name`)}</h3>
                                        <p className={styles.cardDescription}>{t(`${service.id}.description`)}</p>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.learnMore}>{t('learnMore')}</span>
                                        <span className={styles.arrow}>→</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
