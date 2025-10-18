'use client';

import { motion } from 'framer-motion';
import { Clock, FileText, ShieldCheck, Users } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

const metrics = [
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Declaraciones sin observaciones',
    description:
      'Historial de cumplimiento tributario con respaldo documental listo para fiscalizaciones del SII y la UAF.',
    color: 'text-emerald-500',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Tiempo de respuesta prioritaria',
    description:
      'Disponibilidad inmediata para contingencias en juicios, arbitrajes o auditorías internas.',
    color: 'text-blue-500',
  },
  {
    icon: Users,
    value: '180+',
    label: 'Estudios, notarías y arbitrajes activos',
    description:
      'Firmas con control mensual de honorarios, fondos de clientes y KPIs para directorios.',
    color: 'text-indigo-500',
  },
  {
    icon: FileText,
    value: '320',
    label: 'Informes periciales emitidos',
    description:
      'Documentos aceptados por tribunales civiles, laborales y arbitrales sin reparos técnicos.',
    color: 'text-purple-500',
  },
];

const commitments = [
  {
    label: 'Disponibilidad inmediata para nuevas firmas',
    tone: 'bg-emerald-500',
  },
  {
    label: 'Respuesta garantizada en menos de 24 horas',
    tone: 'bg-blue-500',
  },
  {
    label: 'Cumplimiento 100% SII y UAF',
    tone: 'bg-slate-900',
  },
];

export default function Metrics() {
  return (
    <section
      id="metricas"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-emerald-50/70" />
      <div className="absolute inset-0 bg-grid-soft opacity-10" />
      <div className="absolute top-0 left-1/4 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          {...staggerContainer}
          className="text-center"
        >
          <motion.h2
            {...fadeInUp}
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Indicadores que sostienen cada decisión legal
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-pretty text-lg text-slate-600 sm:text-xl"
          >
            Los números reflejan el impacto de una contabilidad estratégica: directores informados,
            menos contingencias y expedientes financieros listos para tribunales.
          </motion.p>
        </motion.div>

        <motion.div
          {...staggerContainer}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true, margin: '-80px' }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-slate-50/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900/90 text-white shadow-lg shadow-slate-900/30">
                  <metric.icon className="h-7 w-7" />
                </div>
                <div className={`text-4xl font-bold ${metric.color}`}>{metric.value}</div>
                <h3 className="text-lg font-semibold text-slate-900">{metric.label}</h3>
                <p className="text-sm text-slate-600">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeInUp}
          className="mt-16"
        >
          <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-slate-200/70 bg-white px-8 py-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:flex-row sm:gap-8">
            {commitments.map((commitment) => (
              <div
                key={commitment.label}
                className="flex items-center gap-3 text-sm font-semibold text-slate-700"
              >
                <span className={`h-3 w-3 rounded-full ${commitment.tone} animate-pulse`} />
                <span>{commitment.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

