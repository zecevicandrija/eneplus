'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import styles from './AboutPage.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
    {
        id: "zeljko",
        name: "Željko Zečević",
        phone: "+381 64 8172033",
        image: "/Assets/zeljko.avif"
    },
    {
        id: "nikola",
        name: "Nikola Vujović",
        phone: "+381 64 8375706",
        image: "/Assets/nikola.avif"
    }
];

export default function AboutPage() {
    const t = useTranslations('AboutPage');
    const introRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Intro
            if (introRef.current) {
                gsap.fromTo(introRef.current.querySelector(`.${styles.imageWrapper}`),
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: introRef.current,
                            start: "top 70%"
                        }
                    }
                );

                gsap.fromTo(introRef.current.querySelector(`.${styles.introText}`),
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: introRef.current,
                            start: "top 70%"
                        }
                    }
                );
            }

            // Animate Team
            if (teamRef.current) {
                const cards = teamRef.current.querySelectorAll(`.${styles.teamCard}`);
                gsap.fromTo(cards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: teamRef.current,
                            start: "top 75%"
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
                    <span className={styles.overline}>{t('heroOverline')}</span>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle')}
                    </h1>
                    <div className={styles.heroLine}></div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section ref={introRef} className={styles.introSection}>
                <div className={styles.introContainer}>
                    <div className={styles.introText}>
                        <div className={styles.highlightBlock}>
                            <p className={styles.leadText}>
                                {t('leadText')}
                            </p>
                        </div>
                        <p>
                            {t('p1')}
                        </p>
                        <p>
                            {t('p2')}
                        </p>
                        <h2 className={styles.seoTitle}>{t('seoTitle')}</h2>
                        <p>{t('seoText1')}</p>
                        <p>{t('seoText2')}</p>
                        <p>{t('seoText3')}</p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/Assets/onama.avif"
                            alt="Eneplus O Nama"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section ref={teamRef} className={styles.teamSection}>
                <div className={styles.teamHeader}>
                    <span className={styles.sectionLabel}>{t('teamLabel')}</span>
                    <h2 className={styles.sectionTitle}>{t('teamTitle')}</h2>
                </div>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamCard}>
                            <div className={styles.memberImageWrapper}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                />
                            </div>
                            <div className={styles.memberInfo}>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <span className={styles.memberTitle}>{t(`team.${member.id}.title`)}</span>
                                <div className={styles.memberLine}></div>
                                <p className={styles.memberPhone}>{member.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
