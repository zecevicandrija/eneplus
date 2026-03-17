'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '@/i18n/routing';
import styles from './Blog.module.css';
import Image from 'next/image';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function BlogClientTracker({ blogPosts, translations }) {
    const heroActionsRef = useRef(null);
    const blogListRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (heroActionsRef.current) {
                gsap.fromTo(heroActionsRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: "power3.out" }
                );
            }

            if (blogListRef.current) {
                const cards = blogListRef.current.querySelectorAll(`.${styles.blogCard}`);
                gsap.fromTo(cards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: blogListRef.current,
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
        <>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroGlowSecondary}></div>
                <div ref={heroActionsRef} className={styles.heroContainer}>
                    <span className={styles.overline}>{translations.overline}</span>
                    <h1 className={styles.heroTitle}>
                        {translations.heroTitle1}<br />
                        <span className={styles.highlight}>{translations.heroTitle2}</span>
                    </h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>{translations.heroSubtitle}</p>
                    
                    <div className={styles.trustBadges}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{translations.trustBadge1Value}</span>
                            <span className={styles.trustBadgeLabel}>{translations.trustBadge1Label}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{translations.trustBadge2Value}</span>
                            <span className={styles.trustBadgeLabel}>{translations.trustBadge2Label}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{translations.trustBadge3Value}</span>
                            <span className={styles.trustBadgeLabel}>{translations.trustBadge3Label}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOG LIST SECTION */}
            <section className={styles.blogListSection}>
                <div className={styles.blogListContainer}>
                    <div className={styles.blogListHeader}>
                        <h2 className={styles.sectionTitle}>{translations.blogListTitle}</h2>
                    </div>
                     <div ref={blogListRef} className={styles.blogGrid}>
                        {blogPosts.map((post) => (
                             <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
                                <div className={styles.cardImageWrapper}>
                                     <Image 
                                        src={post.image || '/Assets/onama.avif'}
                                        fill
                                        style={{objectFit: 'cover'}}
                                        alt={post.title}
                                     />
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardDate}>{post.date}</div>
                                    <h3 className={styles.cardTitle}>{post.title}</h3>
                                    <p className={styles.cardExcerpt}>{post.description}</p>
                                    <span className={styles.readMore}>
                                        {translations.readMore} <span className={styles.readMoreArrow}>→</span>
                                    </span>
                                </div>
                             </Link>
                        ))}
                     </div>
                </div>
            </section>
        </>
    );
}
