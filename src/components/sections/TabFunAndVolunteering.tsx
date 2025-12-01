import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { DidYouKnowGame } from '../widgets/DidYouKnowGame';
import { PersonalityStats } from '../widgets/PersonalityStats';
import { ChooseAdventure } from '../widgets/ChooseAdventure';
import { SideProjectGallery } from '../widgets/SideProjectGallery';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

export const TabFunAndVolunteering: React.FC = () => {
  const { t, language } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-primary-cyan" size={32} />
        <h2 className="text-3xl font-bold text-primary-cyan">{t('tabs.fun.title')}</h2>
      </div>

      <DidYouKnowGame />

      <PersonalityStats />

      <ChooseAdventure />

      <SideProjectGallery />

      <Card>
        <h3 className="text-2xl font-bold mb-6 text-primary-cyan">{t('widgets.hobbies.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {funFactsData.hobbies[language as 'en' | 'he'].map((hobbyCategory, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-lg font-semibold text-primary-cyan">{hobbyCategory.category}</h4>
              <ul className="space-y-2">
                {hobbyCategory.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-primary-purple mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
