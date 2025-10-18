'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle, Minus, Plus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'servicios' | 'honorarios' | 'fiscalizaciones' | 'procesos';
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: 'servicios',
    question: '¿Trabajan únicamente con abogados o también con notarías y arbitrajes?',
    answer:
      'Nuestro servicio está diseñado para firmas jurídicas en sentido amplio: abogados independientes, estudios boutique, notarías, conservadores y centros de arbitraje. Adaptamos plan de cuentas, controles y reportería según la obligación regulatoria de cada entidad.',
  },
  {
    id: 2,
    category: 'fiscalizaciones',
    question: '¿Cómo me acompañan en un proceso de fiscalización del SII?',
    answer:
      'Preparamos carpetas con respaldo contable y tributario, simulamos preguntas del fiscalizador y asistimos presencialmente a la citación. Además, diseñamos planes correctivos para que cierres sin multas ni observaciones.',
  },
  {
    id: 3,
    category: 'honorarios',
    question: '¿Qué control realizan sobre honorarios y desembolsos?',
    answer:
      'Configuramos libros auxiliares por causa y cliente, control de anticipos, registro de gastos recuperables y proyecciones de distribución a socios. Todo queda disponible en reportes mensuales y paneles compartidos.',
  },
  {
    id: 4,
    category: 'procesos',
    question: '¿Pueden elaborar informes periciales y acompañar en juicio?',
    answer:
      'Sí. Elaboramos informes contables con estándar judicial, cuantificamos daños y participamos como peritos o asesores técnicos en audiencias. También apoyamos la preparación de contraperitajes cuando se requiere.',
  },
  {
    id: 5,
    category: 'servicios',
    question: '¿Implementan software contable o trabajan con el sistema que ya uso?',
    answer:
      'Podemos trabajar con tu plataforma actual o desplegar una solución cloud integrada con tu CRM legal. Configuramos conciliaciones automáticas, flujos de aprobación y accesos seguros por socio o área.',
  },
  {
    id: 6,
    category: 'fiscalizaciones',
    question: '¿Cómo manejan los reportes a la Unidad de Análisis Financiero (UAF)?',
    answer:
      'Evaluamos el riesgo de tu cartera, definimos políticas internas, levantamos alertas y generamos los reportes mensuales y ROS cuando corresponde, cumpliendo la normativa vigente para notarías y estudios jurídicos.',
  },
  {
    id: 7,
    category: 'honorarios',
    question: '¿Pueden ayudar a definir la distribución de utilidades entre socios?',
    answer:
      'Sí. Modelamos escenarios de reparto, retenciones para inversión o contingencias y establecemos reglas automáticas según metas de facturación, áreas de práctica o responsabilidades administrativas.',
  },
  {
    id: 8,
    category: 'procesos',
    question: '¿Cuál es el tiempo de implementación inicial?',
    answer:
      'Un estudio boutique suele quedar operativo en 15 días hábiles. Firmas con más de 20 colaboradores requieren entre 4 y 6 semanas, considerando saneamiento contable, digitalización de archivos y capacitación al equipo jurídico.',
  },
];

const categories = {
  servicios: 'Servicios',
  honorarios: 'Honorarios',
  fiscalizaciones: 'Fiscalizaciones',
  procesos: 'Procesos',
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([faqData[0].id]);
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('servicios');

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredFAQs =
    activeCategory === 'servicios'
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute inset-0 bg-grid-soft opacity-10" />
      <div className="absolute top-24 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-12 right-12 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div
            {...fadeInUp}
            className="section-tag mx-auto bg-slate-900/90 text-white"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Preguntas frecuentes</span>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Todo lo que necesitas saber antes de agendar tu diagnóstico
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-pretty text-lg text-slate-600 sm:text-xl"
          >
            Reunimos las dudas más comunes de estudios jurídicos y notarías que buscan un
            acompañamiento contable confiable y alineado a su realidad profesional.
          </motion.p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                activeCategory === key
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {categories[key]}
            </button>
          ))}
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="space-y-4"
        >
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.id}
              {...fadeInUp}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors duration-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-expanded={openItems.includes(item.id)}
              >
                <span className="pr-6 text-left text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/5 text-blue-600">
                  {openItems.includes(item.id) ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-slate-200/70 bg-slate-50/70"
                  >
                    <div className="px-6 py-5 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mt-16 rounded-[28px] border border-white/15 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-10 text-center text-white shadow-[0_40px_90px_rgba(15,23,42,0.45)]"
        >
          <h3 className="text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl">
            ¿Necesitas resolver un caso puntual o preparar una auditoría?
          </h3>
          <p className="mt-4 text-sm text-blue-100/90 sm:text-base">
            Escríbeme y diseñaremos un plan a la medida de tu estudio: desde un cierre contable
            urgente hasta un acompañamiento completo en fiscalización.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100"
            >
              Agendar llamada
            </button>
            <a
              href="https://wa.me/56912345678?text=Hola%20Leonardo%20Oliva,%20necesito%20apoyo%20contable%20para%20mi%20estudio%20jur%C3%ADdico"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              WhatsApp directo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

