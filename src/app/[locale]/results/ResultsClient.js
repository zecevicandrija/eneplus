'use client';

import React, { useState, useMemo, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HiOutlineOfficeBuilding,
    HiOutlineShieldCheck,
    HiOutlineAcademicCap,
    HiOutlineCode,
    HiOutlineFire,
    HiOutlineSearch,
    HiOutlineCheckCircle,
    HiOutlineLightningBolt,
    HiOutlineGlobe,
    HiOutlineCurrencyEuro,
    HiOutlineCalendar,
    HiOutlineLocationMarker,
    HiOutlineUserGroup,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlinePhone,
    HiOutlineMail,
    HiOutlineArrowRight,
    HiOutlineDocumentText,
    HiOutlineChartBar
} from 'react-icons/hi';
import styles from './Results.module.css';

const clientLogos = [
    { name: "EBRD", path: "/Assets/slike_za_reference/European Bank for Reconstruction and Development.png" },
    { name: "UNDP", path: "/Assets/slike_za_reference/United Nations Development Programme.png" },
    { name: "GIZ", path: "/Assets/slike_za_reference/GIZ.png" },
    { name: "USAID", path: "/Assets/slike_za_reference/Chemonics.png" },
    { name: "MGSI", path: "/Assets/slike_za_reference/Ministarstvo građevinarstva, saobrćaja i  infrastrukture.jpeg" },
    { name: "MRE", path: "/Assets/slike_za_reference/Ministarstvo rudarstva i energetike.png" },
    { name: "NLB Banka", path: "/Assets/slike_za_reference/nlb-komercialna-logo.svg" },
    { name: "NIRAS", path: "/Assets/slike_za_reference/Niras.png" },
    { name: "IBF", path: "/Assets/slike_za_reference/IBF.jpeg" },
    { name: "FTN Novi Sad", path: "/Assets/slike_za_reference/Fakultet tehničkih nauka - Novi Sad.png" },
    { name: "Pokrajinski sekretarijat", path: "/Assets/slike_za_reference/Pokrajinski sekretarijat za energetiku, građevinarstvo i saobraćaj.jpeg" },
    { name: "Opština Kula", path: "/Assets/slike_za_reference/Opština Kula.png" },
    { name: "Grad Beograd", path: "/Assets/slike_za_reference/Grad Beograd.png" },
    { name: "Grad Kikinda", path: "/Assets/slike_za_reference/Grad Kikinda.jpeg" },
    { name: "Grad Subotica", path: "/Assets/slike_za_reference/Grad Subotica.jpeg" },
];

const categoryIcons = {
    all: HiOutlineGlobe,
    capital: HiOutlineOfficeBuilding,
    public: HiOutlineAcademicCap,
    policy: HiOutlineShieldCheck,
    software: HiOutlineCode,
    heating: HiOutlineFire
};

