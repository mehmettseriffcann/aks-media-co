import React, { useEffect, useState } from 'react';
import { ArrowRight, PenTool, TrendingUp, Target, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import ShaderBackground from './ShaderBackground';
import './index.css';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflowX: 'hidden' }}>
      <ShaderBackground />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10 }}
      >
        <div style={{ 
          fontFamily: 'var(--font-serif)', 
          fontSize: '2.5rem', 
          fontWeight: 600,
          letterSpacing: '2px',
          position: 'relative'
        }}>
          AKS
          <span style={{
            position: 'absolute',
            bottom: '6px',
            left: '22px',
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--color-accent)',
            borderRadius: '50%'
          }}></span>
        </div>
        <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px', transition: 'color 0.3s ease' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span className="hide-on-mobile">INSTAGRAM</span>
        </a>
      </motion.nav>

      {/* Hero Section */}
      <header className="section" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingTop: '10rem', paddingBottom: '10rem', position: 'relative', zIndex: 10 }}>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', marginBottom: '1.5rem', letterSpacing: '-2px', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            Creative Agency
          </motion.h1>
          <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)', color: 'var(--color-text-muted)', letterSpacing: '6px', textTransform: 'uppercase', marginBottom: '4rem' }}>
            İçerik &bull; Strateji &bull; Büyüme
          </motion.p>
          <motion.div variants={fadeInUp} style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="#hizmetler" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.25rem 2.5rem',
              backgroundColor: 'var(--color-text)',
              color: 'var(--color-bg)',
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(255,255,255,0.1)';
            }}>
              Neler Yapıyoruz?
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>
      </header>

      {/* Marquee Ticker */}
      <div style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text)', padding: '1.5rem 0', overflow: 'hidden', display: 'flex', whiteSpace: 'nowrap' }}>
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          style={{ display: 'flex', gap: '3rem', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          {Array(8).fill("DİJİTAL PAZARLAMA • İÇERİK ÜRETİMİ • SOSYAL MEDYA YÖNETİMİ • SEO •").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.section 
        id="hizmetler" 
        className="section" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ padding: '8rem 2rem' }}
      >
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>Markanızı Büyüten Çözümler</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>Modern dijital dünyada gürültüden sıyrılıp dikkat çekmek için gereken tüm stratejik ve yaratıcı silahlar.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Service 1 */}
          <motion.div variants={scaleUp} style={{ padding: '3rem 2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <PenTool size={28} />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>İçerik Üretimi</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>Markanızın ruhunu yansıtan, hedef kitlenizin kaydırmayı bırakmasını sağlayacak dikkat çekici ve estetik içerikler tasarlıyoruz.</p>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={scaleUp} style={{ padding: '3rem 2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <Target size={28} />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Strateji</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>Sadece estetik değil, verilere dayanan, ölçülebilir ve markanızı rakiplerinizden ayıracak uzun vadeli yol haritaları çiziyoruz.</p>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={scaleUp} style={{ padding: '3rem 2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.03)', transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <TrendingUp size={28} />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Büyüme</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>Etkileşimi doğrudan satışa dönüştüren performans pazarlama ve büyüme (growth) taktikleriyle markanızın hacmini katlıyoruz.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#050505', padding: '4rem 2rem' }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', gap: '2rem' }}>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>50+</h4>
            <p style={{ color: 'var(--color-text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Mutlu Marka</p>
          </motion.div>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-text)' }}>10M+</h4>
            <p style={{ color: 'var(--color-text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Aylık Etkileşim</p>
          </motion.div>
          <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
            <h4 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>360&deg;</h4>
            <p style={{ color: 'var(--color-text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Dijital Çözüm</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio / Works Section */}
      <motion.section 
        className="section" 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        style={{ padding: '8rem 2rem' }}
      >
        <motion.div variants={fadeInUp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3rem)', letterSpacing: '-1px' }}>Öne Çıkan Çalışmalar</h2>
          </div>
          <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '4px', fontSize: '1rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text)'; e.currentTarget.style.borderColor = 'var(--color-text)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.borderColor = 'var(--color-text-muted)'; }}>
            Tümünü Instagram'da Gör
          </a>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800', title: 'Mimari Konsept Tasarımı' },
            { img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', title: 'Ürün Prodüksiyonu' },
            { img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800', title: 'Sosyal Medya Yönetimi' }
          ].map((item, index) => (
            <motion.div key={index} variants={scaleUp} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/5', cursor: 'pointer', group: 'true' }}>
              <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.2)', transition: 'background-color 0.5s ease', zIndex: 1 }} className="hover-overlay" />
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.previousSibling.style.backgroundColor = 'rgba(0,0,0,0.6)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.previousSibling.style.backgroundColor = 'rgba(0,0,0,0.2)'; }} />
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 2, pointerEvents: 'none' }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer / CTA Section */}
      <motion.footer 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={staggerContainer}
        style={{ padding: '8rem 2rem 4rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto', backgroundColor: '#050505', position: 'relative' }}
      >
        <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)', letterSpacing: '-1px' }}>
          Hikayenizi Birlikte<br/>Yazalım
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <a href="mailto:hello@aksmedia.co" style={{
            display: 'inline-flex',
            fontSize: '1.5rem',
            color: 'var(--color-accent)',
            borderBottom: '2px solid var(--color-accent)',
            paddingBottom: '8px',
            marginBottom: '6rem',
            fontWeight: 500,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; }}>
            hello@aksmedia.co
          </a>
        </motion.div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '0.9rem', flexWrap: 'wrap', gap: '1rem' }}>
          <span>&copy; {new Date().getFullYear()} AKS Media. Tüm Hakları Saklıdır.</span>
          <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@aksmedia.co</span>
          </a>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
