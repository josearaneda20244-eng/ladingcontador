'use client';

import { motion } from 'framer-motion';
import {
  Calculator,
  ShieldCheck,
  FileText,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Calculator,
    title: 'Contabilidad legal-first y control de honorarios',
    description:
      'Implementamos contabilidad para estudios jurídicos con seguimiento de honorarios, fondos de clientes y costos litigiosos.',
    features: [
      'Plan de cuentas diseñado para litigios civiles, arbitrajes y notarías con trazabilidad total.',
      'Conciliaciones automáticas, reportería mensual y dashboards por área de práctica.',
      'Accesos seguros para socios administradores y gerencias financieras.',
    ],
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    badge: 'Base operativa',
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría fiscal Chile y defensas SII',
    description:
      'Prevengo reparos, regularizo impuestos y represento a tu firma en fiscalizaciones SII o UAF con presencia en terreno.',
    features: [
      'Revisión de respaldos, boletas de honorarios y anticipos distribuibles.',
      'Planes correctivos y cumplimiento integral SII + UAF.',
      'Representación técnica en citaciones, fiscalizaciones y mesas de trabajo.',
    ],
    gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    badge: 'Blindaje fiscal',
  },
  {
    icon: FileText,
    title: 'Peritajes contables y soporte probatorio',
    description:
      'Elaboro informes periciales, cuantificación de daños y acompañamiento experto en juicios civiles, laborales y comerciales.',
    features: [
      'Informes con estándar judicial, cadena de custodia y anexos auditables.',
      'Valoración de perjuicios, flujos descontados e intereses moratorios.',
      'Apoyo en audiencias, contraperitajes y respuestas a oficios.',
    ],
    gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
    badge: 'Litigios',
  },
  {
    icon: Users,
    title: 'Gobernanza societaria y compliance financiero',
    description:
      'Diseñamos políticas de distribución, matrices de aprobación y controles UAF para firmas en crecimiento.',
    features: [
      'Modelos de distribución y retenciones estratégicas para socios.',
      'Matrices de poderes, firmas electrónicas y protocolos internos.',
      'Capacitación continua en compliance financiero y prevención de lavado.',
    ],
    gradient: 'from-cyan-500 via-sky-500 to-blue-500',
    badge: 'Escalamiento',
  },
  {
    icon: Briefcase,
    title: 'Onboarding legal para estudios emergentes',
    description:
      'Formalizo tu firma, defino régimen tributario y digitalizo procesos contables desde el primer día.',
    features: [
      'Constitución express y tramitación ante el SII y municipal.',
      'Implementación de software contable integrado con CRM legal.',
      'Mentoría al socio administrador durante los primeros 90 días.',
    ],
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    badge: 'Estudios nuevos',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance financiero y reportería UAF',
    description:
      'Diseño e implemento matrices de riesgo, manuales y reportes UAF para notarías y firmas de abogados.',
    features: [
      'Diagnóstico de riesgos por cartera y actividades reguladas.',
      'Protocolos de monitoreo y reporte de operaciones sospechosas.',
      'Capacitación anual y actualización normativa permanente.',
    ],
    gradient: 'from-slate-500 via-slate-600 to-slate-700',
    badge: 'Cumplimiento',
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="section bg-gradient-to-br from-slate-50 via-white to-blue-50/40"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 text-blue-700"
          >
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Especialista en firmas jurídicas de Chile
            </span>
          </motion.div>

          <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Servicios contables y tributarios que blindan tu reputación legal
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            Implemento contabilidad para estudios jurídicos, notarías y arbitrajes con foco en cumplimiento,
            rentabilidad y defensa tributaria. Cada servicio se integra a tus procesos para reducir contingencias
            y acelerar decisiones.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              {service.badge && (
                <div className="mb-4 inline-flex rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {service.badge}
                </div>
              )}

              <div className="card card-hover relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 sm:p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-all duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10 mb-6">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transition-all duration-300 group-hover:rotate-2 group-hover:scale-110`}
                  >
                    <service.icon className="h-10 w-10" />
                  </div>
                </div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="mb-3 text-2xl font-semibold text-slate-900 transition-colors group-hover:text-slate-800">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="text-base leading-relaxed text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="#contacto"
                      className="group/btn inline-flex min-h-[44px] items-center gap-2 font-semibold text-slate-600 transition-all duration-300 hover:text-slate-900"
                    >
                      <span>Solicitar detalle</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-10 text-white sm:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:60px_60px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <Calculator className="h-5 w-5 text-blue-300" />
                <span className="font-semibold tracking-wide">Diagnóstico contable gratuito</span>
              </div>

              <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                ¿Listo para blindar la contabilidad jurídica de tu estudio?
              </h3>

              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-xl">
                Revisaremos tu contabilidad, flujos de honorarios, cumplimiento SII/UAF y riesgos de fiscalización.
                Recibirás un plan accionable con prioridades, plazos y estimación de ahorros.
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="#contacto"
                  className="btn btn-primary min-h-[52px] w-full bg-white text-slate-900 hover:bg-slate-100 sm:w-auto"
                >
                  Agendar diagnóstico 24h
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="#contacto"
                  className="btn btn-secondary min-h-[52px] w-full border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                >
                  Solicitar propuesta formal
                </Link>
              </div>
            </div>

            <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute bottom-8 left-8 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
