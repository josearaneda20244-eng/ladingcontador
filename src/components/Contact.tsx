'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building,
  CalendarClock,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
  X,
} from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  firm: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  firm?: string;
  serviceType?: string;
  message?: string;
}

const steps = ['Datos de contacto', 'Detalle de la asesoría'];

const serviceOptions = [
  { value: 'contabilidad', label: 'Implementar contabilidad legal-first' },
  { value: 'auditoria', label: 'Auditoría / fiscalización SII o UAF' },
  { value: 'peritaje', label: 'Informe pericial o soporte en juicio' },
  { value: 'gobernanza', label: 'Gobernanza para socios y compliance' },
  { value: 'otro', label: 'Otro requerimiento' },
];

const contactChannels = [
  {
    icon: Phone,
    label: 'Teléfono directo',
    value: '+56 9 1234 5678',
    href: 'tel:+56912345678',
  },
  {
    icon: Mail,
    label: 'Correo electrónico',
    value: 'contacto@contadorpro.cl',
    href: 'mailto:contacto@contadorpro.cl',
  },
  {
    icon: MapPin,
    label: 'Reuniones presenciales',
    value: 'Av. Providencia 1234, Oficina 501, Santiago',
    href: 'https://maps.google.com/?q=Av.+Providencia+1234,+Santiago',
  },
];

