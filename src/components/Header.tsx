'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, ShieldCheck, X } from 'lucide-react';
import { cn, fadeInDown, scrollToElement } from '@/lib/utils';

const navigation = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    const elementId = href.replace('#', '');
    scrollToElement(elementId);
    setIsMobileMenuOpen(false);
  };

  const containerClasses = isScrolled
    ? 'bg-white/90 text-slate-900 border-slate-200 shadow-lg shadow-blue-500/5'
    : 'bg-white/10 text-white border-white/20 shadow-lg/30';

  return (
    <motion.header
      {...fadeInDown}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6">
        <motion.div
          className={cn(
            'flex items-center justify-between gap-4 rounded-full border backdrop-blur-2xl px-6 py-3 transition-all duration-300',
            containerClasses,
          )}
        >
          <button
            onClick={() => handleNavClick('#hero')}
            className="flex items-center gap-2 text-left"
            aria-label="Volver al inicio"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/80 to-purple-500/70 text-white shadow-lg shadow-blue-500/30">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.24em]">
                Leonardo Oliva Martinez
              </span>
              <span className="text-sm font-bold">Contador Jurídico</span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'group relative inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.22em] transition-colors duration-200',
                  isScrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-100/80 hover:text-white',
                )}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 transform-gpu bg-current transition-transform duration-300 ease-out',
                    'group-hover:scale-x-100',
                    isScrolled ? 'opacity-60' : 'opacity-80',
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <button
              onClick={() => handleNavClick('#contacto')}
              className={cn(
                'rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-200',
                isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
              )}
            >
              Agenda una reunión
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={cn(
                'inline-flex items-center justify-center rounded-full border px-3 py-2 transition-colors duration-200',
                isScrolled
                  ? 'border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900'
                  : 'border-white/40 text-white hover:border-white/70',
              )}
              aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 px-4 pb-6 lg:hidden"
          >
            <div className="mx-auto max-w-6xl rounded-3xl border border-white/20 bg-white/95 p-6 shadow-xl shadow-slate-900/10">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => handleNavClick('#contacto')}
                  className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-slate-800"
                >
                  Agenda una reunión
                </button>
                <button
                  onClick={() => handleNavClick('#servicios')}
                  className="w-full rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900"
                >
                  Ver servicios
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
