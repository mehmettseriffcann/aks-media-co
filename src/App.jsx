import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ShaderBackground from './ShaderBackground';
import './index.css';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
      <ShaderBackground />
      
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Small violet triangular logo icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 20H2L12 2Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--color-electric-iris)"/>
                <stop offset="1" stopColor="var(--color-deep-verdant)"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-nav" style={{ color: 'var(--color-bone-white)', textTransform: 'none' }}>Dala</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" className="btn-ghost">Manifesto</a>
            <a href="#" className="btn-ghost" style={{ color: 'var(--color-ash-gray)' }}>Team</a>
            <a href="#" className="btn-ghost" style={{ color: 'var(--color-ash-gray)' }}>Blog</a>
          </div>
          <a href="#" className="btn-primary">
            Request Access
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="section" style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 4rem', position: 'relative', zIndex: 10, minHeight: '80vh' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ flex: 1, maxWidth: '600px' }}>
          <motion.div variants={fadeInUp}>
             <span className="text-nav" style={{ color: 'var(--color-saffron-spark)' }}>Creative Agency</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-display" style={{ marginTop: '16px', marginBottom: '32px' }}>
            Unlock<br />collective<br />wisdom.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-body" style={{ maxWidth: '480px', marginBottom: '48px', color: 'var(--color-bone-white)' }}>
            AKS is a modern agency environment where strategy meets distributed intelligence. We strip away the noise to build pure, massive brand signals.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <a href="#about" className="btn-primary">
              Discover More
            </a>
          </motion.div>
        </motion.div>
        
        {/* The right half is left empty to let the WebGPU particle constellation dominate */}
        <div style={{ flex: 1 }}></div>
      </header>

      {/* Section Headline Block (Two-column asymmetric) */}
      <motion.section 
        id="about"
        className="section" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ padding: '8rem 4rem', display: 'flex', gap: '4rem', alignItems: 'flex-start' }}
      >
        <motion.div variants={fadeInUp} style={{ flex: 1 }}>
          <h2 className="text-heading-lg" style={{ color: 'var(--color-bone-white)' }}>
            Content.<br/>
            Strategy.<br/>
            Growth.
          </h2>
        </motion.div>
        
        <motion.div variants={fadeInUp} style={{ flex: 1, paddingTop: '16px' }}>
          <span className="text-nav" style={{ color: 'var(--color-saffron-spark)', display: 'block', marginBottom: '24px' }}>APPROACH</span>
          <p className="text-body" style={{ maxWidth: '520px', color: 'var(--color-silver-mist)' }}>
            We design content that feels sculptural rather than informational. By trusting scale and tracking over heavy typography or card layouts, we ensure your message floats clearly above the digital void. No borders. No noise. Just pure impact.
          </p>
        </motion.div>
      </motion.section>

      {/* Team Member Card (Floating) */}
      <motion.section 
        className="section" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ padding: '8rem 4rem' }}
      >
        <motion.div variants={fadeInUp} style={{ marginBottom: '6rem' }}>
          <h2 className="text-heading" style={{ color: 'var(--color-bone-white)' }}>The Minds</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
          {[
            { name: 'Mehmet Şerif', role: 'FOUNDER & CEO' },
            { name: 'Sarah Connor', role: 'HEAD OF STRATEGY' }
          ].map((member, idx) => (
            <motion.div key={idx} variants={fadeInUp} style={{ background: 'transparent' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#111', borderRadius: 'var(--radius-cards)', marginBottom: '24px', overflow: 'hidden' }}>
                 {/* Placeholder for portrait, keeping it pure void/dark gray for now if no image */}
                 <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }} />
              </div>
              <div className="text-caption" style={{ color: 'var(--color-electric-iris)', textTransform: 'uppercase', marginBottom: '8px' }}>
                {member.role}
              </div>
              <div className="text-heading-xs" style={{ color: 'var(--color-bone-white)' }}>
                {member.name}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <motion.div variants={fadeInUp} style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '60px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-electric-iris)' }}></div>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
        </motion.div>
      </motion.section>

      {/* Footer Block */}
      <motion.footer 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={staggerContainer}
        style={{ padding: '8rem 4rem 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.h2 variants={fadeInUp} className="text-heading" style={{ marginBottom: '60px', textAlign: 'center' }}>
          Enter the void.
        </motion.h2>
        
        <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '32px', marginBottom: '120px' }}>
          <a href="#" className="btn-ghost">Twitter</a>
          <a href="#" className="btn-ghost">LinkedIn</a>
          <a href="#" className="btn-ghost" style={{ color: 'var(--color-saffron-spark)' }}>hello@aksmedia.co</a>
        </motion.div>
        
        <motion.div variants={fadeInUp} className="text-caption" style={{ color: 'var(--color-ash-gray)', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <span>© {new Date().getFullYear()} AKS Media</span>
          <span>Designed with Dala</span>
        </motion.div>
      </motion.footer>
    </div>
  );
}

export default App;
