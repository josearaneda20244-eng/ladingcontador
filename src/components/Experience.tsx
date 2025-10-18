'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

const highlights = [
  {
    icon: Users,
    value: '180+',
    label: 'Firmas legales acompañadas',
    description: 'Boutiques de litigios, notarías y arbitrajes con control financiero continuo.',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    icon: Clock,
    value: '18',
    label: 'Años en tributación legal',
    description: 'Experiencia en estudios nacionales y regionales con alta exigencia regulatoria.',
    gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Declaraciones sin reparos',
    description: 'Blindaje tributario y carpetas probatorias listas para el SII y la UAF.',
    gradient: 'from-emerald-500 via-emerald-600 to-teal-500',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'Procesos de auditoría exitosos',
    description: 'Planes correctivos implementados y monitoreo continuo para directorios.',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
  },
];

const differentiators = [
  {
    title: 'Metodología legal-first',
    description:
      'Diseño la contabilidad desde la lógica de una firma de abogados: honorarios por causa, retenciones a socios y gastos asociados a litigios.',
  },
  {
    title: 'Acompañamiento en fiscalizaciones',
    description:
      'Preparación de carpetas, simulación de preguntas y defensa técnica frente a SII y Unidad de Análisis Financiero.',
  },
  {
    title: 'Data accionable para socios',
    description:
      'Paneles de rentabilidad por práctica, proyecciones de flujos y escenarios de distribución para directorios.',
  },
];

const milestones = [
  {
    year: '2007',
    title: 'Primer estudio boutique',
    description:
      'Ingreso como contador jefe en una firma especializada en litigios civiles y comerciales, implementando controles de honorarios por causa.',
    outcome: 'Estandaricé cierres mensuales con indicadores para socios.',
  },
  {
    year: '2012',
    title: 'Equipo de auditoría legal',
    description:
      'Creación de un equipo dedicado a revisar honorarios, fondos de clientes y cumplimiento tributario para estudios full service.',
    outcome: 'Metodología replicable aplicada en 20 firmas en menos de dos años.',
  },
  {
    year: '2017',
    title: 'Perito contable registrado',
    description:
      'Registro oficial como perito judicial, participando en arbitrajes y juicios laborales de alta complejidad.',
    outcome: '92% de validación promedio de informes ante tribunales.',
  },
  {
    year: '2024',
    title: 'Referente en contabilidad jurídica',
    description:
      'Más de 180 estudios asesorados, alianzas con notarías y consultorías para directorios regionales.',
    outcome: 'Paneles financieros legal-first adoptados en 10 regiones.',
  },
];

const credentials = [
  {
    title: 'Contador Auditor',
    subtitle: 'Universidad de Chile',
    icon: ShieldCheck,
  },
  {
    title: 'Diplomado en Tributación',
    subtitle: 'Pontificia Universidad Católica de Chile',
    icon: Target,
  },
  {
    title: 'Perito Contable Judicial',
    subtitle: 'Registro Oficial de Peritos',
    icon: Zap,
  },
  {
    title: 'Miembro Colegio de Contadores',
    subtitle: 'Capítulo Estudios Jurídicos',
    icon: Award,
  },
];

