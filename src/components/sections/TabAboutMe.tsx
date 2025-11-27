import React from 'react';
import { motion } from 'framer-motion';
import { User, Download } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';

export const TabAboutMe: React.FC = () => {
  const { t } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <User className="text-primary-cyan" size={32} />
        <h2 className="text-3xl font-bold gradient-text">{t('tabs.aboutMe.title')}</h2>
      </div>

      <Card className="aspect-video bg-dark-bg-secondary flex items-center justify-center">
        {/* Video placeholder - add video file to public/about-me.mp4 */}
        <video
          controls
          className="w-full h-full rounded-lg"
          poster="/placeholder-video.jpg"
        >
          <source src="/about-me.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Card>

      <Card>
        <h3 className="text-2xl font-bold mb-4 gradient-text">About Shachar Weissberg</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            Multi-disciplinary engineer with expertise spanning hardware, software, and system engineering.
          </p>
          <p>
            Passionate about creating innovative solutions that bridge the gap between different engineering domains.
          </p>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-purple to-primary-cyan rounded-lg font-semibold hover:opacity-90 transition-opacity mt-6">
            <Download size={20} />
            {t('common.downloadCV')}
          </button>
        </div>
      </Card>
    </motion.div>
  );
};
