import React, { useEffect, useState } from 'react';
import { ArrowRight, PenTool, TrendingUp, Target } from 'lucide-react';
import ShaderBackground from './ShaderBackground';
import './index.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <ShaderBackground />
      
      {/* Navbar */}
      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
        <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span>INSTAGRAM</span>
        </a>
      </nav>

      {/* Hero Section */}
      <header className={`section animate-fade-in ${isVisible ? 'visible' : ''}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', paddingTop: '8rem', paddingBottom: '8rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1rem', letterSpacing: '-1px' }}>
          Creative Agency
        </h1>
        <p className="delay-1 animate-fade-in" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--color-text-muted)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '3rem' }}>
          İçerik &bull; Strateji &bull; Büyüme
        </p>
        <div className="delay-2 animate-fade-in" style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#hizmetler" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            backgroundColor: 'var(--color-text)',
            color: 'var(--color-bg)',
            fontWeight: 600,
            borderRadius: '4px',
            transition: 'all 0.3s ease'
          }}>
            Neler Yapıyoruz?
            <ArrowRight size={18} />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="hizmetler" className="section delay-3 animate-fade-in" style={{ backgroundColor: 'var(--color-bg-light)', borderRadius: '24px', margin: '2rem', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Markanızı Büyüten Çözümler</h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>Modern dünyada dikkat çekmek için gereken tüm dijital silahlar.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Service 1 */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <PenTool size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>İçerik Üretimi</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Markanızın ruhunu yansıtan, dikkat çekici ve estetik görsel/yazılı içerikler tasarlıyoruz.</p>
          </div>

          {/* Service 2 */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Strateji</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Hedef kitlenize ulaşmak için veri odaklı, ölçülebilir ve uzun vadeli sosyal medya stratejileri geliştiriyoruz.</p>
          </div>

          {/* Service 3 */}
          <div style={{ padding: '2rem', backgroundColor: 'var(--color-bg)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', transition: 'transform 0.3s ease' }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: 'rgba(216, 85, 75, 0.1)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <TrendingUp size={24} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Büyüme</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Etkileşimi satışa dönüştüren performans pazarlama ve organik büyüme taktikleriyle markanızı büyütüyoruz.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: 'auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Hikayenizi Birlikte Yazalım</h2>
        <a href="mailto:hello@aksmedia.co" style={{
          display: 'inline-flex',
          fontSize: '1.25rem',
          color: 'var(--color-accent)',
          borderBottom: '1px solid var(--color-accent)',
          paddingBottom: '4px',
          marginBottom: '3rem'
        }}>
          Bizimle İletişime Geçin
        </a>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          <span>&copy; {new Date().getFullYear()} AKS Media. All rights reserved.</span>
          <a href="https://www.instagram.com/aksmedia.co" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span>@aksmedia.co</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
