import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ShaderBackground from './ShaderBackground';
import './index.css';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
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
  
  // Framer Motion Scroll Hooks
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms based on overall page scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  
  // Scrub reveal for the lead paragraph
  const leadOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.3], [0.1, 1, 1]);
  const leadY = useTransform(scrollYProgress, [0.05, 0.2], [50, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-obsidian)' }}>
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          src="/logo.png" 
          alt="AKS Media" 
          style={{ width: '120px', objectFit: 'contain' }} 
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <ShaderBackground />
      
      {/* Navigation Bar - Sticky */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ 
          padding: '24px 48px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0) 100%)',
          backdropFilter: 'blur(8px)'
        }}
      >
        <div style={{ width: '40px' }}>
           {/* Minimal wordmark or icon if needed on scroll */}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#hizmetler" className="btn-ghost text-taupe">Hizmetler</a>
            <a href="#projeler" className="btn-ghost text-taupe">Projeler</a>
          </div>
          <a href="mailto:hello@aksmedia.co" className="btn-outline">
            İletişim
          </a>
        </div>
      </motion.nav>

      {/* Hero Section: Scroll Parallax */}
      <motion.header 
        className="section container" 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          textAlign: 'center', 
          minHeight: '70vh',
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY
        }}
      >
        <motion.div variants={fadeUp} style={{ marginBottom: '24px' }}>
          <img src="/logo.png" alt="AKS Media Wordmark" style={{ width: '320px', maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        </motion.div>
        
        <motion.div variants={fadeUp}>
          <div className="text-caption text-uppercase text-ivory" style={{ letterSpacing: '0.16em', marginBottom: '16px' }}>
            CREATIVE AGENCY
          </div>
          
          <div className="hairline-divider"></div>
          
          <div className="text-caption text-uppercase text-taupe" style={{ letterSpacing: '0.16em', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
            İÇERİK
            <span className="bullet-dot"></span>
            STRATEJİ
            <span className="bullet-dot"></span>
            BÜYÜME
          </div>
        </motion.div>
      </motion.header>

      {/* Section: Subtitle / Hero Lead Paragraph (Scroll Scrub) */}
      <motion.section 
        className="section container"
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          textAlign: 'center', 
          paddingTop: '64px',
          paddingBottom: '128px',
          opacity: leadOpacity,
          y: leadY
        }}
      >
        <p className="text-display" style={{ maxWidth: '800px', color: 'var(--color-ivory)', fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.2 }}>
          Gürültülü dijital dünyada yankı değil, <span className="text-taupe">iz bırakıyoruz.</span> Markanızın sesini en saf haliyle duyurmak için estetik ve stratejiyi tek bir çizgide birleştiriyoruz.
        </p>
      </motion.section>

      {/* Section: Services (Sticky Overlay) */}
      <motion.section 
        id="hizmetler"
        style={{ 
          backgroundColor: 'var(--color-ink-surface)', 
          padding: '128px 0',
          position: 'relative',
          zIndex: 10,
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          boxShadow: '0 -20px 40px rgba(0,0,0,0.5)'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-caption text-uppercase text-taupe" style={{ marginBottom: '64px' }}
          >
            Disiplinlerimiz
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', width: '100%', maxWidth: '960px' }}>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>İçerik</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Estetik kaygısı yüksek, marka kimliğinizi yansıtan ve kitlenizle organik bir bağ kuran editoryal seviyede görsel/metin üretimleri.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>Strateji</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Veriyi sezgiyle harmanlayan, uzun vadeli konumlandırma ve kriz anlarında markanızı koruyan iletişim mimarisi.
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>Büyüme</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Performans odaklı yaklaşımlar ve metrik bazlı optimizasyonlarla markanızın dijital hacmini sürdürülebilir şekilde artırma.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Section: Projects / Case Studies (Parallax List) */}
      <motion.section 
        id="projeler"
        className="section container"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '128px', paddingBottom: '128px' }}
      >
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-caption text-uppercase text-taupe" style={{ marginBottom: '64px' }}>
          Seçili Çalışmalar
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', width: '100%', maxWidth: '800px' }}>
          
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', position: 'relative' }}>
            <a href="#" className="text-display-sm" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s', fontSize: 'clamp(48px, 6vw, 80px)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
              Minimalist Mimari
            </a>
            <div className="text-caption text-uppercase text-taupe">Sosyal Medya Yönetimi</div>
          </motion.div>
          
          <div className="hairline-divider" style={{ width: '40px', margin: '0 auto' }}></div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
            <a href="#" className="text-display-sm" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s', fontSize: 'clamp(48px, 6vw, 80px)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
              Lüks Tüketim Raporu
            </a>
            <div className="text-caption text-uppercase text-taupe">İçerik Stratejisi</div>
          </motion.div>

          <div className="hairline-divider" style={{ width: '40px', margin: '0 auto' }}></div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
            <a href="#" className="text-display-sm" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s', fontSize: 'clamp(48px, 6vw, 80px)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
              Yeni Nesil Finans
            </a>
            <div className="text-caption text-uppercase text-taupe">Büyüme & Performans</div>
          </motion.div>

        </div>
      </motion.section>

      {/* Footer Block */}
      <motion.footer 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={fadeUp}
        style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'var(--color-ink-surface)' }}
      >
        <div className="hairline-divider" style={{ width: '60px', marginBottom: '48px' }}></div>
        
        <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
          <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" className="btn-ghost">Instagram</a>
          <a href="#" className="btn-ghost">LinkedIn</a>
        </div>
        
        <div className="text-caption text-taupe" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '24px' }}>
          <span>© {new Date().getFullYear()} AKS Media</span>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
