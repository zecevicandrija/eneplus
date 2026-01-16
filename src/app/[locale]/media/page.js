'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    HiOutlineDocumentText,
    HiOutlineClipboardCheck,
    HiOutlinePhotograph,
    HiOutlineShieldCheck,
    HiDownload
} from 'react-icons/hi';
import { useTranslations } from 'next-intl';
import styles from './Media.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const documents = [
    { id: "energyManagement", icon: HiOutlineClipboardCheck, link: "https://www.eneplus.rs/_files/ugd/e87496_fee9a1e6b5844856905a6ab82ad282ac.pdf" },
    { id: "blowerDoor", icon: HiOutlineDocumentText, link: "https://www.eneplus.rs/_files/ugd/e87496_4a5c8611fccd4b95ac3cca9e8629da99.pdf" },
    { id: "thermography", icon: HiOutlinePhotograph, link: "https://www.eneplus.rs/_files/ugd/e87496_70da706cc70243728a9343af743ecde8.pdf" },
    { id: "iso", icon: HiOutlineShieldCheck, link: "https://www.eneplus.rs/_files/ugd/e87496_a7bf2616595644c6bdeed3b4397fcde5.pdf" }
];

const videosList = [
    { title: "Prezentacija softvera (SRB)", url: "https://www.youtube.com/embed/HHUTF3Wh8zU?si=bYTQG5_nwwFN_fFq", tag: "software" },
    { title: "Software presentation (ENG)", url: "https://www.youtube.com/embed/GXZirVdLHLA", tag: "software" },
    { title: "Software presentation (DE)", url: "https://www.youtube.com/embed/-tThB7m0RJg", tag: "software" },
    { title: "Energetski konsalting", url: "https://www.youtube.com/embed/RJOlNwZWW2Y", tag: "services" },
    { title: "Elaborati energetske efikasnosti", url: "https://www.youtube.com/embed/UgjmPWaHfe8", tag: "services" },
    { title: "Javno privatno partnerstvo", url: "https://www.youtube.com/embed/amXW310cXTQ", tag: "services" }
];

export default function MediaPage() {
    const t = useTranslations('MediaPage');
    const tServices = useTranslations('Services');
    const docsRef = useRef(null);
    const videosRef = useRef(null);

    // Map document IDs to translations
    // We can reuse service names for some docs, or use raw names if they differ
    const getDocName = (id) => {
        if (id === 'energyManagement') return tServices('energyManagement.name');
        if (id === 'iso') return tServices('iso.name');
        if (id === 'blowerDoor') return t('docs.blowerDoor');
        if (id === 'thermography') return t('docs.thermography');
        return '';
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Docs
            if (docsRef.current) {
                const docCards = docsRef.current.querySelectorAll(`.${styles.docCard}`);
                gsap.fromTo(docCards,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: docsRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }

            // Animate Videos
            if (videosRef.current) {
                const videoCards = videosRef.current.querySelectorAll(`.${styles.videoCard}`);
                gsap.fromTo(videoCards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: videosRef.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

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
                        {t('heroTitle')}
                    </h1>
                    <div className={styles.heroLine}></div>
                </div>
            </section>

            {/* DOCUMENTATION SECTION */}
            <section className={styles.docsSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>{t('docsLabel')}</span>
                    <h2 className={styles.sectionTitle}>{t('docsTitle')}</h2>
                </div>
                <div ref={docsRef} className={styles.docsGrid}>
                    {documents.map((doc, index) => (
                        <div key={index} className={styles.docCard}>
                            <div className={styles.docIcon}>
                                <doc.icon />
                            </div>
                            <h3 className={styles.docTitle}>{getDocName(doc.id)}</h3>
                            <a href={doc.link} target="_blank" rel="noopener noreferrer" className={styles.docButton}>
                                <span>{t('docsButton')}</span>
                                <HiDownload />
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className={styles.videoSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionLabel}>{t('videosLabel')}</span>
                    <h2 className={styles.sectionTitle}>{t('videosTitle')}</h2>
                </div>
                <div ref={videosRef} className={styles.videoGrid}>
                    {videosList.map((video, index) => (
                        <div key={index} className={styles.videoCard}>
                            <div className={styles.videoWrapper}>
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className={styles.videoInfo}>
                                <span className={styles.videoTag}>{t(`videos.${video.tag}`)}</span>
                                <h3 className={styles.videoTitle}>{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
