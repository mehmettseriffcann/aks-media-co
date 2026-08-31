import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const projects = [
  {
    id: 1,
    num: '001',
    title: 'Minimalist Mimari',
    category: 'Sosyal Medya Yönetimi',
    year: '2024',
    tags: ['Instagram', 'Reels', 'Strateji'],
    desc: 'Türkiye\'nin önde gelen mimarlık ofislerinden biri için altı aylık bütünleşik sosyal medya yönetimi ve içerik üretim süreci. 0\'dan 47K\'ya organik büyüme.',
    result: '+47K Takipçi',
    bg: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    num: '002',
    title: 'Lüks Tüketim Raporu',
    category: 'İçerik Stratejisi',
    year: '2024',
    tags: ['LinkedIn', 'B2B', 'İçerik'],
    desc: 'Premium tüketim markası için üretilen çeyreklik raporlar ve LinkedIn içerik serisi. Marka otoritesini sektörde konumlandıran editorial içerik mimarisi.',
    result: '%340 Erişim Artışı',
    bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    num: '003',
    title: 'Yeni Nesil Finans',
    category: 'Büyüme & Performans',
    year: '2023',
    tags: ['Meta Ads', 'TikTok', 'Performans'],
    desc: 'Fintech girişimi için uçtan uca büyüme kampanyası. Paid acquisition, organik içerik ve topluluk yönetimini birleştiren entegre bir yaklaşım.',
    result: '4.2x ROAS',
    bg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    num: '004',
    title: 'Gastronomi Sahnesi',
    category: 'Marka Kimliği & İçerik',
    year: '2023',
    tags: ['Fotoğrafçılık', 'Video', 'Instagram'],
    desc: 'İstanbul\'un en prestijli restoranlarından biri için yeniden marka konumlandırması ve yeni menü lansmanı. Estetik odaklı içerik üretimi ve influencer aktivasyonu.',
    result: '%89 Rezervasyon Artışı',
    bg: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function ProjelerPage() {
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px' }}>
      {/* Header */}
      <div className="container" style={{ paddingBottom: '96px' }}>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-caption text-uppercase text-taupe"
          style={{ marginBottom: '24px' }}
        >
          Seçili Çalışmalar
        </motion.div>
        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="text-display"
          style={{ maxWidth: '700px', lineHeight: 1.05 }}
        >
          İz bırakan<br />çalışmalar.
        </motion.h1>
      </div>

      {/* Projects List */}
      <div style={{ borderTop: '1px solid var(--color-hairline)' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderBottom: '1px solid var(--color-hairline)',
              padding: '48px 0',
              cursor: 'pointer',
              transition: 'background 0.4s',
              background: hovered === p.id ? 'rgba(22,19,17,0.8)' : 'transparent',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background image on hover */}
            <AnimatePresence>
              {hovered === p.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.12 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${p.bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    pointerEvents: 'none'
                  }}
                />
              )}
            </AnimatePresence>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '48px', alignItems: 'center', position: 'relative' }}>
              {/* Number */}
              <div className="text-caption text-taupe">{p.num}</div>

              {/* Title & Meta */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <motion.h2
                    className="text-heading"
                    animate={{ color: hovered === p.id ? '#f5f0e6' : '#f5f0e6' }}
                    style={{ fontFamily: 'var(--font-display-serif)', fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.015em' }}
                  >
                    {p.title}
                  </motion.h2>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'transparent',
                      border: '1px solid var(--color-hairline)',
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      color: 'var(--color-warm-taupe)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-caption text-taupe" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {p.category} · {p.year}
                </div>
              </div>

              {/* Result */}
              <motion.div
                animate={{ opacity: hovered === p.id ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                style={{ textAlign: 'right' }}
              >
                <div style={{ fontSize: '13px', color: 'var(--color-terracotta)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Sonuç</div>
                <div style={{ fontSize: '20px', fontFamily: 'var(--font-display-serif)', color: 'var(--color-ivory)' }}>{p.result}</div>
              </motion.div>
            </div>

            {/* Expanded description on hover */}
            <AnimatePresence>
              {hovered === p.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="container" style={{ paddingTop: '24px', paddingLeft: 'calc(80px + 48px)' }}>
                    <p className="text-body-sm text-taupe" style={{ maxWidth: '520px' }}>{p.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container"
        style={{ padding: '128px 24px', textAlign: 'center' }}
      >
        <div className="text-caption text-uppercase text-taupe" style={{ marginBottom: '32px' }}>Sıradaki proje sizin olsun</div>
        <h2 className="text-heading-lg" style={{ marginBottom: '48px' }}>
          Birlikte bir iz<br />bırakalım.
        </h2>
        <a href="mailto:hello@aksmedia.co" className="btn-outline" style={{ padding: '16px 40px', fontSize: '14px' }}>
          Proje Başlat
        </a>
      </motion.div>
    </div>
  );
}
