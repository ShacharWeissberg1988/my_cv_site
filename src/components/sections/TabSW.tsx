import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Card } from '../ui/Card';
import { SkillsRadar } from '../widgets/SkillsRadar';
import { useI18n } from '../../i18n/i18nContext';
import swData from '../../data/cv_sw.json';

export const TabSW: React.FC = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Code className="text-primary-cyan" size={32} />
        <h2 className="text-3xl font-bold gradient-text">{t('tabs.sw.title')}</h2>
      </div>

      <Card>
        <h3 className="text-xl font-semibold mb-4 text-primary-purple">Skills</h3>
        <SkillsRadar skills={swData.skills} />
      </Card>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary-purple">Projects</h3>
        {swData.projects.map((project, index) => (
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
