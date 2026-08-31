import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingObject from '../FloatingObject';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }
  })
};

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  // Hero parallax
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroScale   = useTransform(scrollYProgress, [0, 0.12], [1, 0.96]);
  const heroY       = useTransform(scrollYProgress, [0, 0.2],  [0, 100]);

  // Lead scrub reveal
  const leadOpacity = useTransform(scrollYProgress, [0.07, 0.2], [0, 1]);
  const leadY       = useTransform(scrollYProgress, [0.07, 0.2], [60, 0]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        backgroundColor: 'var(--color-obsidian)'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
        >
          <img
            src="/logo.png"
            alt="AKS Media"
            style={{ width: '180px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', backgroundColor: 'var(--color-obsidian)' }}>

      {/* 3D Floating object on right side */}
      <FloatingObject scrollYProgress={scrollYProgress} />

      {/* ─── HERO ─── */}
      <motion.header
        style={{
          flex: 1,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'flex-start',
          minHeight: '92vh',
          paddingTop: '80px',
          paddingLeft: 'clamp(32px, 6vw, 96px)',
          paddingRight: '50vw',
          position: 'relative', zIndex: 2,
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY
        }}
      >
        {/* Logo — rendered cleanly on obsidian bg */}
        <motion.div
          custom={0} initial="hidden" animate="visible" variants={fadeUp}
          style={{ marginBottom: '40px' }}
        >
          <img
            src="/logo.png"
            alt="AKS Media"
            style={{
              width: 'clamp(180px, 22vw, 300px)',
              height: 'auto',
              display: 'block',
            }}
          />
        </motion.div>

        <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} style={{ marginBottom: '12px' }}>
          <div className="text-caption text-uppercase text-ivory" style={{ letterSpacing: '0.18em' }}>
            CREATIVE AGENCY
          </div>
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
          <div className="hairline-divider" style={{ margin: '12px 0', background: 'rgba(245,240,230,0.2)' }}></div>
          <div className="text-caption text-uppercase text-taupe" style={{ letterSpacing: '0.16em', display: 'flex', alignItems: 'center', gap: '4px' }}>
            İÇERİK <span className="bullet-dot"></span> STRATEJİ <span className="bullet-dot"></span> BÜYÜME
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          custom={4} initial="hidden" animate="visible" variants={fadeUp}
          style={{ position: 'absolute', bottom: '40px', left: 'clamp(32px, 6vw, 96px)' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ width: '1px', height: '56px', background: 'rgba(245,240,230,0.25)' }}
          />
        </motion.div>
      </motion.header>

      {/* ─── LEAD TEXT (Scroll Scrub) ─── */}
      <motion.section
        style={{
          padding: '0 clamp(32px, 6vw, 96px) 160px',
          opacity: leadOpacity,
          y: leadY,
          zIndex: 2, position: 'relative'
        }}
      >
        <p style={{
          fontFamily: 'var(--font-display-serif)',
          fontSize: 'clamp(28px, 4vw, 52px)',
          lineHeight: 1.18,
          letterSpacing: '-0.015em',
          color: 'var(--color-ivory)',
          maxWidth: '680px'
        }}>
          Gürültülü dijital dünyada yankı değil,{' '}
          <span style={{ color: 'var(--color-warm-taupe)' }}>iz bırakıyoruz.</span>
        </p>
      </motion.section>

      {/* ─── SERVICES BAND ─── */}
      <motion.section
        id="hizmetler"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9 }}
        style={{
          backgroundColor: 'var(--color-ink-surface)',
          padding: '120px 0',
          position: 'relative', zIndex: 10,
          borderTopLeftRadius: '28px', borderTopRightRadius: '28px',
          boxShadow: '0 -30px 60px rgba(0,0,0,0.7)'
        }}
      >
        <div className="container">
          <div className="text-caption text-uppercase text-taupe" style={{ marginBottom: '64px', textAlign: 'center' }}>
            Disiplinlerimiz
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '64px' }}>
            {[
              { title: 'İçerik',   body: 'Estetik kaygısı yüksek, marka kimliğinizi yansıtan editoryal seviyede görsel ve metin üretimleri.' },
              { title: 'Strateji', body: 'Veriyi sezgiyle harmanlayan, uzun vadeli konumlandırma ve iletişim mimarisi.' },
              { title: 'Büyüme',  body: 'Performans odaklı yaklaşımlar ve metrik bazlı optimizasyonlarla sürdürülebilir dijital büyüme.' },
              { title: 'Kimlik',  body: 'Logonuzdan ton of voice\'ınıza markanızın tüm görsel ve sözel evrenini tasarlıyoruz.' },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display-serif)', fontSize: '34px', letterSpacing: '-0.01em', marginBottom: '16px', color: 'var(--color-ivory)' }}>
                  {s.title}
                </h3>
                <p className="text-body-sm text-taupe" style={{ maxWidth: '240px', margin: '0 auto' }}>{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <Link to="/hizmetler" className="btn-outline" style={{ padding: '12px 32px' }}>
              Tüm Hizmetleri Gör
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ─── PROJECTS PREVIEW ─── */}
      <section
        id="projeler"
        style={{ backgroundColor: 'var(--color-ink-surface)', padding: '0 0 120px', position: 'relative', zIndex: 10 }}
      >
        <div className="container">
          <div style={{
            borderTop: '1px solid var(--color-hairline)',
            paddingTop: '80px', marginBottom: '48px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px'
          }}>
            <div className="text-caption text-uppercase text-taupe">Seçili Çalışmalar</div>
            <Link to="/projeler" className="btn-ghost">Tümünü Gör →</Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '001', title: 'Minimalist Mimari',      cat: 'Sosyal Medya Yönetimi', result: '+47K Takipçi' },
              { num: '002', title: 'Lüks Tüketim Raporu',    cat: 'İçerik Stratejisi',     result: '%340 Erişim' },
              { num: '003', title: 'Yeni Nesil Finans',      cat: 'Büyüme & Performans',   result: '4.2x ROAS' },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <Link to="/projeler" style={{ textDecoration: 'none', display: 'block' }}>
                  <div
                    style={{
                      borderBottom: '1px solid var(--color-hairline)',
                      padding: '36px 0',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      gap: '24px', flexWrap: 'wrap',
                      transition: 'padding-left 0.4s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = '12px'; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
                      <span className="text-caption text-taupe">{p.num}</span>
                      <span style={{ fontFamily: 'var(--font-display-serif)', fontSize: 'clamp(22px, 3vw, 40px)', color: 'var(--color-ivory)', letterSpacing: '-0.01em' }}>{p.title}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="text-caption text-taupe" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{p.cat}</div>
                      <div style={{ fontSize: '13px', color: 'var(--color-terracotta)' }}>{p.result}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: 'var(--color-ink-surface)', padding: '56px 24px 40px', zIndex: 10, position: 'relative' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hairline-divider" style={{ width: '48px', marginBottom: '40px' }}></div>
          <div style={{ display: 'flex', gap: '32px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" className="btn-ghost">Instagram</a>
            <a href="#" className="btn-ghost" style={{ color: 'var(--color-warm-taupe)' }}>LinkedIn</a>
            <a href="mailto:hello@aksmedia.co" style={{ color: 'var(--color-terracotta)', fontFamily: 'var(--font-ui-sans)', fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              hello@aksmedia.co
            </a>
          </div>
          <div className="text-caption text-taupe">© {new Date().getFullYear()} AKS Media</div>
        </div>
      </footer>
    </div>
  );
}
