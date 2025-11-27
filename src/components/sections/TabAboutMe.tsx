import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';

export const TabAboutMe: React.FC = () => {
  const { t } = useI18n();
  const [videoError, setVideoError] = useState(false);
  const videoPath = import.meta.env.BASE_URL + 'about-me.mp4';
  const profileImage1 = import.meta.env.BASE_URL + 'profile-1.png';
  const profileImage2 = import.meta.env.BASE_URL + 'profile-2.png';

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

      {/* Profile Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden p-0">
            <img
              src={profileImage1}
              alt="Shachar Weissberg Profile 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </Card>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden p-0">
            <img
              src={profileImage2}
              alt="Shachar Weissberg Profile 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </Card>
        </motion.div>
      </div>

      <Card>
        <h3 className="text-2xl font-bold mb-4 gradient-text">About Shachar Weissberg</h3>
        <div className="space-y-4 text-gray-300">
          <p>
            Multi-disciplinary engineer with expertise spanning hardware, software, and system engineering.
          </p>
          <p>
            Passionate about creating innovative solutions that bridge the gap between different engineering domains.
          </p>
        </div>
      </Card>

      <div className="max-w-3xl mx-auto">
        <Card className="aspect-video bg-dark-bg-secondary flex items-center justify-center overflow-hidden">
          {!videoError ? (
            <video
              controls
              className="w-full h-full rounded-lg object-cover"
              preload="metadata"
              onError={() => setVideoError(true)}
            >
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
              <Play className="text-primary-cyan" size={48} />
              <p className="text-gray-400">Video introduction coming soon...</p>
              <p className="text-sm text-gray-500">Upload your video to public/about-me.mp4</p>
            </div>
          )}
        </Card>
      </div>
    </motion.div>
  );
};
