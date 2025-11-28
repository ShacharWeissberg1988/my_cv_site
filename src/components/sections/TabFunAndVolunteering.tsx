import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { DidYouKnowGame } from '../widgets/DidYouKnowGame';
import { VolunteeringCards } from '../widgets/VolunteeringCards';
import { PersonalityStats } from '../widgets/PersonalityStats';
import { ChooseAdventure } from '../widgets/ChooseAdventure';
import { SideProjectGallery } from '../widgets/SideProjectGallery';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

export const TabFunAndVolunteering: React.FC = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-primary-cyan" size={32} />
        <h2 className="text-3xl font-bold gradient-text">{t('tabs.fun.title')}</h2>
      </div>

      <DidYouKnowGame />

      <PersonalityStats />

      <ChooseAdventure />

      <SideProjectGallery />

      <VolunteeringCards />

      <Card>
        <h3 className="text-xl font-semibold mb-4 gradient-text">{t('widgets.hobbies.title')}</h3>
        <div className="flex flex-wrap gap-3">
          {funFactsData.hobbies.map((hobby, index) => (
            <div key={index} className="px-4 py-2 bg-dark-bg-tertiary rounded-lg border border-primary-purple/30">
              {hobby}
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};
