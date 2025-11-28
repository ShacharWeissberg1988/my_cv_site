import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

export const SideProjectGallery: React.FC = () => {
  const { t } = useI18n();
  const projects = funFactsData.sideProjects;

  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="text-primary-cyan" size={28} />
        <h3 className="text-2xl font-bold gradient-text">{t('widgets.sideProjects.title')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
          >
            <div className="h-full p-5 bg-dark-bg-tertiary rounded-lg border border-primary-purple/30 hover:border-primary-cyan/50 transition-all">
              <div className="flex flex-col items-center text-center space-y-3">
                <motion.div
                  className="text-5xl"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-200 group-hover:text-primary-cyan transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Decorative gradient bottom border on hover */}
              <motion.div
                className="mt-4 h-1 bg-gradient-to-r from-primary-purple via-primary-cyan to-primary-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-dark-bg-secondary rounded-lg border border-primary-purple/20 text-center">
        <p className="text-sm text-gray-400 italic">
          "{t('widgets.sideProjects.quote')}"
        </p>
      </div>
    </Card>
  );
};
