'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';
import styles from './EneplusScroll.module.css';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const frameCount = 80;
const getImagePath = (index) => `/Assets/eneplusframe3/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

// Linear interpolation for smooth frame transitions
const lerp = (start, end, factor) => start + (end - start) * factor;

export default function EneplusScroll() {
    const t = useTranslations('Hero');
    const locale = useLocale();

    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const contextRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const currentFrameRef = useRef({ value: 0 });
    const targetFrameRef = useRef(0);
    const animationFrameRef = useRef(null);
    const headingRef = useRef(null);
    const subheadingRef = useRef(null);
    const ctaRef = useRef(null);

    // Preload all images
    useEffect(() => {
        let loadedCount = 0;
        const images = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = getImagePath(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoading(false);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoading(false);
                }
            };
            images.push(img);
        }

        imagesRef.current = images;
    }, []);

    const renderFrame = useCallback((index) => {
        if (!canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const frameIdx = Math.min(Math.max(Math.round(index), 0), frameCount - 1);
        const img = imagesRef.current[frameIdx];

        if (!img || !img.complete || img.naturalWidth === 0 || img.naturalHeight === 0) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        } else {
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        const imgRatio = img.width / img.height;
        const canvasRatio = rect.width / rect.height;

        let drawWidth, drawHeight, drawX, drawY;

        if (imgRatio > canvasRatio) {
            drawHeight = rect.height;
            drawWidth = img.width * (rect.height / img.height);
            drawX = (rect.width - drawWidth) / 2;
            drawY = 0;
        } else {
            drawWidth = rect.width;
            drawHeight = img.height * (rect.width / img.width);
            drawX = 0;
            drawY = (rect.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, rect.width, rect.height);
        try {
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        } catch (e) {
            // Ignore frame error
        }
    }, []);

    const animateFrames = useCallback(() => {
        const diff = Math.abs(targetFrameRef.current - currentFrameRef.current.value);

        if (diff > 0.01) {
            currentFrameRef.current.value = lerp(
                currentFrameRef.current.value,
                targetFrameRef.current,
                0.08
            );
            renderFrame(currentFrameRef.current.value);
        }

        animationFrameRef.current = requestAnimationFrame(animateFrames);
    }, [renderFrame]);

    useEffect(() => {
        if (isLoading || !containerRef.current || !canvasRef.current) return;

        setIsReady(true);
        animationFrameRef.current = requestAnimationFrame(animateFrames);

        contextRef.current = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.3 });

            if (headingRef.current) {
                tl.fromTo(headingRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                    0
                );
            }

            if (subheadingRef.current) {
                tl.fromTo(subheadingRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                    0.2
                );
            }

            if (ctaRef.current) {
                tl.fromTo(ctaRef.current,
                    { opacity: 0, y: 20, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
                    0.4
                );
            }

            // Reduce scroll duration on mobile for faster animation
            const isMobile = window.innerWidth <= 1024;
            const scrollEnd = isMobile ? "+=150%" : "+=300%";

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: scrollEnd,
                scrub: isMobile ? 0.5 : true,
                pin: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    targetFrameRef.current = self.progress * (frameCount - 1);
                }
            });
        }, containerRef);

        renderFrame(0);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (contextRef.current) {
                contextRef.current.revert();
            }
        };
    }, [isLoading, renderFrame, animateFrames]);

    const prevWidthRef = useRef(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => {
            renderFrame(currentFrameRef.current.value);
            // Only refresh ScrollTrigger if width changed (not just mobile address bar hiding)
            if (window.innerWidth !== prevWidthRef.current) {
                prevWidthRef.current = window.innerWidth;
                ScrollTrigger.refresh();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [renderFrame]);

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generatedParticles = [...Array(40)].map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${78 + Math.random() * 2}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${3 + Math.random() * 4}s`,
            size: `${3 + Math.random() * 4}px`,
            opacity: 0.4 + Math.random() * 0.6
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <section ref={containerRef} className={styles.container}>
                <div className={styles.canvasWrapper}>
                    <canvas
                        ref={canvasRef}
                        className={`${styles.canvas} ${isReady ? styles.canvasVisible : styles.canvasHidden}`}
                    />

                    <div className={`${styles.overlayContainer} ${isReady ? styles.overlayVisible : styles.overlayHidden}`}>
                        <div className={styles.particleOverlay}>
                            {particles.map((p, i) => (
                                <div
                                    key={i}
                                    className={styles.particle}
                                    style={{
                                        top: p.top,
                                        left: p.left,
                                        animationDelay: p.delay,
                                        animationDuration: p.duration,
                                        width: p.size,
                                        height: p.size,
                                        opacity: p.opacity
                                    }}
                                ></div>
                            ))}
                        </div>

                        <div className={styles.heroSidebar}>
                            <h2 ref={headingRef} className={styles.heading}>
                                {t('headingLine1')}<br />
                                <span>{t('headingLine2')}<br />{t('headingLine3')}</span>
                            </h2>
                            <p ref={subheadingRef} className={styles.subheading}>{t('subheading')}</p>
                            <a ref={ctaRef} href={`/${locale}/contact`} className={styles.ctaButton}>{t('cta')}</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
