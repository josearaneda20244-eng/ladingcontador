'use client';

import { motion } from 'framer-motion';
import { ArrowDownToLine, BarChart3, FileSpreadsheet, ShieldCheck, Users } from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  {
    label: 'Colegio de Contadores Auditores',
    description: 'Miembro activo · Capítulo Estudios Jurídicos',
  },
  {
    label: 'Registro Oficial de Peritos Judiciales',
    description: 'Perito contable acreditado',
  },
  {
    label: 'Unidad de Análisis Financiero (UAF)',
    description: 'Protocolos y reportes vigentes',
  },
];

const caseStudies = [
  {
    client: 'Estudio Boutique Litigios Comerciales',
    result: '+28% rentabilidad por socio',
    summary:
      'Implementamos control de honorarios por causa, conciliaciones automáticas y tablero de cobranza. La firma redujo en 35% los tiempos de facturación y cerró una fiscalización SII sin reparos.',
    metrics: [
      { value: '35%', label: 'Reducción de días cartera' },
      { value: '0', label: 'Multas tras fiscalización' },
    ],
  },
  {
    client: 'Notaría & Conservador Región Metropolitana',
    result: 'Cumplimiento UAF certificado',
    summary:
      'Diseño de matrices de riesgo, manual de prevención y reportería mensual automatizada. El proceso permitió superar auditorías externas y mejorar el control de fondos de terceros.',
    metrics: [
      { value: '4 semanas', label: 'Implementación total' },
      { value: '100%', label: 'Reportes entregados a tiempo' },
    ],
  },
  {
    client: 'Arbitraje Internacional · Área Infraestructura',
    result: 'Informe pericial clave',
    summary:
      'Se elaboró peritaje contable con cadena de custodia, proyecciones de daños y soporte presencial durante audiencias, logrando validar el 92% de los montos reclamados.',
    metrics: [
      { value: '92%', label: 'Monto validado' },
      { value: '72 h', label: 'Tiempo de respuesta ante oficios' },
    ],
  },
];

const resources = [
  'Checklist para auditoría legal sin reparos',
  'Modelo de tablero de honorarios por socio',
  'Plantilla de reportería UAF mensual',
];

export default function Authority() {
  return (
    <section
      id="autoridad"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/90" />
      <div className="absolute inset-0 bg-grid-soft opacity-20" />
      <div className="absolute top-16 left-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-10 right-24 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 text-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-160px' }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur-sm shadow-[0_12px_35px_rgba(15,25,55,0.45)]">
              <ShieldCheck className="h-4 w-4 text-blue-200" />
              Autoridad profesional
            </span>
            <h2 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_12px_55px_rgba(10,17,35,0.7)] sm:text-4xl lg:text-[2.65rem]">
              Evidencias y metodología que respaldan cada informe contable
            </h2>
            <p className="text-sm text-white/85 drop-shadow-[0_10px_30px_rgba(8,12,26,0.6)] sm:text-base">
              La experiencia con firmas legal-first se traduce en resultados cuantificables, planes
              de cumplimiento auditables y documentación lista para directorios, tribunales o
              fiscalizadores.
            </p>

            <div className="space-y-3 rounded-3xl border border-white/15 bg-white/12 p-6 shadow-[0_20px_50px_rgba(10,17,35,0.45)] backdrop-blur-lg">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-start gap-3 text-sm text-white/85"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/30">
                    <ShieldCheck className="h-4 w-4 text-blue-100" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{badge.label}</p>
                    <p className="text-xs text-white/70">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-160px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-sm overflow-hidden rounded-[28px] border border-white/15 bg-white/12 p-6 backdrop-blur-2xl shadow-[0_25px_70px_rgba(9,17,35,0.45)]"
          >
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="h-6 w-6 text-emerald-200" />
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-100">
                Recurso descargable
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-white drop-shadow-[0_12px_45px_rgba(10,20,40,0.6)]">
              Kit de auditoría contable para estudios jurídicos
            </h3>
            <p className="mt-3 text-sm text-white/80">
              Un set de herramientas listas para preparar fiscalizaciones, ordenar honorarios y
              alinear controles internos sin improvisar.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              {resources.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contacto"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100"
            >
              Solicitar kit completo
              <ArrowDownToLine className="h-4 w-4" />
            </Link>
            <p className="mt-3 text-[0.7rem] text-white/70">
              Lo recibirás en menos de 24 horas junto a un diagnóstico personalizado para tu firma.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-140px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-[26px] border border-white/15 bg-white/12 p-6 shadow-[0_30px_80px_rgba(8,16,32,0.45)] backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/85">
                    {study.client}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/25">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white drop-shadow-[0_12px_45px_rgba(10,20,40,0.55)]">
                  {study.result}
                </h3>
                <p className="mt-3 text-sm text-white/80">{study.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex min-w-[120px] flex-1 flex-col gap-1 rounded-2xl border border-white/15 bg-white/15 p-3 text-center text-white/80"
                  >
                    <span className="text-lg font-semibold text-white">{metric.value}</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-white/70">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-140px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white/85 shadow-[0_25px_70px_rgba(10,17,35,0.5)] backdrop-blur-xl sm:flex-row"
        >
          <div className="flex items-center gap-3 text-sm">
            <BarChart3 className="h-5 w-5 text-blue-200" />
            <span>
              Deja tu correo en el formulario y recibe una demostración del tablero KPI legal con
              datos ficticios listos para explorar.
            </span>
          </div>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-white/15"
          >
            Ver demo guiada
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
