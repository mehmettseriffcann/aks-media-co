import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShaderBackground from './ShaderBackground';
import Preloader from './Preloader';
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
  const [loading, setLoading] = useState(true);

  // Lock scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}
        >
          <ShaderBackground />
          
          {/* Navigation Bar */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ padding: '2rem 4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/logo.JPG" 
                alt="AKS Logo" 
                style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '4px' }} 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-nav" style={{ color: 'var(--color-bone-white)', textTransform: 'none', display: 'none' }}>AKS</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a href="#yaklasim" className="btn-ghost">Felsefe</a>
                <a href="#ekip" className="btn-ghost" style={{ color: 'var(--color-ash-gray)' }}>Zihinler</a>
                <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" className="btn-ghost" style={{ color: 'var(--color-ash-gray)' }}>Portfolyo</a>
              </div>
              <a href="mailto:hello@aksmedia.co" className="btn-primary">
                Bize Ulaşın
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
                Dijital<br />Sınırları<br />Aşın.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-body" style={{ maxWidth: '480px', marginBottom: '48px', color: 'var(--color-bone-white)' }}>
                AKS Media, gürültünün içinde kaybolmamanız için içerik, strateji ve büyüme odaklı dijital zeka sunar. Markanızı sadece göstermez, hissettiririz.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <a href="#yaklasim" className="btn-primary">
                  Neler Yapıyoruz?
                </a>
              </motion.div>
            </motion.div>
            
            {/* The right half is left empty to let the WebGPU particle constellation dominate */}
            <div style={{ flex: 1 }}></div>
          </header>

          {/* Section Headline Block (Two-column asymmetric) */}
          <motion.section 
            id="yaklasim"
            className="section" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ padding: '8rem 4rem', display: 'flex', gap: '4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}
          >
            <motion.div variants={fadeInUp} style={{ flex: 1, minWidth: '300px' }}>
              <h2 className="text-heading-lg" style={{ color: 'var(--color-bone-white)' }}>
                İçerik.<br/>
                Strateji.<br/>
                Büyüme.
              </h2>
            </motion.div>
            
            <motion.div variants={fadeInUp} style={{ flex: 1, paddingTop: '16px', minWidth: '300px' }}>
              <span className="text-nav" style={{ color: 'var(--color-saffron-spark)', display: 'block', marginBottom: '24px' }}>YAKLAŞIMIMIZ</span>
              <p className="text-body" style={{ maxWidth: '520px', color: 'var(--color-silver-mist)' }}>
                Bizim için içerik salt bir üretim değil, markanızın geleceğini şekillendiren bir mühendisliktir. Geleneksel ajans kalıplarını ve sınırları (borders) yıkıyoruz. Dijital dünyadaki boşlukta (void), mesajınızın en saf ve en yüksek sesle yankılanmasını sağlıyoruz. 
              </p>
            </motion.div>
          </motion.section>

          {/* Team Member Card (Floating) */}
          <motion.section 
            id="ekip"
            className="section" 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            style={{ padding: '8rem 4rem' }}
          >
            <motion.div variants={fadeInUp} style={{ marginBottom: '6rem' }}>
              <h2 className="text-heading" style={{ color: 'var(--color-bone-white)' }}>Zihinler</h2>
            </motion.div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
              {[
                { name: 'Mehmet Şerif', role: 'KURUCU & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
                { name: 'Kreatif Ağ', role: 'YARATICI EKİP', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' }
              ].map((member, idx) => (
                <motion.div key={idx} variants={fadeInUp} style={{ background: 'transparent' }}>
                  <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: '#111', borderRadius: 'var(--radius-cards)', marginBottom: '24px', overflow: 'hidden' }}>
                     <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }} />
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
              Dijital uzaya<br/>adım atın.
            </motion.h2>
            
            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '32px', marginBottom: '120px' }}>
              <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" className="btn-ghost">Instagram</a>
              <a href="#" className="btn-ghost">LinkedIn</a>
              <a href="mailto:hello@aksmedia.co" className="btn-ghost" style={{ color: 'var(--color-saffron-spark)' }}>hello@aksmedia.co</a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-caption" style={{ color: 'var(--color-ash-gray)', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <span>© {new Date().getFullYear()} AKS Media</span>
              <span>Designed with Dala Aesthetic</span>
            </motion.div>
          </motion.footer>
        </motion.div>
      )}
    </>
  );
}

export default App;
