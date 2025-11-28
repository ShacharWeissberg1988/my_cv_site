import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

const traitIcons: Record<string, string> = {
  creativity: '🎨',
  precision: '🎯',
  empathy: '💙',
  curiosity: '🔍',
  caffeineTolerance: '☕',
};

export const PersonalityStats: React.FC = () => {
  const { t } = useI18n();
  const traits = funFactsData.personalityTraits;

  return (
    <Card>
      <h3 className="text-2xl font-bold mb-6 gradient-text">{t('widgets.personalityStats.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(traits).map(([trait, value], index) => (
          <motion.div
            key={trait}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center gap-3 p-4 bg-dark-bg-tertiary rounded-lg border border-primary-purple/30 hover:border-primary-cyan/50 transition-colors">
              <div className="text-3xl">{traitIcons[trait]}</div>
              <div className="flex-1">
                <div className="text-sm text-gray-400 capitalize">
                  {t(`widgets.personalityStats.traits.${trait}`)}
                </div>
                <div className="text-xs text-primary-cyan mt-1">
                  {t(`widgets.personalityStats.descriptions.${trait}`)}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold gradient-text">{value}</div>
                <div className="text-xs text-gray-500">/10</div>
              </div>
            </div>

            {/* Stat bar */}
            <div className="mt-2 h-2 bg-dark-bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(value / 10) * 100}%` }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-purple to-primary-cyan"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};
