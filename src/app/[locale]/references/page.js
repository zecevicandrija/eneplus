'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Reference.module.css';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const referenceGroups = [
    {
        id: "green",
        translationKey: "categoryGreen",
        colorVar: "#4ade80",
        items: [
            { key: "ebrd", path: "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png" },
            { key: "undp", path: "/Assets/slike_za_reference/United Nations Development Programme.png" },
            { key: "giz", path: "/Assets/slike_za_reference/GIZ.png" },
            { key: "niras", path: "/Assets/slike_za_reference/Niras.png" },
            { key: "siemens", path: "/Assets/slike_za_reference/Siemens energy.png" },
            { key: "gfa", path: "/Assets/slike_za_reference/GFA South East Europe.jpeg" },
            { key: "ibf", path: "/Assets/slike_za_reference/IBF.jpeg" },
            { key: "chemonics", path: "/Assets/slike_za_reference/Chemonics.png" },
            { key: "ftn", path: "/Assets/slike_za_reference/Fakultet tehničkih nauka - Novi Sad.png" },
            { key: "mgsi", path: "/Assets/slike_za_reference/Ministarstvo građevinarstva, saobrćaja i  infrastrukture.jpeg" },
            { key: "mre", path: "/Assets/slike_za_reference/Ministarstvo rudarstva i energetike.png" },
            { key: "nlb", path: "/Assets/slike_za_reference/nlb-komercialna-logo.svg" },
            { key: "pse", path: "/Assets/slike_za_reference/Pokrajinski sekretarijat za energetiku, građevinarstvo i saobraćaj.jpeg" },
            { key: "pgv", path: "/Assets/slike_za_reference/Pokret gorana Vojvodine.png" },
            { key: "rraBacka", path: "/Assets/slike_za_reference/Regionalna razvojna agencija Bačka.jpeg" },
            { key: "rraSrem", path: "/Assets/slike_za_reference/Regionalna razvojna agencija Srem.png" },
            { key: "rraZlatibor", path: "/Assets/slike_za_reference/Regionalna razvojna agencija Zlatibor.jpeg" },
            { key: "unicredit", path: "/Assets/slike_za_reference/Unicredit Bank.png" },
            { key: "veolia", path: "/Assets/slike_za_reference/Veolia Water Solutions & Technologies.jpeg" }
        ]
    },
    {
        id: "red",
        translationKey: "categoryRed",
        colorVar: "#ef4444",
        items: [
            { key: "gradBeograd", path: "/Assets/slike_za_reference/Grad Beograd.png" },
            { key: "gradSubotica", path: "/Assets/slike_za_reference/Grad Subotica.jpeg" },
            { key: "gradZrenjanin", path: "/Assets/slike_za_reference/Grad Zrenjanin.png" },
            { key: "gradKraljevo", path: "/Assets/slike_za_reference/Grad Kraljevo.png" },
            { key: "gradValjevo", path: "/Assets/slike_za_reference/Grad Valjevo.jpeg" },
            { key: "gradSremskaMitrovica", path: "/Assets/slike_za_reference/Grad Sremska Mitrovica.png" },
            { key: "gradKikinda", path: "/Assets/slike_za_reference/Grad Kikinda.jpeg" },
            { key: "gradBor", path: "/Assets/slike_za_reference/Grad Bor.jpeg" }
        ]
    },
    {
        id: "blue",
        translationKey: "categoryBlue",
        colorVar: "#3b82f6",
        items: [
            { key: "opstinaApatin", path: "/Assets/slike_za_reference/Opština Apatin.png" },
            { key: "opstinaBackaPalanka", path: "/Assets/slike_za_reference/Opština Bačka Palanka.png" },
            { key: "opstinaGrocka", path: "/Assets/slike_za_reference/Opština Grocka.png" },
            { key: "opstinaKula", path: "/Assets/slike_za_reference/Opština Kula.png" },
            { key: "opstinaOdzaci", path: "/Assets/slike_za_reference/Opština Odžaci.png" },
            { key: "opstinaRuma", path: "/Assets/slike_za_reference/Opština Ruma.png" },
            { key: "opstinaSrbobran", path: "/Assets/slike_za_reference/Opština Srbobran.png" },
            { key: "opstinaTemerin", path: "/Assets/slike_za_reference/Opština Temerin.png" },
            { key: "opstinaVrbas", path: "/Assets/slike_za_reference/Opština Vrbas.png" },
            { key: "opstinaZabalj", path: "/Assets/slike_za_reference/Opština Žabalj.png" },
            { key: "opstinaSid", path: "/Assets/slike_za_reference/Opštona Šid.png" }
        ]
    },
    {
        id: "others",
        translationKey: "categoryOther",
        colorVar: "#8b5cf6",
        items: [
            { key: "adviseInstitute", path: "/Assets/slike_za_reference/Advise Institute.png" },
            { key: "agroglobe", path: "/Assets/slike_za_reference/Agroglobe.png" },
            { key: "amss", path: "/Assets/slike_za_reference/Auto moto savez Srbije.png" },
            { key: "bestSystem", path: "/Assets/slike_za_reference/Best system.png" },
            { key: "capriolo", path: "/Assets/slike_za_reference/Capriolo.png" },
            { key: "cfd2020", path: "/Assets/slike_za_reference/CFD 2020.png" },
            { key: "cfkDragoJovovic", path: "/Assets/slike_za_reference/CFK Drago Jovović Vrbas.png" },
            { key: "dekorInvest", path: "/Assets/slike_za_reference/Dekor invest.png" },
            { key: "domZdravljaSrbobran", path: "/Assets/slike_za_reference/Dom zdravlja Đorđe Bastić Srbobran.png" },
            { key: "enova", path: "/Assets/slike_za_reference/Enova.png" },
            { key: "garantElit", path: "/Assets/slike_za_reference/Garant Elit.png" },
            { key: "gerontoloskiSubotica", path: "/Assets/slike_za_reference/Gerontološki centar Subotica.png" },
            { key: "gerontoloskiVrbas", path: "/Assets/slike_za_reference/Gerontološki centar Vrbas.png" },
            { key: "greenConstruction", path: "/Assets/slike_za_reference/Green construction.png" },
            { key: "inkoNational", path: "/Assets/slike_za_reference/Inko national.png" },
            { key: "jaffa", path: "/Assets/slike_za_reference/Jaffa .png" },
            { key: "jkpTemerin", path: "/Assets/slike_za_reference/JKP Temerin.png" },
            { key: "kryogas", path: "/Assets/slike_za_reference/Kryogas.png" },
            { key: "mareraProperties", path: "/Assets/slike_za_reference/Marera properties.png" },
            { key: "mibar", path: "/Assets/slike_za_reference/Mibar.png" },
            { key: "modelartArhitekti", path: "/Assets/slike_za_reference/Modelart arhitekti.png" },
            { key: "nandra", path: "/Assets/slike_za_reference/Nandra.png" },
            { key: "poliklinikaBozicic", path: "/Assets/slike_za_reference/Poliklinika Dr Božičić.png" },
            { key: "stsPupin", path: "/Assets/slike_za_reference/STŠ Mihajlo Pupin Kula.png" },
            { key: "studioDart", path: "/Assets/slike_za_reference/Studio DArt.png" },
            { key: "suProspect", path: "/Assets/slike_za_reference/Su- Prospect.png" }
        ]
    }
];

