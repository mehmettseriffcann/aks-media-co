import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Show preloader for 2 seconds, then trigger completion
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-void)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img 
          src="/logo.JPG" 
          alt="AKS Media" 
          style={{ 
            width: '120px', 
            height: 'auto',
            filter: 'brightness(1.2)'
          }} 
          onError={(e) => {
            // Fallback text if logo.JPG is missing
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span className="text-heading-xs" style={{ display: 'none', color: 'var(--color-bone-white)', letterSpacing: '2px' }}>
          AKS MEDIA
        </span>
      </motion.div>
    </motion.div>
  );
}
