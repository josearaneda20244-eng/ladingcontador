'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/56912345678';
  const message = encodeURIComponent(
    'Hola Leonardo Oliva, quiero agendar un diagnóstico contable para mi estudio jurídico esta semana.'
  );

  return (
    <motion.a
      href={`${whatsappUrl}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-4 right-4 z-50 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-green-600 hover:shadow-xl"
      aria-label="Abrir chat de WhatsApp para agendar diagnóstico contable"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp directo</span>

      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-800 px-3 py-2 text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Escribir por WhatsApp
        <div className="absolute top-1/2 left-full h-0 w-0 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-slate-800" />
      </div>
    </motion.a>
  );
}