export default function ReferencesPage() {
    const t = useTranslations('ReferencesPage');
    const introRef = useRef(null);
    const referencesRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate hero text
            if (introRef.current) {
                gsap.fromTo(introRef.current.children,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" }
                );
            }

            // Animate reference groups and logos
            if (referencesRef.current) {
                const groups = referencesRef.current.querySelectorAll(`.${styles.categoryWrapper}`);
                
                groups.forEach((group) => {
                    const cards = group.querySelectorAll(`.${styles.logoCard}`);
                    const header = group.querySelector(`.${styles.categoryHeader}`);

                    // Animate category header
                    gsap.fromTo(header,
                        { x: -30, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: group,
                                start: "top 85%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );

                    // Animate logo cards grid
                    gsap.fromTo(cards,
                        { y: 20, scale: 0.9, opacity: 0 },
                        {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.05,
                            ease: "back.out(1.5)",
                            scrollTrigger: {
                                trigger: group,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                });
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
                <div className={styles.heroGlowSecondary}></div>
                <div className={styles.heroContainer} ref={introRef}>
                    <span className={styles.overline}>{t('overline')}</span>
                    <h1 className={styles.heroTitle}>
                        {t('heroTitle1')}<br />
                        <span className={styles.highlight}>{t('heroTitle2')}</span>
                    </h1>
                    <div className={styles.heroLine}></div>
                    <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
                </div>
            </section>

            {/* REFERENCES GRID SECTION */}
            <section className={styles.referencesSection}>
                <div className={styles.referencesContainer} ref={referencesRef}>
                    {referenceGroups.map((group) => (
                        <div key={group.id} className={styles.categoryWrapper}>
                            <div className={styles.categoryHeader}>
                                <h2 className={styles.categoryTitle}>{t(group.translationKey)}</h2>
                                <div className={styles.categoryLine} style={{ background: `linear-gradient(90deg, ${group.colorVar}, transparent)` }}></div>
                            </div>
                            
                            <div className={styles.logosGrid}>
                                {group.items.map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className={styles.logoCard}
                                        style={{ '--accent-color': group.colorVar }}
                                        title={t(`items.${item.key}`)}
                                    >
                                        {/* Use img here as next/image requires width/height and these images have varied aspect ratios */}
                                        <img 
                                            src={item.path} 
                                            alt={t(`items.${item.key}`)} 
                                            className={styles.logoImage}
                                            loading="lazy" 
                                        />
                                        <span className={styles.logoText}>{t(`items.${item.key}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
