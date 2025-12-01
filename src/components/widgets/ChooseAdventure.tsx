import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

type AdventureOption = { text: string; response: string };
type AdventureScenario = { question: string; options: AdventureOption[] };
type SupportedLanguage = 'en' | 'he';

const getRandomScenario = (lang: SupportedLanguage): AdventureScenario => {
  const scenarios = funFactsData.adventureScenarios[lang] as AdventureScenario[];
  return scenarios[Math.floor(Math.random() * scenarios.length)];
};

export const ChooseAdventure: React.FC = () => {
  const { t, language } = useI18n();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const languageKey: SupportedLanguage = language === 'he' ? 'he' : 'en';
  const [scenario, setScenario] = useState<AdventureScenario>(() => getRandomScenario(languageKey));

  useEffect(() => {
    setScenario(getRandomScenario(languageKey));
    setSelectedOption(null);
  }, [languageKey]);

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setScenario(getRandomScenario(languageKey));
  };

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="text-primary-purple" size={28} />
        <h3 className="text-2xl font-bold text-primary-cyan">{t('widgets.chooseAdventure.title')}</h3>
      </div>

      <div className="space-y-6">
        <div className="p-4 bg-dark-bg-tertiary rounded-lg border border-primary-cyan/30">
          <p className="text-lg text-gray-200">{scenario.question}</p>
        </div>

        <div className="space-y-3">
          {scenario.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null && selectedOption !== index}
              className={`w-full text-left p-4 rounded-lg border transition-all ${
                selectedOption === index
                  ? 'bg-primary-purple/20 border-primary-purple'
                  : selectedOption === null
                  ? 'bg-dark-bg-secondary border-dark-border hover:border-primary-cyan/50'
                  : 'bg-dark-bg-secondary/50 border-dark-border/50 opacity-40'
              }`}
              whileHover={selectedOption === null ? { scale: 1.02, x: 5 } : {}}
              whileTap={selectedOption === null ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center gap-3">
                {selectedOption === index && (
                  <CheckCircle className="text-primary-cyan flex-shrink-0" size={20} />
                )}
                <span className="text-gray-200">{option.text}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedOption !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 bg-gradient-to-r from-primary-purple/20 to-primary-cyan/20 rounded-lg border border-primary-cyan/50"
            >
              <p className="text-gray-200 mb-4">
                {scenario.options[selectedOption].response}
              </p>
              <motion.button
                onClick={resetQuiz}
                className="px-4 py-2 bg-primary-purple/30 hover:bg-primary-purple/50 rounded-lg border border-primary-purple text-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('widgets.chooseAdventure.tryAnother')}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};
