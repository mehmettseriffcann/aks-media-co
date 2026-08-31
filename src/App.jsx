import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ShaderBackground from './ShaderBackground';
import HomePage from './pages/HomePage';
import HizmetlerPage from './pages/HizmetlerPage';
import ProjelerPage from './pages/ProjelerPage';
import './index.css';

function Nav() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, transparent 100%)',
        backdropFilter: 'blur(6px)'
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src="/logo.png"
          alt="AKS"
          style={{ width: '36px', height: '36px', objectFit: 'contain', mixBlendMode: 'screen' }}
        />
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link to="/hizmetler" className="btn-ghost" style={{ color: location.pathname === '/hizmetler' ? 'var(--color-ivory)' : 'var(--color-warm-taupe)' }}>
            Hizmetler
          </Link>
          <Link to="/projeler" className="btn-ghost" style={{ color: location.pathname === '/projeler' ? 'var(--color-ivory)' : 'var(--color-warm-taupe)' }}>
            Projeler
          </Link>
        </div>
        <a href="mailto:hello@aksmedia.co" className="btn-outline">
          İletişim
        </a>
      </div>
    </motion.nav>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hizmetler" element={<HizmetlerPage />} />
          <Route path="/projeler" element={<ProjelerPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <ShaderBackground />
        <Nav />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
