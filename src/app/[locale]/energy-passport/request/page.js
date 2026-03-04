'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Request.module.css';

export default function RequestPage() {
    const t = useTranslations('EnergyPassportRequestPage');
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
    const [message, setMessage] = useState('');

    const [files, setFiles] = useState({
        docBuildingPermit: null,
        docArchitecturalProject: null,
        docMechanicalProject: null,
        docEfficiencyElaborate: null,
        docPhotos: null,
    });

    const handleFileChange = (e, fieldName) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({
                ...prev,
                [fieldName]: e.target.files[0]
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setMessage(t('sending'));

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/api/send-energy-passport-request', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus('success');
                setMessage(t('successMessage'));
                e.target.reset();
                setFiles({
                    docBuildingPermit: null,
                    docArchitecturalProject: null,
                    docMechanicalProject: null,
                    docEfficiencyElaborate: null,
                    docPhotos: null,
                });
            } else {
                setStatus('error');
                setMessage(t('errorMessage'));
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage(t('errorMessage'));
        }
    };

    return (
        <main className={styles.pageWrapper}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>

                {/* LEFT COLUMN */}
                <div className={styles.leftCol}>
                    <h2 className={styles.sectionTitle}>{t('title')}</h2>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('buildingType')}</label>
                        <select name="buildingType" className={styles.select} required defaultValue="">
                            <option value="" disabled>{t('buildingTypePlaceholder')}</option>
                            <option value={t('btResidential')}>{t('btResidential')}</option>
                            <option value={t('btCommercial')}>{t('btCommercial')}</option>
                            <option value={t('btPublic')}>{t('btPublic')}</option>
                            <option value={t('btIndustrial')}>{t('btIndustrial')}</option>
                            <option value={t('btOther')}>{t('btOther')}</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('streetAndNumber')}</label>
                        <input type="text" name="streetAndNumber" className={styles.input} />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <div className={styles.formGroup} style={{ flex: '1 1 200px' }}>
                            <label className={styles.label}>{t('cadastralParcel')}</label>
                            <input type="text" name="cadastralParcel" className={styles.input} required />
                        </div>
                        <div className={styles.formGroup} style={{ flex: '1 1 200px' }}>
                            <label className={styles.label}>{t('cadastralMunicipality')}</label>
                            <input type="text" name="cadastralMunicipality" className={styles.input} required />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('city')}</label>
                        <input type="text" name="city" className={styles.input} />
                    </div>


                    <h2 className={styles.sectionTitle} style={{ marginTop: '3.5rem' }}>{t('contactTitle')}</h2>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('fullName')}</label>
                        <input type="text" name="fullName" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('email')}</label>
                        <input type="email" name="email" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('phone')}</label>
                        <input type="tel" name="phone" className={styles.input} required />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>{t('note')}</label>
                        <textarea
                            name="note"
                            className={styles.textarea}
                            placeholder={t('notePlaceholder')}
                        ></textarea>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className={styles.rightCol}>
                    <h2 className={styles.sectionTitle}>{t('documentsTitle')}</h2>

                    <div className={styles.documentsGrid}>
                        {[
                            { id: 'docBuildingPermit', label: 'docBuildingPermit' },
                            { id: 'docArchitecturalProject', label: 'docArchitecturalProject' },
                            { id: 'docMechanicalProject', label: 'docMechanicalProject' },
                            { id: 'docEfficiencyElaborate', label: 'docEfficiencyElaborate' },
                            { id: 'docPhotos', label: 'docPhotos' }
                        ].map((doc) => (
                            <div key={doc.id} className={styles.documentItem}>
                                <div className={styles.docLabel}>
                                    {t(doc.label)}
                                </div>
                                <div className={styles.fileInputWrapper}>
                                    <button type="button" className={styles.addDocumentBtn}>
                                        {t('addDocument')}
                                    </button>
                                    <input
                                        type="file"
                                        name={doc.id}
                                        onChange={(e) => handleFileChange(e, doc.id)}
                                    />
                                    {files[doc.id] && (
                                        <div className={styles.selectedFile}>
                                            {files[doc.id].name}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className={styles.noteText}>{t('documentsNote')}</p>

                    <div className={styles.printSection}>
                        <h3 className={styles.label} style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#1a1a1a' }}>
                            {t('printedCopyTitle')}
                        </h3>

                        <label className={styles.radioGroup}>
                            <input type="radio" name="printedCopy" value="true" />
                            <span className={styles.radioLabel}>{t('printedCopyOption')}</span>
                        </label>
                        <p className={styles.noteText} style={{ marginTop: '0.8rem' }}>
                            {t('printedCopyNote')}
                        </p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <label className={styles.checkboxGroup}>
                            <input type="checkbox" name="privacyPolicy" required />
                            <span className={styles.radioLabel}>{t('privacyPolicyOption')}</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={status === 'sending'}
                    >
                        {status === 'sending' ? t('sending') : t('submitButton')}
                    </button>

                    {status && status !== 'sending' && (
                        <div className={`${styles.message} ${status === 'success' ? styles.successMessage : styles.errorMessage}`}>
                            {message}
                        </div>
                    )}
                </div>

            </form>
        </main>
    );
}
