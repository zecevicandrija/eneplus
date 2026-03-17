'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './FAQ.module.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
            <button className={styles.faqQuestion} onClick={onClick}>
                <span>{question}</span>
                <span className={styles.icon}>
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <div className={styles.faqAnswerWrapper}>
                <div className={styles.faqAnswer}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const t = useTranslations('HomePage.FAQ');
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
        { q: t('q4'), a: t('a4') },
        { q: t('q5'), a: t('a5') },
    ];

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.overline}>FAQ</div>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.faqList}>
                    {questions.map((item, index) => (
                        <FAQItem 
                            key={index}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === index}
                            onClick={() => toggleOpen(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
