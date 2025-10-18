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
    title: 'Contabilidad operativa legal-first',
    description:
      'Registro, conciliación y seguimiento de honorarios, desembolsos y fondos de clientes bajo normas de estudios jurídicos.',
    features: [
      'Plan de cuentas diseñado para litigios civiles, arbitrajes y notarías.',
      'Conciliaciones automáticas, reportería mensual y dashboard por práctica.',
      'Panel financiero compartido con socios administradores y gerencias.',
    ],
    gradient: 'from-blue-500 via-blue-600 to-indigo-600',
    badge: 'Servicio base',
  },
  {
    icon: ShieldCheck,
    title: 'Auditoría tributaria y defensas SII',
    description:
      'Prevención de reparos, regularización de impuestos y acompañamiento presencial en fiscalizaciones y citaciones.',
    features: [
      'Revisión de respaldos, honorarios y trazabilidad de anticipos.',
      'Planes correctivos y cumplimiento normativo SII y UAF.',
      'Representación técnica ante fiscalizadores y mesas de trabajo.',
    ],
    gradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    badge: 'Blindaje fiscal',
  },
  {
    icon: FileText,
    title: 'Peritajes contables y soporte probatorio',
    description:
      'Informes periciales, cuantificación de daños y asesoría en juicios civiles, laborales y comerciales.',
    features: [
      'Elaboración de informes con estándar judicial y cadena de custodia.',
      'Valoración de perjuicios, flujos y cálculos de interés moratorio.',
      'Asistencia en audiencias y preparación de contraperitajes.',
    ],
    gradient: 'from-purple-500 via-violet-500 to-fuchsia-500',
    badge: 'Litigios',
  },
  {
    icon: Users,
    title: 'Gobernanza para socios y compliance financiero',
    description:
      'Diseñamos políticas de distribución, matrices de aprobación y protocolos UAF para firmas en crecimiento.',
    features: [
      'Modelos de distribución y retenciones estratégicas.',
      'Matrices de poderes, firmas electrónicas y protocolos internos.',
      'Capacitación continua sobre cumplimiento financiero.',
    ],
    gradient: 'from-cyan-500 via-sky-500 to-blue-500',
    badge: 'Escalamiento',
  },
  {
    icon: Briefcase,
    title: 'Onboarding legal para estudios emergentes',
    description:
      'Formalización, elección de régimen tributario y digitalización completa para firmas que inician operaciones.',
    features: [
      'Constitución express y tramitación ante el SII.',
      'Implementación de software contable y CRM legal.',
      'Mentoría al socio administrador durante los primeros meses.',
    ],
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    badge: 'Estudios nuevos',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance financiero y UAF',
    description:
      'Diseño e implementación de matrices de riesgo, manuales de prevención y reportería UAF para notarías y firmas de abogados.',
    features: [
      'Diagnóstico de riesgos por cartera y actividades.',
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-wide text-sm">
              Especialista en firmas legales
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Servicios contables que protegen tu reputación profesional
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Integramos contabilidad, defensa tributaria y compliance para que socios y directores
            tomen decisiones con datos certeros y respaldo documental impecable.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {service.badge && (
                <div className={`absolute -top-4 left-6 z-20 px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${service.gradient} shadow-lg uppercase tracking-wide`}>
                  {service.badge}
                </div>
              )}

              <div className="card card-hover bg-white border border-slate-100 rounded-3xl p-8 h-full relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                <div className="relative z-10 mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-2 transition-all duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="relative z-10 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="#contacto"
                      className="group/btn inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-all duration-300"
                    >
                      <span>Solicitar detalle</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:60px_60px]" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-6 py-3 mb-6">
                <Calculator className="w-5 h-5 text-blue-300" />
                <span className="font-semibold tracking-wide">
                  Diagnóstico gratuito para tu firma
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                ¿Listo para blindar la contabilidad de tu estudio?
              </h3>

              <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                Revisaremos tu situación tributaria, los flujos de honorarios y los riesgos de
                fiscalización. Recibirás un plan accionable con prioridades y estimación de ahorros.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contacto"
                  className="btn btn-primary bg-white text-slate-900 hover:bg-slate-100"
                >
                  Agendar evaluación
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="#contacto"
                  className="btn btn-secondary bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  Solicitar propuesta
                </Link>
              </div>
            </div>

            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500/25 rounded-full blur-3xl" />
            <div className="absolute bottom-8 left-8 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