const commitments = [
  'Respuesta prioritaria en menos de 24 horas.',
  'Confidencialidad absoluta y acuerdo de reserva incluido.',
  'Diagnóstico contable gratuito para tu firma.',
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    firm: '',
    serviceType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [step, setStep] = useState(0);
  const [showScheduler, setShowScheduler] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showScheduler ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showScheduler]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateFields = (fields: (keyof FormData)[]) => {
    const newErrors: FormErrors = {};

    fields.forEach((field) => {
      const value = formData[field].trim();

      switch (field) {
        case 'name':
          if (!value) newErrors.name = 'El nombre es obligatorio.';
          else if (value.length < 2) newErrors.name = 'Ingresa al menos 2 caracteres.';
          break;
        case 'email':
          if (!value) newErrors.email = 'El correo electrónico es obligatorio.';
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) newErrors.email = 'Correo inválido.';
          break;
        case 'phone':
          if (value && !/^(\+?56)?[0-9\s\-]{8,15}$/.test(value.replace(/\s/g, ''))) {
            newErrors.phone = 'Formato sugerido: +56 9 1234 5678.';
          }
          break;
        case 'serviceType':
          if (!value) newErrors.serviceType = 'Selecciona el tipo de apoyo que necesitas.';
          break;
        case 'message':
          if (!value) newErrors.message = 'Cuéntame brevemente la situación.';
          else if (value.length < 20) newErrors.message = 'Agrega algunos detalles adicionales (20 caracteres mínimo).';
          break;
        default:
          break;
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const goToNextStep = () => {
    const isValid = validateFields(['name', 'email', 'phone', 'firm']);
    if (isValid) {
      setErrors((prev) => ({ ...prev, name: undefined, email: undefined, phone: undefined, firm: undefined }));
      setStep(1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = validateFields(['serviceType', 'message']);
    if (!isValid) return;

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        firm: '',
        serviceType: '',
        message: '',
      });
      setErrors({});
      setStep(0);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/95 to-slate-950" />
      <div className="absolute inset-0 bg-grid-soft opacity-20" />
      <div className="absolute top-0 left-1/3 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-56 w-56 rounded-full bg-emerald-400/25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-180px' }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <div className="section-tag mx-auto bg-white/10 text-white">
            <ShieldCheck className="h-4 w-4" />
            <span>Coordinemos un diagnóstico</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Conversemos sobre la contabilidad y el blindaje fiscal de tu estudio
          </h2>
          <p className="mt-4 text-pretty text-base text-slate-100/80 sm:text-lg">
            Agenda una reunión virtual o presencial para revisar tu situación actual y recibir un
            plan de acción con prioridades, plazos y estimaciones de ahorro.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-140px' }}
            className="space-y-8 rounded-3xl border border-white/15 bg-white/5 p-8 text-white backdrop-blur-xl"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white">Agenda directa con Leonardo Oliva Martinez</h3>
              <p className="mt-3 text-sm text-slate-100/80">
                Déjame tus datos y coordinaremos un diagnóstico confidencial. También puedes usar
                los canales directos si necesitas una respuesta inmediata.
              </p>
            </div>

            <div className="space-y-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 transition-colors duration-200 hover:bg-white/20"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <channel.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                      {channel.label}
                    </span>
                    <p className="mt-2 text-sm font-semibold text-white">{channel.value}</p>
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white">
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-blue-200" />
                <div>
                  <p className="font-semibold text-white">Disponibilidad prioritaria</p>
                  <p className="mt-2 text-slate-50">
                    Coordinamos reuniones en 24 horas hábiles y contamos con bloque reservado para
                    contingencias de juicios o fiscalizaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white">
              <p className="font-semibold text-white">Compromisos al trabajar juntos</p>
              <ul className="mt-3 space-y-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-300" />
                    <span className="text-slate-50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white">
              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-2 text-white">
                  <CalendarClock className="h-5 w-5" />
                  ¿Prefieres agendar directo en mi calendario?
                </span>
                <button
                  onClick={() => setShowScheduler(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:bg-white/20"
                >
                  Abrir agenda Calendly
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-140px' }}
            className="rounded-3xl border border-white/10 bg-white p-6 shadow-[0_35px_80px_rgba(15,23,42,0.35)] sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">Escríbeme directamente</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Completa los pasos y recibirás un diagnóstico con próximos movimientos sugeridos.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Paso {step + 1} de {steps.length}
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              {steps.map((label, index) => (
                <div
                  key={label}
                  className={`flex-1 rounded-full py-1 text-center text-[11px] font-semibold uppercase tracking-[0.25em] transition-all ${
                    index <= step ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              >
                <CheckCircle className="h-5 w-5" />
                <span>
                  ¡Mensaje enviado! Te contactaré en menos de 24 horas hábiles con los próximos pasos
                  y la propuesta de agenda.
                </span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                <AlertCircle className="h-5 w-5" />
                <span>
                  Hubo un problema al enviar el mensaje. Intenta nuevamente o escríbeme por WhatsApp.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {step === 0 ? (
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-800">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(event) => handleInputChange('name', event.target.value)}
                        className={`w-full rounded-2xl border-2 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 ${
                          errors.name ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                        placeholder="Nombre y apellido"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="name-error"
                        className="mt-2 text-sm font-medium text-red-600"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                        className={`w-full rounded-2xl border-2 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 ${
                          errors.email ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                        placeholder="correo@estudio.cl"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </div>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="email-error"
                        className="mt-2 text-sm font-medium text-red-600"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-800">
                      Teléfono (opcional)
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) => handleInputChange('phone', event.target.value)}
                        className={`w-full rounded-2xl border-2 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 ${
                          errors.phone ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                        placeholder="+56 9 1234 5678"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                    </div>
                    {errors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="phone-error"
                        className="mt-2 text-sm font-medium text-red-600"
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="firm" className="mb-2 block text-sm font-semibold text-slate-800">
                      Estudio o institución
                    </label>
                    <div className="relative">
                      <Building className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        id="firm"
                        type="text"
                        value={formData.firm}
                        onChange={(event) => handleInputChange('firm', event.target.value)}
                        className="w-full rounded-2xl border-2 border-slate-200 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 focus:border-blue-500"
                        placeholder="Nombre de tu estudio, notaría o arbitraje"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="serviceType" className="mb-2 block text-sm font-semibold text-slate-800">
                      ¿Qué tipo de apoyo necesitas? *
                    </label>
                    <div className="relative">
                      <FileText className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <select
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={(event) => handleInputChange('serviceType', event.target.value)}
                        className={`w-full appearance-none rounded-2xl border-2 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 ${
                          errors.serviceType ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                        aria-describedby={errors.serviceType ? 'service-error' : undefined}
                      >
                        <option value="">Selecciona una opción</option>
                        {serviceOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.serviceType && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="service-error"
                        className="mt-2 text-sm font-medium text-red-600"
                      >
                        {errors.serviceType}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-800">
                      Comentarios o contingencias actuales *
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-4 top-6 h-5 w-5 text-slate-400" />
                      <textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(event) => handleInputChange('message', event.target.value)}
                        className={`w-full resize-none rounded-2xl border-2 px-12 py-4 text-base transition-colors focus:outline-none focus:ring-0 ${
                          errors.message ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200 focus:border-blue-500'
                        }`}
                        placeholder="Cuéntame sobre tu situación contable, fiscalización o auditoría pendiente."
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                    </div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="message-error"
                        className="mt-2 text-sm font-medium text-red-600"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                {step === 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Volver
                  </button>
                ) : (
                  <div />
                )}

                {step === 0 ? (
                  <button
                    type="button"
                    onClick={goToNextStep}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800"
                  >
                    Siguiente
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <motion.button
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-xl transition-colors duration-200 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Enviando⬦</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </form>

            <p className="mt-6 text-center text-xs text-slate-500">
              Al enviar este formulario aceptas nuestra política de confidencialidad. Tus datos se
              utilizan únicamente para coordinar la asesoría solicitada.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showScheduler && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-[80vh] w-[90vw] max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
            >
              <button
                onClick={() => setShowScheduler(false)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-white transition-transform hover:scale-105"
                aria-label="Cerrar agenda"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                title="Agenda una reunión"
                src="https://calendly.com/contador-juridico/diagnostico"
                className="h-full w-full"
                frameBorder="0"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

