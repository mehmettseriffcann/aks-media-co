import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const services = [
  {
    num: '01',
    title: 'İçerik Üretimi',
    sub: 'Content Production',
    desc: 'Markanızın DNA\'sını anlayarak, izleyicinizle gerçek bağ kuran, estetik kaygısı yüksek video, fotoğraf ve metin üretimleri yapıyoruz. Her kare, bir marka manifestosu gibi işlev görür.',
    items: ['Sosyal Medya İçerikleri', 'Reel & Short-Form Video', 'Marka Fotoğrafçılığı', 'Copywriting & Senaryo']
  },
  {
    num: '02',
    title: 'Dijital Strateji',
    sub: 'Digital Strategy',
    desc: 'Veriyi sezgiyle harmanlayan, uzun vadeli konumlandırma ve kriz anlarında markanızı ayakta tutan iletişim mimarisi kuruyoruz. Rakipleriniz tepki verir, siz yön çizersiniz.',
    items: ['Marka Konumlandırma', 'Platform Stratejisi', 'Kriz İletişimi', 'Rakip Analizi']
  },
  {
    num: '03',
    title: 'Büyüme & Performans',
    sub: 'Growth & Performance',
    desc: 'Ölçülebilir hedefler, gerçek verilerle optimize edilmiş kampanyalar ve sürdürülebilir büyüme. Takipçi sayısını değil, markanızın değerini büyütüyoruz.',
    items: ['Ücretli Reklam Yönetimi', 'Topluluk Yönetimi', 'Analitik & Raporlama', 'Influencer Marketing']
  },
  {
    num: '04',
    title: 'Marka Kimliği',
    sub: 'Brand Identity',
    desc: 'Logonuzdan ton of voice\'ınıza, renk palet tanımlarından sosyal medya kılavuzuna kadar markanızın tüm görsel ve sözel evrenini tasarlıyoruz.',
    items: ['Logo & Görsel Kimlik', 'Ton of Voice Kılavuzu', 'Sosyal Medya Şablonları', 'Marka El Kitabı']
  }
];

export default function HizmetlerPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '120px' }}>
      {/* Header */}
      <div className="container" style={{ paddingBottom: '96px' }}>
        <motion.div
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-caption text-uppercase text-taupe"
          style={{ marginBottom: '24px' }}
        >
          Disiplinlerimiz
        </motion.div>
        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUp}
          className="text-display"
          style={{ maxWidth: '700px', lineHeight: 1.05 }}
        >
          Ne yapıyoruz,<br />neden yapıyoruz.
        </motion.h1>
      </div>

      {/* Services List */}
      <div style={{ borderTop: '1px solid var(--color-hairline)' }}>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              borderBottom: '1px solid var(--color-hairline)',
              padding: '64px 0'
            }}
          >
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'flex-start' }}>
              {/* Left */}
              <div>
                <div className="text-caption text-taupe" style={{ marginBottom: '16px' }}>{s.num}</div>
                <h2 className="text-heading-lg" style={{ marginBottom: '8px' }}>{s.title}</h2>
                <div className="text-caption text-uppercase text-taupe" style={{ letterSpacing: '0.14em' }}>{s.sub}</div>
              </div>

              {/* Right */}
              <div>
                <p className="text-body text-taupe" style={{ marginBottom: '32px', lineHeight: 1.7 }}>{s.desc}</p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {s.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className="bullet-dot" style={{ flexShrink: 0 }}></span>
                      <span className="text-body-sm" style={{ color: 'var(--color-ivory)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="container"
        style={{ padding: '128px 24px', textAlign: 'center' }}
      >
        <div className="text-caption text-uppercase text-taupe" style={{ marginBottom: '32px' }}>Başlamaya hazır mısınız?</div>
        <h2 className="text-heading-lg" style={{ marginBottom: '48px' }}>
          Markanız için<br />bir adım atalım.
        </h2>
        <a href="mailto:hello@aksmedia.co" className="btn-outline" style={{ padding: '16px 40px', fontSize: '14px' }}>
          Bize Ulaşın
        </a>
      </motion.div>
    </div>
  );
}
