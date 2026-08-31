import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Restrained Motion: 400–600ms ease-out transitions on opacity and transform only.
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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

  useEffect(() => {
    // Slow fade-in of the lockup itself on load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ width: '40px' }}>
           {/* Minimal wordmark or icon if needed on scroll, leaving empty for symmetry for now or adding a tiny text logo */}
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

      {/* Hero Section: Centered Wordmark Lockup */}
      <motion.header 
        className="section container" 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '70vh' }}
      >
        {/* The Signature Logo Lockup */}
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

      {/* Section: Subtitle / Hero Lead Paragraph */}
      <motion.section 
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: 0 }}
      >
        <p className="text-body-lg" style={{ maxWidth: '480px', color: 'var(--color-ivory)' }}>
          Gürültülü dijital dünyada yankı değil, iz bırakıyoruz. Markanızın sesini en saf ve etkili haliyle duyurmak için estetik ve stratejiyi tek bir çizgide birleştiriyoruz.
        </p>
      </motion.section>

      {/* Section: Services (Ink Surface Band) */}
      <motion.section 
        id="hizmetler"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ backgroundColor: 'var(--color-ink-surface)', padding: '96px 0' }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div variants={fadeUp} className="text-caption text-uppercase text-taupe" style={{ marginBottom: '48px' }}>
            Disiplinlerimiz
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px', width: '100%', maxWidth: '960px' }}>
            
            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>İçerik</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Estetik kaygısı yüksek, marka kimliğinizi yansıtan ve kitlenizle organik bir bağ kuran editoryal seviyede görsel/metin üretimleri.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>Strateji</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Veriyi sezgiyle harmanlayan, uzun vadeli konumlandırma ve kriz anlarında markanızı koruyan iletişim mimarisi.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="text-heading" style={{ marginBottom: '16px' }}>Büyüme</h3>
              <p className="text-body-sm text-taupe" style={{ maxWidth: '280px' }}>
                Performans odaklı yaklaşımlar ve metrik bazlı optimizasyonlarla markanızın dijital hacmini sürdürülebilir şekilde artırma.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Section: Projects / Case Studies */}
      <motion.section 
        id="projeler"
        className="section container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <motion.div variants={fadeUp} className="text-caption text-uppercase text-taupe" style={{ marginBottom: '64px' }}>
          Seçili Çalışmalar
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%', maxWidth: '640px' }}>
          
          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <a href="#" className="text-heading" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
              Minimalist Mimari
            </a>
            <div className="text-caption text-uppercase text-taupe">Sosyal Medya Yönetimi</div>
          </motion.div>
          
          <div className="hairline-divider" style={{ width: '40px', margin: '0 auto' }}></div>

          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <a href="#" className="text-heading" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
              Lüks Tüketim Raporu
            </a>
            <div className="text-caption text-uppercase text-taupe">İçerik Stratejisi</div>
          </motion.div>

          <div className="hairline-divider" style={{ width: '40px', margin: '0 auto' }}></div>

          <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
            <a href="#" className="text-heading" style={{ display: 'block', marginBottom: '8px', transition: 'color 0.4s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-warm-taupe)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ivory)'}>
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
        style={{ padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
