'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
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
    { id: "studies", route: "/services/studies-and-analysis", icon: HiOutlineDocumentReport },
    { id: "training", route: "/services/training-and-education", icon: HiOutlineAcademicCap },
    { id: "certification", route: "/services/energy-certification", icon: HiOutlineBadgeCheck },
    { id: "design", route: "/services/design", icon: HiOutlinePencilAlt },
    { id: "web", route: "/services/web-applications", icon: HiOutlineCode },
    { id: "ppp", route: "/services/ppp-support", icon: HiOutlineOfficeBuilding },
    { id: "iso", route: "/services/iso-50001", icon: HiOutlineShieldCheck },
    { id: "consulting", route: "/services/energy-consulting", icon: HiOutlineChatAlt },
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

export default function Services() {
    const t = useTranslations('Services');
    const locale = useLocale();

    return (
        <section className={styles.section} id="usluge">
            <div className={styles.bgPattern}></div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.heading}
                    >
                        {t('titlePrefix')} <span className={styles.accent}>{t('titleAccent')}</span>
                    </motion.h2>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
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
    );
}
