'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter, Youtube } from 'lucide-react';

const socialLinks = [
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/',
  },
  {
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/',
  },
  {
    label: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/',
  },
  {
    label: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/',
  },
  {
    label: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/',
  },
  {
    label: 'WhatsApp directo',
    icon: MessageCircle,
    href: 'https://wa.me/56912345678',
  },
  {
    label: 'Correo directo',
    icon: Mail,
    href: 'mailto:contacto@contadorpro.cl',
  },
];

export default function SocialRail() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.9, duration: 0.4 }}
      className="fixed bottom-1/2 right-6 z-40 hidden translate-y-1/2 flex-col items-end gap-2 lg:flex"
    >
      <div className="flex flex-col gap-2 rounded-full border border-white/40 bg-white/90 p-2 shadow-xl backdrop-blur-xl">
        {socialLinks.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-x-1"
            aria-label={label}
          >
            <span className="flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-white text-slate-500 transition-all duration-300 group-hover:border-blue-400 group-hover:text-blue-500">
              <Icon className="h-4 w-4" />
            </span>
            <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </motion.aside>
  );
}

