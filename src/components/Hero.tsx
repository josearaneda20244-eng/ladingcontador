'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Scale,
  Shield,
  Sparkles,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const sellingPoints = [
  'Control en línea de honorarios, fondos de clientes y costos por causa bajo normativa chilena.',
  'Paneles con KPIs legales-financieros: liquidez por práctica, utilidades proyectadas y alertas de cobro.',
  'Acompañamiento presencial en auditoría fiscal Chile: citaciones SII, UAF y arbitrajes complejos.',
];

const trustMetrics = [
  {
    icon: Users,
    value: '180+',
    label: 'Estudios jurídicos y notarías asesoradas',
  },
  {
    icon: Shield,
    value: '99.9%',
    label: 'Declaraciones SII aprobadas sin reparos',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Tiempo máximo de respuesta prioritaria',
  },
];

const assurance = [
  { label: 'Normalización contable inicial completada', value: '100%' },
  { label: 'Controles internos y protocolos UAF implementados', value: '98%' },
  { label: 'Dossiers probatorios listos para litigios y peritajes', value: '93%' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });

  const parallaxRange = (target: string): [string, string] =>
    prefersReducedMotion ? ['0%', '0%'] : ['0%', target];

  const backgroundY = useTransform(scrollYProgress, [0, 1], parallaxRange('18%'));
  const blobOneY = useTransform(scrollYProgress, [0, 1], parallaxRange('28%'));
  const blobTwoY = useTransform(scrollYProgress, [0, 1], parallaxRange('22%'));
  const blobThreeY = useTransform(scrollYProgress, [0, 1], parallaxRange('35%'));

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden bg-gradient-hero text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
        <motion.div
          className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/35 blur-3xl"
          style={{ y: blobOneY }}
        />
        <motion.div
          className="absolute top-32 -right-10 h-[24rem] w-[24rem] rounded-full bg-purple-500/30 blur-3xl"
          style={{ y: blobTwoY }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 h-[22rem] w-[22rem] rounded-full bg-emerald-400/25 blur-3xl"
          style={{ y: blobThreeY }}
        />
        <div className="absolute inset-0 bg-grid-soft opacity-20" />
      </motion.div>

      <div className="container relative z-10 px-4 py-24 sm:px-6 sm:py-28 lg:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8 sm:space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-tag border border-white/20 bg-white/15 text-xs font-semibold text-white backdrop-blur-sm shadow-[0_12px_40px_rgba(14,25,45,0.45)]"
            >
              <Sparkles className="h-4 w-4 text-blue-200" />
              <span>Contador auditor jurídico en Chile</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_12px_60px_rgba(15,23,42,0.85)] sm:text-5xl lg:text-6xl">
                Contabilidad estratégica y auditoría jurídica que protege cada caso en Chile
              </h1>
              <p className="text-pretty text-base text-white/90 drop-shadow-[0_10px_35px_rgba(9,12,26,0.65)] sm:text-lg">
                Soy Leonardo Oliva Martínez, contador auditor jurídico con 18 años asesorando estudios jurídicos, notarías y arbitrajes. Integro contabilidad legal-first, auditoría fiscal Chile y soporte pericial para que tus socios decidan con datos, sin sorpresas ante el SII o tribunales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {sellingPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                  className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 pr-5 text-base text-white/90 shadow-[0_18px_45px_rgba(14,22,41,0.4)] sm:text-lg"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/30 ring-2 ring-blue-400/40">
                    <CheckCircle2 className="h-4 w-4 text-blue-100" />
                  </span>
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="space-y-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contacto"
                  className="btn btn-primary btn-glow flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-slate-900 shadow-2xl hover:bg-slate-100 sm:w-auto sm:px-8"
                >
                  Agendar diagnóstico gratuito
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#servicios"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/70 hover:bg-white/10 sm:w-auto"
                >
                  Ver servicios especializados
                </Link>
              </div>

              <div className="flex flex-col gap-3 text-sm text-slate-200/80 sm:flex-row sm:items-center sm:text-base">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border border-white/30 bg-blue-500/80" />
                    <div className="h-8 w-8 rounded-full border border-white/30 bg-purple-500/80" />
                    <div className="h-8 w-8 rounded-full border border-white/30 bg-emerald-500/80" />
                  </div>
                  <span>Confianza de 180+ estudios boutique, full service y notarías en Chile.</span>
                </div>
                <span className="flex items-center gap-2 text-emerald-300">
                  <Shield className="h-4 w-4" />
                  Protocolos de confidencialidad firmados desde el primer contacto.
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <motion.div
              className="absolute -top-12 -left-10 h-24 w-24 rounded-full bg-blue-500/25 blur-2xl"
              style={{ y: blobOneY }}
            />
            <motion.div
              className="absolute -bottom-10 -right-4 h-20 w-20 rounded-full bg-emerald-400/25 blur-2xl"
              style={{ y: blobTwoY }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_30px_70px_rgba(15,23,42,0.45)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5" />
              <div className="relative space-y-8 p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-100/70">
                      Panel estratégico legal-first
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                      Salud financiera del estudio
                    </h2>
                  </div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-emerald-200">
                    <span className="text-xs uppercase tracking-wide">Riesgo fiscal</span>
                    <p className="text-lg font-bold text-white">Bajo</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {trustMetrics.map((metric) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center shadow-lg shadow-white/5"
                    >
                      <metric.icon className="mx-auto mb-3 h-6 w-6 text-blue-200" />
                      <div className="text-2xl font-semibold text-white">{metric.value}</div>
                      <p className="text-xs text-slate-100/80 sm:text-sm">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  {assurance.map((item, index) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-xs text-white/80 sm:text-sm">
                        <span>{item.label}</span>
                        <span className="font-semibold">{item.value}</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.value }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2 + index * 0.15 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/15 bg-slate-900/40 px-5 py-5 sm:px-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/20">
                        <Scale className="h-6 w-6 text-emerald-200" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white sm:text-base">
                          Auditoría fiscal preventiva SII
                        </p>
                        <p className="text-xs text-slate-200/80 sm:text-sm">
                          Informe ejecutivo entregado en 72 horas para citaciones SII y UAF.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-100 sm:text-sm">
                      <MessageCircle className="h-4 w-4" />
                      Canal directo para socios administradores
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
