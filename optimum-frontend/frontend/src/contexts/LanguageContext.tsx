import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { getCurrentLanguage, setLanguage as setLanguageStorage, initializeLanguage, getTranslation } from '../utils/translations';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<string>(() => {
        // Initialize language on mount
        return initializeLanguage();
    });

    useEffect(() => {
        // Sync with localStorage on mount
        const savedLang = getCurrentLanguage();
        if (savedLang !== language) {
            setLanguageState(savedLang);
        }
        
        // Listen for language changes from LanguageSwitcher
        const handleLanguageChange = (event: CustomEvent) => {
            const newLang = event.detail.language;
            setLanguageState(newLang);
        };
        
        window.addEventListener('languageChanged', handleLanguageChange as EventListener);
        
        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
        };
    }, [language]);

    const setLanguage = useCallback((lang: string) => {
        setLanguageStorage(lang);
        setLanguageState(lang);
        // Trigger re-render by updating state
        // Components will re-render with new language
    }, []);

    const t = useCallback((key: string): string => {
        return getTranslation(key, language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
