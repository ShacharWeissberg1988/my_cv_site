import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useI18n } from '../../i18n/i18nContext';

interface NavTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = ['aboutMe', 'hw', 'sw', 'sys', 'proExperience', 'fun'];

export const NavTabs: React.FC<NavTabsProps> = ({ activeTab, setActiveTab }) => {
  const { t, language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-primary-cyan'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t(`nav.${tab}`)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-cyan"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-gray-200 rounded-lg border border-transparent hover:border-primary-purple/50"
            aria-label="Toggle Language"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: language === 'he' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Languages size={20} />
            </motion.div>
            <span>{language.toUpperCase()}</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};
