'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import styles from './About.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const t = useTranslations('About');

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
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1");

            tl.from(textBlocksRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power2.out"
            }, "-=0.5");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className={styles.aboutSection}>
            <div className={styles.bgDecoGlow}></div>
            <div className={styles.bgDecoLine}></div>

            <div className={styles.innerGrid}>
                <div className={styles.imageArea}>
                    <div ref={imageWrapperRef} className={styles.imageWrapperMasked}>
                        <img
                            src="/Assets/pocetna.avif"
                            alt="Eneplus Energetska Efikasnost"
                            className={styles.mainImage}
                        />
                        <div className={styles.imageOverlayGradient}></div>
                    </div>
                    <div className={styles.techFloatingMarker}>
                        <span>{t('analytics')}</span>
                    </div>
                </div>

                <div className={styles.contentArea}>
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
                                <div className={styles.accentBarBottom}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
