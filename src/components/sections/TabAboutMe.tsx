import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Play } from 'lucide-react';
import { Card } from '../ui/Card';
import { VolunteeringCards } from '../widgets/VolunteeringCards';
import { useI18n } from '../../i18n/i18nContext';

export const TabAboutMe: React.FC = () => {
  const { t } = useI18n();
  const [videoError, setVideoError] = useState(false);
  const videoPath = import.meta.env.BASE_URL + 'about-me.mp4';
  const profileImage = import.meta.env.BASE_URL + 'profile-2.png';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <User className="text-primary-cyan" size={32} />
        <h2 className="text-3xl font-bold text-primary-cyan">{t('tabs.aboutMe.title')}</h2>
      </div>

      <Card>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* About Text */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-primary-cyan">About Shachar Weissberg</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>{t('tabs.aboutMe.bio.paragraph1')}</p>
              <p>{t('tabs.aboutMe.bio.paragraph2')}</p>
              <p>{t('tabs.aboutMe.bio.paragraph3')}</p>
              <p>{t('tabs.aboutMe.bio.paragraph4')}</p>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-auto flex-shrink-0">
            <img
              src={profileImage}
              alt="Shachar Weissberg"
              className="w-full md:w-48 lg:w-56 h-auto object-cover rounded-lg border-2 border-primary-purple/30"
            />
          </div>
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

      <VolunteeringCards />
    </motion.div>
  );
};
