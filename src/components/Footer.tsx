'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Mail, MapPin, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { scrollToElement } from '@/lib/utils';

const navigation = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+56 9 1234 5678',
    href: 'tel:+56912345678',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'contacto@contadorpro.cl',
    href: 'mailto:contacto@contadorpro.cl',
  },
  {
    icon: MapPin,
    label: 'Oficina',
    value: 'Av. Providencia 1234, Oficina 501, Santiago',
    href: 'https://maps.google.com/?q=Av.+Providencia+1234,+Santiago',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/56912345678',
    icon: MessageCircle,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const elementId = href.replace('#', '');
      scrollToElement(elementId);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/95 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl" />
        <div className="absolute inset-0 bg-grid-soft opacity-10" />
      </div>

      {/* Botón de scroll to top mejorado */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToElement('hero')}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:from-blue-500 hover:to-purple-500 backdrop-blur-sm border border-white/10"
        aria-label="Volver al inicio"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </motion.button>

      <div className="container relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 sm:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-16">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Leonardo Oliva Martinez</h3>
                    <p className="text-sm text-blue-300">Contador Jurídico</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Asesoría contable y tributaria especializada para estudios jurídicos, notarías y centros de arbitraje. Confidencialidad, estrategia y cumplimiento en cada informe.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 transition-colors duration-300 hover:bg-white/20"
                    >
                      <social.icon className="h-6 w-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-blue-200">Navegación</h4>
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm font-semibold text-slate-300 transition-all duration-200 hover:translate-x-2 hover:text-white"
                    >
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-semibold text-purple-200">Contacto</h4>
              <ul className="space-y-5">
                {contactInfo.map((contact, index) => (
                  <motion.li
                    key={contact.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + index * 0.06 }}
                  >
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 text-sm text-slate-300 transition-colors duration-200 hover:text-white"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                        <contact.icon className="h-5 w-5 text-white" />
                      </span>
                      <span>
                        <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                          {contact.label}
                        </span>
                        <p className="mt-1 text-sm font-semibold text-white">{contact.value}</p>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 py-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-slate-400"
            >
              © {currentYear} Contador Jurídico. Todos los derechos reservados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-slate-400 transition-colors duration-200 hover:text-white">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 transition-colors duration-200 hover:text-white">
                Términos de Servicio
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
