import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Card } from '../ui/Card';
import { DidYouKnowGame } from '../widgets/DidYouKnowGame';
import { PersonalityStats } from '../widgets/PersonalityStats';
import { ChooseAdventure } from '../widgets/ChooseAdventure';
import { SideProjectGallery } from '../widgets/SideProjectGallery';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

// Image folders for each hobby category (each category can have multiple images)
const hobbyImageFolders: Record<number, { folder: string; count: number }> = {
  0: { folder: 'creation-tech', count: 3 }, // 1.jpg, 2.jpg, 3.jpg
  1: { folder: 'garden-nature', count: 3 },
  2: { folder: 'cooking-food', count: 0 },
  3: { folder: 'gaming-pc', count: 3 },
  4: { folder: 'books-culture', count: 0 },
  5: { folder: 'visual-creation', count: 0 },
  6: { folder: 'water-maritime', count: 3 },
  7: { folder: 'management-startups', count: 0 },
  8: { folder: 'music-events', count: 0 },
  9: { folder: 'personal-side', count: 1 },
};

export const TabFunAndVolunteering: React.FC = () => {
  const { t, language } = useI18n();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  // Auto-advance slideshow when hovering
  useEffect(() => {
    if (hoveredIndex === null) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const current = prev[hoveredIndex] ?? 0;
        const imageCount = hobbyImageFolders[hoveredIndex]?.count ?? 1;
        return {
          ...prev,
          [hoveredIndex]: (current + 1) % imageCount,
        };
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const handlePrevImage = (categoryIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const current = prev[categoryIndex] ?? 0;
      const imageCount = hobbyImageFolders[categoryIndex]?.count ?? 1;
      return {
        ...prev,
        [categoryIndex]: current === 0 ? imageCount - 1 : current - 1,
      };
    });
  };

  const handleNextImage = (categoryIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => {
      const current = prev[categoryIndex] ?? 0;
      const imageCount = hobbyImageFolders[categoryIndex]?.count ?? 1;
      return {
        ...prev,
        [categoryIndex]: (current + 1) % imageCount,
      };
    });
  };

  const getImagePath = (categoryIndex: number, imageIndex: number) => {
    const folder = hobbyImageFolders[categoryIndex]?.folder;
    return `${import.meta.env.BASE_URL}images/${folder}/${imageIndex + 1}.jpg`;
  };

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
              <h4
                className="text-lg font-semibold text-primary-cyan cursor-pointer hover:text-primary-purple transition-colors"
                onClick={() => setHoveredIndex(index)}
              >
                {hobbyCategory.category}
              </h4>

              {/* Click Slideshow Popup */}
              {createPortal(
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <>
                      {/* Backdrop overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 z-40"
                        onClick={() => setHoveredIndex(null)}
                      />
                      <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={() => setHoveredIndex(null)}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                          className="relative"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Close Button */}
                          <button
                            onClick={() => setHoveredIndex(null)}
                            className="absolute -top-3 -right-3 z-10 p-2 bg-dark-bg border-2 border-primary-cyan rounded-full hover:bg-primary-purple/50 transition-colors"
                            aria-label="Close slideshow"
                          >
                            <X className="text-primary-cyan" size={20} />
                          </button>

                          {/* Slideshow Container */}
                          <div className="relative w-[50vw] h-[50vh] rounded-lg border-2 border-primary-cyan shadow-xl shadow-primary-purple/30 overflow-hidden">
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={`${index}-${currentImageIndex[index] ?? 0}`}
                                src={getImagePath(index, currentImageIndex[index] ?? 0)}
                                alt={`${hobbyCategory.category} ${(currentImageIndex[index] ?? 0) + 1}`}
                                className="w-full h-full object-contain"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.8 }}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                              onClick={(e) => handlePrevImage(index, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-dark-bg/70 hover:bg-primary-purple/50 rounded-full border border-primary-cyan/50 transition-colors pointer-events-auto"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="text-primary-cyan" size={20} />
                            </button>
                            <button
                              onClick={(e) => handleNextImage(index, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-dark-bg/70 hover:bg-primary-purple/50 rounded-full border border-primary-cyan/50 transition-colors pointer-events-auto"
                              aria-label="Next image"
                            >
                              <ChevronRight className="text-primary-cyan" size={20} />
                            </button>

                            {/* Slide Indicators */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
                              {Array.from({ length: hobbyImageFolders[index]?.count ?? 1 }).map((_, i) => (
                                <div
                                  key={i}
                                  className={`h-1.5 rounded-full transition-all ${
                                    i === (currentImageIndex[index] ?? 0)
                                      ? 'w-6 bg-primary-cyan'
                                      : 'w-1.5 bg-gray-500'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  )}
                </AnimatePresence>,
                document.body
              )}

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
