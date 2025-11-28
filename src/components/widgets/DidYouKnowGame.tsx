import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

export const DidYouKnowGame: React.FC = () => {
  const { language } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const facts = funFactsData.didYouKnow[language as 'en' | 'he'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % facts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [facts.length]);

  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="text-primary-cyan" size={24} />
        <h3 className="text-xl font-bold gradient-text">{language === 'he' ? 'האם ידעת?' : 'Did You Know?'}</h3>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-gray-300"
        >
          {facts[currentIndex].fact}
        </motion.p>
      </AnimatePresence>
      <div className="flex gap-2 mt-4">
        {facts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-primary-purple' : 'w-2 bg-gray-600'
            }`}
          />
        ))}
      </div>
    </Card>
  );
};
