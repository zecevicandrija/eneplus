'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import styles from './About.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const t = useTranslations('About');
    const locale = useLocale();

    const containerRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const titleRef = useRef(null);
    const textBlocksRef = useRef([]);

    const addToRefs = (el) => {
        if (el && !textBlocksRef.current.includes(el)) {
            textBlocksRef.current.push(el);
        }
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    end: "bottom top",
                    toggleActions: "play none none reverse"
                }
            });

            tl.fromTo(imageWrapperRef.current,
                { clipPath: 'inset(0 100% 0 0)', scale: 1.1 },
                { clipPath: 'inset(0 0% 0 0)', scale: 1, duration: 1.5, ease: "power4.inOut" }
            );

            gsap.to(imageWrapperRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            tl.from(titleRef.current, {
                x: 30, // Changed direction for better flow with glass card
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1");

            tl.from(textBlocksRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2, // Faster stagger
                ease: "power2.out"
            }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className={styles.aboutSection}>
            <div className={styles.bgDecoGlow}></div>
            <div className={styles.bgDecoLine}></div>

            <div className={styles.innerGrid}>
                {/* Image Side */}
                <div className={styles.imageArea}>
                    <div ref={imageWrapperRef} className={styles.imageWrapperMasked}>
                        <img
                            src="/Assets/pocetna.avif"
                            alt="Eneplus Energetska Efikasnost"
                            className={styles.mainImage}
                        />
                        <div className={styles.imageOverlayGradient}></div>
                    </div>

                    {/* Floating Tech Marker - kept as is */}
                    <div className={styles.techFloatingMarker}>
                        <span>{t('analytics')}</span>
                    </div>
                </div>

                {/* Content Side - Wrapper for better alignment */}
                <div className={styles.contentArea}>
                    {/* Glass Card Container */}
                    <div className={styles.glassCard}>

                        <div ref={titleRef} className={styles.headerBlock}>
                            <span className={styles.overline}>{t('overline')}</span>
                            <h2 className={styles.heading}>
                                {t('titleLine1')}<br />
                                <span className={styles.highlight}>{t('titleHighlight')}</span>
                            </h2>
                        </div>

                        <div className={styles.TextBlockLayout}>
                            <div ref={addToRefs} className={styles.textBlockItem}>
                                <div className={styles.blockMarker}>01</div>
                                <div className={styles.textContent}>
                                    <p className={styles.leadParagraph}>
                                        <strong>ENEPLUS</strong> {t('p1')}
                                    </p>
                                </div>
                            </div>

                            <div ref={addToRefs} className={`${styles.textBlockItem} ${styles.offsetBlock}`}>
                                <div className={styles.blockMarker}>02</div>
                                <div className={styles.textContent}>
                                    <p>{t('p2')}</p>
                                    <p>{t('p3')}</p>
                                </div>
                            </div>

                            {/* CTA Button Area */}
                            <div ref={addToRefs} className={styles.ctaWrapper}>
                                <Link href={`/${locale}/about`} className={styles.ctaButton}>
                                    <span className={styles.btnText}>{t('cta')}</span>
                                    <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
