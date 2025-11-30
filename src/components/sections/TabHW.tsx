import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Building2, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import { SkillsRadar } from '../widgets/SkillsRadar';
import { useI18n } from '../../i18n/i18nContext';
import hwData from '../../data/cv_hw.json';

export const TabHW: React.FC = () => {
  const { t, language } = useI18n();
  const currentLang = language as 'en' | 'he';

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

      {/* Core Skills */}
      <Card>
        <h3 className="text-2xl font-semibold mb-4 gradient-text">{language === 'he' ? 'מיומנויות ליבה' : 'Core Skills'}</h3>
        <SkillsRadar skills={hwData.skills[currentLang]} />
      </Card>

      {/* Expertise Areas */}
      <Card>
        <h3 className="text-2xl font-semibold mb-4 gradient-text">{language === 'he' ? 'תחומי התמחות' : 'Expertise Areas'}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hwData.expertise[currentLang].map((area, index) => (
            <div key={index} className="space-y-3">
              <h4 className="text-lg font-semibold text-primary-cyan">{area.category}</h4>
              <ul className="space-y-2">
                {area.skills.map((skill, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-primary-purple mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* Work Experience */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold gradient-text flex items-center gap-2">
          <Building2 className="text-primary-cyan" size={24} />
          {language === 'he' ? 'ניסיון תעסוקתי' : 'Work Experience'}
        </h3>
        {hwData.workExperience[currentLang].map((job, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h4 className="text-xl font-bold text-primary-cyan">{job.company}</h4>
                <p className="text-lg text-gray-200 mt-1">{job.position}</p>
              </div>
              <div className="flex items-center gap-2 text-metallic-silver mt-2 md:mt-0">
                <Calendar size={16} />
                <span className="text-sm">
                  {job.period} {job.duration && `(${job.duration})`}
                </span>
              </div>
            </div>

            {job.companyDescription && (
              <p className="text-gray-400 italic mb-4 text-sm border-l-2 border-primary-purple pl-3">
                {job.companyDescription}
              </p>
            )}

            {job.description && (
              <p className="text-gray-300 mb-4">{job.description}</p>
            )}

            <div className="space-y-2 mb-4">
              {job.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary-purple mt-1">▪</span>
                  <p className="text-gray-300 text-sm">{resp}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-dark-bg-tertiary rounded-full text-xs text-primary-cyan border border-primary-purple/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {job.clients && (
              <div className="mt-4 pt-4 border-t border-dark-border">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold">{language === 'he' ? 'לקוחות:' : 'Clients:'}</span>{' '}
                  {job.clients.join(', ')}
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  );
};
