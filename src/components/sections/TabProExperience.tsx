import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';
import { TagPill } from '../ui/TagPill';
import { useI18n } from '../../i18n/i18nContext';
import experienceData from '../../data/experience.json';

export const TabProExperience: React.FC = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="text-primary-purple" size={32} />
        <h2 className="text-3xl font-bold gradient-text">{t('tabs.proExperience.title')}</h2>
      </div>

      <div className="space-y-6">
        {experienceData.timeline.map((job, index) => (
          <Card key={index}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-primary-cyan">{job.position}</h3>
                <p className="text-lg text-metallic-silver">{job.company}</p>
              </div>
              <p className="text-sm text-gray-400">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            <p className="text-gray-300 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, i) => (
                <TagPill key={i}>{tech}</TagPill>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