export default function Experience() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <section
      id="experiencia"
      className="section relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-blue-50/70" />
      <div className="absolute inset-0 bg-grid-soft opacity-10" />
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-slate-900/8 via-transparent to-transparent" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-60 w-60 rounded-full bg-emerald-400/18 blur-3xl" />

      <div className="container relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-160px' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-tag mx-auto bg-slate-900/90 text-white">
            <Briefcase className="h-4 w-4" />
            <span>Trayectoria especializada</span>
          </div>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            18 años resguardando la reputación financiera de firmas legales
          </h2>
          <p className="mt-4 text-pretty text-lg text-slate-600 sm:text-xl">
            Implemento sistemas contables, procesos tributarios y soporte probatorio que sostienen
            litigios exigentes y directorios orientados a resultados.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-120px' }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 text-left shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${highlight.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-15`}
              />
              <div className="relative z-10 space-y-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/30">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-slate-900">{highlight.value}</span>
                  <h3 className="mt-1 text-base font-semibold text-slate-800">{highlight.label}</h3>
                </div>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-120px' }}
            className="rounded-3xl border border-slate-200/70 bg-white p-10 shadow-[0_35px_80px_rgba(15,23,42,0.1)]"
          >
            <div className="section-tag bg-slate-900/90 text-white">
              <span>Diferenciales</span>
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-slate-900">
              Ventajas que elevan la gestión financiera del estudio
            </h3>
            <p className="mt-4 text-base text-slate-600">
              Trabajo junto a socios y gerencias para convertir la información contable en decisiones tácticas.
            </p>

            <div className="mt-10 space-y-6">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 transition-colors duration-300 hover:border-slate-300 hover:bg-white"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-700">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-120px' }}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-900 via-slate-900/95 to-blue-900/90 p-10 text-white shadow-[0_45px_85px_rgba(15,23,42,0.35)]"
          >
            <div>
              <h3 className="text-3xl font-semibold text-white">
                Mesa estratégica permanente
              </h3>
              <p className="mt-3 text-sm text-slate-100/80">
                Reuniones mensuales con socios, proyecciones trimestrales y soporte directo ante contingencias.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-100/80">
                  Lo que revisamos
                </p>
                <p className="mt-2 text-sm text-slate-100">
                  KPIs de rentabilidad, riesgo tributario, cartera de clientes y liquidez por práctica.
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-slate-900/50 p-5 text-sm text-slate-200">
                <p className="font-semibold text-white">Acceso prioritario 24/7</p>
                <p className="mt-2 text-slate-200">
                  Canal directo para juicios, fiscalizaciones o arbitrajes que requieren respuesta inmediata.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-140px' }}
          className="rounded-3xl border border-slate-200/70 bg-white p-10 shadow-[0_35px_80px_rgba(15,23,42,0.1)]"
        >
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-slate-900">
              Evolución junto a firmas legales
            </h3>
            <p className="mt-3 text-base text-slate-600">
              Explora los hitos que han fortalecido la asesoría contable para profesionales del derecho.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
            <div className="relative">
              <div className="absolute left-[13px] top-4 bottom-4 w-[2px] rounded bg-slate-200" />
              <ul className="space-y-5">
                {milestones.map((milestone, index) => {
                  const isActive = index === activeMilestone;
                  return (
                    <li key={milestone.year}>
                      <button
                        onClick={() => setActiveMilestone(index)}
                        className="group flex w-full items-center gap-3 text-left"
                      >
                        <span
                          className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isActive
                              ? 'border-blue-600 bg-blue-600 text-white'
                              : 'border-slate-300 bg-white text-slate-400 group-hover:border-blue-400 group-hover:text-blue-500'
                          }`}
                        >
                          <span className="text-[0.6rem] font-semibold">{index + 1}</span>
                        </span>
                        <div>
                          <p
                            className={`text-xs font-semibold uppercase tracking-[0.3em] ${
                              isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'
                            }`}
                          >
                            {milestone.year}
                          </p>
                          <p
                            className={`text-sm font-semibold ${
                              isActive ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-800'
                            }`}
                          >
                            {milestone.title}
                          </p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={milestones[activeMilestone].year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    {milestones[activeMilestone].year}
                  </span>
                  <h4 className="text-2xl font-semibold text-slate-900">
                    {milestones[activeMilestone].title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {milestones[activeMilestone].description}
                  </p>
                  <div className="rounded-2xl border border-blue-200/70 bg-blue-50 px-4 py-3 text-sm text-blue-800 shadow-sm">
                    <span className="font-semibold text-blue-900">Resultado: </span>
                    {milestones[activeMilestone].outcome}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-140px' }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-900 p-12 text-white shadow-[0_45px_90px_rgba(15,23,42,0.4)]"
        >
          <div className="absolute inset-0 bg-grid-soft opacity-10" />
          <div className="relative z-10 mb-10 text-center">
            <div className="section-tag mx-auto bg-white/10 text-white">
              <span>Respaldo profesional</span>
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
              Certificaciones y membresías que avalan cada informe
            </h3>
            <p className="mt-3 text-base text-slate-100/75">
              Me mantengo actualizado en normativa tributaria, financiera y de peritaje para sostener casos de alta complejidad.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => {
              return (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  className="space-y-4 rounded-2xl border border-white/15 bg-white/10 p-6 text-center shadow-lg shadow-white/10 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white">
                    <credential.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{credential.title}</h4>
                    <p className="text-xs text-slate-100/80">{credential.subtitle}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