export default function ResultsClient() {
    const t = useTranslations('ResultsPage');
    const locale = useLocale();

    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedCards, setExpandedCards] = useState({});

    const projectsRef = useRef(null);

    const rawProjects = t.raw('projects') || [];

    const toggleExpand = (id) => {
        setExpandedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const filteredProjects = useMemo(() => {
        return rawProjects.filter(project => {
            const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
            const query = searchQuery.toLowerCase().trim();
            if (!query) return matchesCategory;

            const matchesQuery =
                project.title.toLowerCase().includes(query) ||
                project.client.toLowerCase().includes(query) ||
                project.location.toLowerCase().includes(query) ||
                project.summary.toLowerCase().includes(query) ||
                project.focus.toLowerCase().includes(query) ||
                project.impact.toLowerCase().includes(query) ||
                (project.tags && project.tags.some(tag => tag.toLowerCase().includes(query)));

            return matchesCategory && matchesQuery;
        });
    }, [rawProjects, activeCategory, searchQuery]);

    const categories = [
        { id: 'all', label: t('filterSection.all') },
        { id: 'capital', label: t('filterSection.capital') },
        { id: 'public', label: t('filterSection.public') },
        { id: 'policy', label: t('filterSection.policy') },
        { id: 'software', label: t('filterSection.software') },
        { id: 'heating', label: t('filterSection.heating') },
    ];

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main className={styles.pageWrapper}>
            {/* HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.heroBgPattern}></div>
                <div className={styles.heroGlow}></div>
                <div className={styles.heroGlowSecondary}></div>

                <div className={styles.heroContainer}>
                    <span className={styles.overline}>{t('overline')}</span>

                    <h1 className={styles.heroTitle}>
                        {t('heroTitle1')}<br />
                        <span className={styles.highlight}>{t('heroTitle2')}</span>
                    </h1>

                    <div className={styles.heroLine}></div>

                    <p className={styles.heroSubtitle}>
                        {t('heroSubtitle')}
                    </p>

                    <div className={styles.heroActions}>
                        <Link href="/contact" className={styles.heroCta}>
                            {t('heroCta')}
                            <span className={styles.heroCtaIcon}>→</span>
                        </Link>
                        <button onClick={scrollToProjects} className={styles.heroSecondaryBtn}>
                            {t('heroCtaSecondary')}
                            <HiOutlineChevronDown className={styles.secondaryBtnIcon} />
                        </button>
                    </div>

                    {/* TRUST BADGES BAR */}
                    <div className={styles.trustBadges}>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('stats.stat1Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('stats.stat1Label')}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('stats.stat2Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('stats.stat2Label')}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('stats.stat3Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('stats.stat3Label')}</span>
                        </div>
                        <div className={styles.trustBadge}>
                            <span className={styles.trustBadgeValue}>{t('stats.stat4Value')}</span>
                            <span className={styles.trustBadgeLabel}>{t('stats.stat4Label')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST LOGOS INFINITE MARQUEE */}
            <section className={styles.trustSection}>
                <div className={styles.trustContainer}>
                    <span className={styles.trustOverline}>{t('trustSection.title')}</span>
                    <div className={styles.marqueeWrapper}>
                        <div className={styles.marqueeTrack}>
                            {[...clientLogos, ...clientLogos].map((client, idx) => (
                                <div key={idx} className={styles.logoItem} title={client.name}>
                                    <img
                                        src={client.path}
                                        alt={client.name}
                                        className={styles.trustLogoImage}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section ref={projectsRef} id="projects-section" className={styles.projectsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>{t('filterSection.title')}</h2>
                        <p className={styles.sectionSubtitle}>{t('filterSection.subtitle')}</p>
                    </div>

                    {/* FILTER CONTROLS */}
                    <div className={styles.filterControls}>
                        <div className={styles.categoryTabs}>
                            {categories.map(cat => {
                                const IconComponent = categoryIcons[cat.id] || HiOutlineGlobe;
                                const isActive = activeCategory === cat.id;
                                const count = cat.id === 'all'
                                    ? rawProjects.length
                                    : rawProjects.filter(p => p.category === cat.id).length;

                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveCategory(cat.id)}
                                        className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                                    >
                                        <IconComponent className={styles.tabIcon} />
                                        <span>{cat.label}</span>
                                        <span className={styles.tabBadge}>{count}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className={styles.searchBox}>
                            <HiOutlineSearch className={styles.searchIcon} />
                            <input
                                type="text"
                                placeholder={locale === 'sr' ? "Pretražite po nazivu, gradu, klijentu..." : "Search by title, city, client..."}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.searchInput}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className={styles.clearSearchBtn}
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ACTIVE RESULTS SUMMARY */}
                    <div className={styles.resultsMeta}>
                        <span className={styles.resultsCount}>
                            {locale === 'sr'
                                ? `Prikazano ${filteredProjects.length} od ${rawProjects.length} referenci`
                                : `Showing ${filteredProjects.length} of ${rawProjects.length} assignments`}
                        </span>
                        {searchQuery && (
                            <span className={styles.activeQueryTag}>
                                {locale === 'sr' ? 'Pretraga:' : 'Query:'} &ldquo;{searchQuery}&rdquo;
                            </span>
                        )}
                    </div>

                    {/* PROJECTS GRID */}
                    <div className={styles.projectsGrid}>
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => {
                                const isExpanded = expandedCards[project.id];
                                return (
                                    <motion.article
                                        key={project.id}
                                        className={styles.projectCard}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        layout
                                    >
                                        <div className={styles.cardHeader}>
                                            <div className={styles.headerTop}>
                                                <span className={`${styles.categoryBadge} ${styles[`category_${project.category}`]}`}>
                                                    {t(`filterSection.${project.category}`)}
                                                </span>
                                                <span className={styles.scaleBadge}>
                                                    {project.scaleBadge}
                                                </span>
                                            </div>

                                            <div className={styles.clientRow}>
                                                {project.clientLogo && (
                                                    <div className={styles.clientLogoWrap}>
                                                        <img
                                                            src={project.clientLogo}
                                                            alt={project.client}
                                                            className={styles.clientLogoImg}
                                                        />
                                                    </div>
                                                )}
                                                <div className={styles.clientInfo}>
                                                    <span className={styles.clientName}>{project.client}</span>
                                                    <div className={styles.clientMeta}>
                                                        <span className={styles.metaLocation}>
                                                            <HiOutlineLocationMarker className={styles.metaIcon} />
                                                            {project.location}
                                                        </span>
                                                        <span className={styles.metaPeriod}>
                                                            <HiOutlineCalendar className={styles.metaIcon} />
                                                            {project.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <h3 className={styles.projectTitle}>{project.title}</h3>

                                            <div className={styles.keyMetricsPills}>
                                                <div className={styles.metricPill}>
                                                    <span className={styles.metricLabel}>{t('labels.value')}:</span>
                                                    <span className={styles.metricVal}>{project.value}</span>
                                                </div>
                                                <div className={styles.metricPill}>
                                                    <span className={styles.metricLabel}>{t('labels.role')}:</span>
                                                    <span className={styles.metricVal}>
                                                        {t(`labels.${project.role}`)}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className={styles.projectSummary}>{project.summary}</p>
                                        </div>

                                        {/* CASE STUDY CORE IMPACT PILLARS */}
                                        <div className={styles.impactSections}>
                                            {/* WHAT WE DELIVERED */}
                                            <div className={styles.impactBox}>
                                                <div className={styles.impactBoxHeader}>
                                                    <HiOutlineDocumentText className={styles.impactBoxIcon} />
                                                    <h4 className={styles.impactBoxTitle}>{t('labels.whatWeDid')}</h4>
                                                </div>
                                                <ul className={styles.deliverablesList}>
                                                    {(isExpanded ? project.deliverables : project.deliverables.slice(0, 3)).map((item, dIdx) => (
                                                        <li key={dIdx} className={styles.deliverableItem}>
                                                            <HiOutlineCheckCircle className={styles.checkIcon} />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {project.deliverables.length > 3 && (
                                                    <button
                                                        onClick={() => toggleExpand(project.id)}
                                                        className={styles.expandBtn}
                                                    >
                                                        {isExpanded ? (
                                                            <>
                                                                {t('labels.hideDetails')} <HiOutlineChevronUp />
                                                            </>
                                                        ) : (
                                                            <>
                                                                {locale === 'sr'
                                                                    ? `+ Još ${project.deliverables.length - 3} stavke`
                                                                    : `+ ${project.deliverables.length - 3} more items`} <HiOutlineChevronDown />
                                                            </>
                                                        )}
                                                    </button>
                                                )}
                                            </div>

                                            {/* STRATEGIC FOCUS */}
                                            <div className={styles.focusBox}>
                                                <div className={styles.focusHeader}>
                                                    <HiOutlineLightningBolt className={styles.focusIcon} />
                                                    <h4 className={styles.focusTitle}>{t('labels.focus')}</h4>
                                                </div>
                                                <p className={styles.focusText}>{project.focus}</p>
                                            </div>

                                            {/* MEASURABLE CLIENT ADVANCEMENT */}
                                            <div className={styles.advancementBox}>
                                                <div className={styles.advancementHeader}>
                                                    <HiOutlineChartBar className={styles.advancementIcon} />
                                                    <h4 className={styles.advancementTitle}>{t('labels.impact')}</h4>
                                                </div>
                                                <p className={styles.advancementText}>{project.impact}</p>
                                            </div>
                                        </div>

                                        {/* TAGS FOOTER */}
                                        {project.tags && project.tags.length > 0 && (
                                            <div className={styles.cardFooter}>
                                                <div className={styles.tagsWrapper}>
                                                    {project.tags.map((tag, tagIdx) => (
                                                        <span key={tagIdx} className={styles.projectTag}>
                                                            #{tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </motion.article>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className={styles.noResultsBox}>
                            <p className={styles.noResultsTitle}>
                                {locale === 'sr' ? "Nema pronađenih projekata za zadati filter." : "No assignments found matching your filter."}
                            </p>
                            <button
                                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                                className={styles.resetFilterBtn}
                            >
                                {locale === 'sr' ? "Poništite filtere" : "Reset Filters"}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className={styles.whySection}>
                <div className={styles.whyContainer}>
                    <div className={styles.whyHeader}>
                        <span className={styles.whyOverline}>{t('whyChooseUs.overline')}</span>
                        <h2 className={styles.whyTitle}>{t('whyChooseUs.title')}</h2>
                        <p className={styles.whySubtitle}>{t('whyChooseUs.subtitle')}</p>
                    </div>

                    <div className={styles.pillarsGrid}>
                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrapper}>
                                <HiOutlineShieldCheck />
                            </div>
                            <h3 className={styles.pillarTitle}>{t('whyChooseUs.pillar1Title')}</h3>
                            <p className={styles.pillarDesc}>{t('whyChooseUs.pillar1Desc')}</p>
                        </div>

                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrapper}>
                                <HiOutlineGlobe />
                            </div>
                            <h3 className={styles.pillarTitle}>{t('whyChooseUs.pillar2Title')}</h3>
                            <p className={styles.pillarDesc}>{t('whyChooseUs.pillar2Desc')}</p>
                        </div>

                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrapper}>
                                <HiOutlineUserGroup />
                            </div>
                            <h3 className={styles.pillarTitle}>{t('whyChooseUs.pillar3Title')}</h3>
                            <p className={styles.pillarDesc}>{t('whyChooseUs.pillar3Desc')}</p>
                        </div>

                        <div className={styles.pillarCard}>
                            <div className={styles.pillarIconWrapper}>
                                <HiOutlineCode />
                            </div>
                            <h3 className={styles.pillarTitle}>{t('whyChooseUs.pillar4Title')}</h3>
                            <p className={styles.pillarDesc}>{t('whyChooseUs.pillar4Desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIGH-CONVERTING CTA SECTION */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <div className={styles.ctaGlow}></div>
                    <div className={styles.ctaContent}>
                        <span className={styles.ctaBadge}>
                            <HiOutlineLightningBolt className={styles.ctaBadgeIcon} />
                            {locale === 'sr' ? "PARTNER ZA VAŠ SLEDEĆI USPEH" : "PARTNER FOR YOUR NEXT SUCCESS"}
                        </span>
                        <h2 className={styles.ctaTitle}>{t('ctaSection.title')}</h2>
                        <p className={styles.ctaSubtitle}>{t('ctaSection.subtitle')}</p>

                        <div className={styles.ctaButtonGroup}>
                            <Link href="/contact" className={styles.ctaButtonMain}>
                                {t('ctaSection.ctaPrimary')}
                                <HiOutlineArrowRight className={styles.btnArrow} />
                            </Link>
                            <a href="tel:+381648172033" className={styles.ctaPhoneBtn}>
                                <HiOutlinePhone className={styles.phoneIcon} />
                                <span>{t('ctaSection.ctaPhone')}</span>
                            </a>
                        </div>

                        <div className={styles.ctaTrustPills}>
                            <div className={styles.trustPillItem}>
                                <HiOutlineCheckCircle className={styles.pillCheck} />
                                <span>{locale === 'sr' ? "Besplatna početna analiza" : "Free Initial Assessment"}</span>
                            </div>
                            <div className={styles.trustPillItem}>
                                <HiOutlineCheckCircle className={styles.pillCheck} />
                                <span>{locale === 'sr' ? "Licencirani inženjeri" : "Licensed Senior Engineers"}</span>
                            </div>
                            <div className={styles.trustPillItem}>
                                <HiOutlineCheckCircle className={styles.pillCheck} />
                                <span>{locale === 'sr' ? "EBRD & EU EPBD usklađenost" : "EBRD & EU EPBD Compliant"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
