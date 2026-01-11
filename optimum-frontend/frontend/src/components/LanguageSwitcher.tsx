import React, { useState, useEffect } from 'react';
import { getCurrentLanguage, setLanguage } from '../utils/translations';
import './LanguageSwitcher.css';

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface LanguageSwitcherProps {
    onLanguageChange?: (langCode: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onLanguageChange }) => {
    const [currentLang, setCurrentLang] = useState<string>('en');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const savedLang = getCurrentLanguage();
        setCurrentLang(savedLang);
    }, []);

    const languages: Language[] = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' }
    ];

    const handleLanguageChange = (langCode: string) => {
        setLanguage(langCode);
        setCurrentLang(langCode);
        setIsOpen(false);

        if (onLanguageChange) {
            onLanguageChange(langCode);
        }

        // Update document attributes for RTL/LTR
        document.documentElement.lang = langCode;
        document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
        
        // Trigger a custom event to notify components of language change
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
    };

    const currentLanguage = languages.find(lang => lang.code === currentLang);

    return (
        <div className="language-switcher">
            <button
                className="language-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
            >
                <span className="language-flag">{currentLanguage?.flag}</span>
                <span className="language-name">{currentLanguage?.name}</span>
                <span className="language-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className="language-flag">{lang.flag}</span>
                            <span className="language-name">{lang.name}</span>
                            {currentLang === lang.code && <span className="checkmark">✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
