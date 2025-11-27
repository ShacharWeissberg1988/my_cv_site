import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-primary-purple rounded-full blur-3xl opacity-20"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, 30, -20, 0],
          x: [0, 20, -10, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-primary-cyan rounded-full blur-3xl opacity-15"
        style={{ top: '50%', right: '15%' }}
        animate={{
          y: [0, -40, 20, 0],
          x: [0, -15, 10, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-metallic-gold rounded-full blur-3xl opacity-10"
        style={{ bottom: '15%', left: '20%' }}
        animate={{
          y: [0, 25, -15, 0],
          x: [0, -20, 15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-bg/50 to-dark-bg" />
    </div>
  );
};
