import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { Card } from '../ui/Card';
import { SkillsRadar } from '../widgets/SkillsRadar';
import { useI18n } from '../../i18n/i18nContext';
import hwData from '../../data/cv_hw.json';

export const TabHW: React.FC = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Cpu className="text-primary-purple" size={32} />
        <h2 className="text-3xl font-bold gradient-text">{t('tabs.hw.title')}</h2>
      </div>

      <Card>
        <h3 className="text-xl font-semibold mb-4 text-primary-cyan">Skills</h3>
        <SkillsRadar skills={hwData.skills} />
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary-cyan">Projects</h3>
        {hwData.projects.map((project, index) => (
          <Card key={index}>
            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-dark-bg-tertiary rounded text-xs text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-metallic-silver mt-2">{project.year}</p>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
