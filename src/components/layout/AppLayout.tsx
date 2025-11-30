import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavTabs } from './NavTabs';
import { TabHW } from '../sections/TabHW';
import { TabSW } from '../sections/TabSW';
import { TabSYS } from '../sections/TabSYS';
import { TabAboutMe } from '../sections/TabAboutMe';
import { TabFunAndVolunteering } from '../sections/TabFunAndVolunteering';
import { AnimatedBackground } from '../ui/AnimatedBackground';

export const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const renderTab = () => {
    switch (activeTab) {
      case 'hw':
        return <TabHW />;
      case 'sw':
        return <TabSW />;
      case 'sys':
        return <TabSYS />;
      case 'aboutMe':
        return <TabAboutMe />;
      case 'fun':
        return <TabFunAndVolunteering />;
      default:
        return <TabHW />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <AnimatedBackground />
      <header className="bg-gradient-to-r from-dark-bg via-dark-bg-secondary to-dark-bg border-b border-dark-border">
        <div className="container mx-auto px-4 py-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center gradient-text"
            whileHover={{
              textShadow: '0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
            }}
            transition={{ duration: 0.3 }}
          >
            Shachar Weissberg
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-400 mt-2"
          >
            Hardware • Software • System Engineering
          </motion.p>
        </div>
      </header>

      <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {renderTab()}
        </motion.div>
      </main>

      <footer className="border-t border-dark-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Shachar Weissberg. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
