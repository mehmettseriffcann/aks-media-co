import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import HizmetlerPage from './pages/HizmetlerPage';
import ProjelerPage from './pages/ProjelerPage';
import './index.css';

function Nav() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        padding: '22px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.92) 0%, transparent 100%)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-display-serif)',
          fontSize: '18px',
          color: 'var(--color-ivory)',
          letterSpacing: '0.05em'
        }}>AKS</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link
            to="/hizmetler"
            className="btn-ghost"
            style={{ color: location.pathname === '/hizmetler' ? 'var(--color-ivory)' : 'var(--color-warm-taupe)' }}
          >
            Hizmetler
          </Link>
          <Link
            to="/projeler"
            className="btn-ghost"
            style={{ color: location.pathname === '/projeler' ? 'var(--color-ivory)' : 'var(--color-warm-taupe)' }}
          >
            Projeler
          </Link>
        </div>
        <a href="mailto:hello@aksmedia.co" className="btn-outline">İletişim</a>
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
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Routes location={location}>
          <Route path="/"           element={<HomePage />} />
          <Route path="/hizmetler" element={<HizmetlerPage />} />
          <Route path="/projeler"  element={<ProjelerPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Pure obsidian background — no shader on this layer */}
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--color-obsidian)' }}>
        <Nav />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
