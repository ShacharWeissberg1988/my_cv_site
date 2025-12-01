import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { DidYouKnowGame } from '../widgets/DidYouKnowGame';
import { PersonalityStats } from '../widgets/PersonalityStats';
import { ChooseAdventure } from '../widgets/ChooseAdventure';
import { SideProjectGallery } from '../widgets/SideProjectGallery';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

// Image mapping for each hobby category
const hobbyImages: Record<number, string> = {
  0: 'creation-tech.jpg',
  1: 'garden-nature.jpg',
  2: 'cooking-food.jpg',
  3: 'gaming-pc.jpg',
  4: 'books-culture.jpg',
  5: 'visual-creation.jpg',
  6: 'water-maritime.jpg',
  7: 'management-startups.jpg',
  8: 'music-events.jpg',
  9: 'personal-side.jpg',
};

export const TabFunAndVolunteering: React.FC = () => {
  const { t, language } = useI18n();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            <div key={index} className="space-y-3 relative">
              <h4
                className="text-lg font-semibold text-primary-cyan cursor-pointer hover:text-primary-purple transition-colors"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hobbyCategory.category}
              </h4>

              {/* Hover Image Popup */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 -top-4 left-0 md:left-1/2 md:-translate-x-1/2 pointer-events-none"
                  >
                    <div className="relative">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${hobbyImages[index]}`}
                        alt={hobbyCategory.category}
                        className="w-64 h-48 object-cover rounded-lg border-2 border-primary-cyan shadow-xl shadow-primary-purple/30"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      {/* Gradient overlay for better text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent rounded-lg" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

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
