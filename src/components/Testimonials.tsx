'use client';

import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause, Grid3X3, List } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  firm: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  category: 'notaria' | 'abogados' | 'boutique' | 'fullservice';
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María Contreras',
    firm: 'Contreras & Molina Abogadas',
    role: 'Socia directora',
    rating: 5,
    comment:
      'Leonardo Oliva reorganizó nuestros libros y creó un control de honorarios transparente por socio. Hoy proyectamos utilidades y provisiones con dos meses de anticipación. La última fiscalización del SII cerró sin observaciones.',
    avatar: 'MC',
    category: 'boutique',
    featured: true,
  },
  {
    id: 2,
    name: 'Rodrigo Pino',
    firm: 'Pino & Asociados',
    role: 'Socio litigante',
    rating: 5,
    comment:
      'El equipo de Leonardo preparó informes periciales impecables y nos acompañó en cada audiencia. El soporte presencial permitió responder las preguntas del árbitro con total confianza.',
    avatar: 'RP',
    category: 'abogados',
  },
  {
    id: 3,
    name: 'Carolina Lagos',
    firm: 'Notaría Lagos',
    role: 'Notaria y conservadora',
    rating: 5,
    comment:
      'Implementamos protocolos UAF, matrices de riesgo y reportes mensuales automatizados. La auditoría anual dejó de ser una contingencia porque tenemos cierres y respaldos centralizados.',
    avatar: 'CL',
    category: 'notaria',
    featured: true,
  },
  {
    id: 4,
    name: 'Felipe Oyarzún',
    firm: 'Oyarzún & Cía.',
    role: 'Gerente administrativo',
    rating: 5,
    comment:
      'Pasamos de una contabilidad tradicional a un modelo legal-first con KPIs por área, tiempos de cobro y escenarios de distribución a socios. Las reuniones de directorio ahora se basan en datos reales.',
    avatar: 'FO',
    category: 'fullservice',
  },
  {
    id: 5,
    name: 'Andrea Morales',
    firm: 'Morales & Partners',
    role: 'Socia fundadora',
    rating: 5,
    comment:
      'La transformación digital de nuestra contabilidad nos permitió escalar de 3 a 12 abogados sin perder control financiero. Los dashboards en tiempo real son fundamentales para nuestras decisiones estratégicas.',
    avatar: 'AM',
    category: 'abogados',
    featured: true,
  },
  {
    id: 6,
    name: 'Carlos Mendoza',
    firm: 'Notaría Mendoza',
    role: 'Notario público',
    rating: 5,
    comment:
      'El sistema de alertas tempranas nos ha evitado múltiples contingencias. Ahora detectamos irregularidades antes de que se conviertan en problemas con la UAF o el SII.',
    avatar: 'CM',
    category: 'notaria',
  },
];

const categoryLabels = {
  notaria: 'Notarías',
  abogados: 'Estudios de Abogados',
  boutique: 'Boutiques Legales',
  fullservice: 'Full Service',
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPaused, setIsPaused] = useState(false);

  const filteredTestimonials = selectedCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  }, [filteredTestimonials.length]);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // ✅ Memorizar y usar actualización funcional para no depender de isAutoPlaying
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(prev => !prev);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (viewMode === 'carousel') {
        switch (event.key) {
          case 'ArrowLeft':
            prevTestimonial();
            break;
          case 'ArrowRight':
            nextTestimonial();
            break;
          case ' ':
            event.preventDefault();
            toggleAutoPlay();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTestimonial, prevTestimonial, viewMode, toggleAutoPlay]); // ✅ incluir toggleAutoPlay

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused || viewMode === 'grid') return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, viewMode, filteredTestimonials.length]);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section id="testimonios" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          {...staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            {...fadeInUp}
            className="section-tag mx-auto bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg shadow-blue-500/20"
          >
            <span>Testimonios reales</span>
          </motion.div>
          <motion.h2
            {...fadeInUp}
            className="mt-6 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Historias de firmas que blindaron su contabilidad
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="mt-4 text-pretty text-lg text-slate-600 sm:text-xl"
          >
            Notarías, boutiques y firmas full service coinciden: la información precisa y el
            acompañamiento experto aumentan la confianza de sus clientes y tribunales.
          </motion.p>
        </motion.div>

        {/* Controls and Filters */}
        <motion.div
          {...fadeInUp}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* View Mode and Auto-play Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-lg bg-white border border-slate-200 p-1">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  viewMode === 'carousel'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="h-4 w-4" />
                Carrusel
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
                Grid
              </button>
            </div>

            {viewMode === 'carousel' && (
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 rounded-lg bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    Pausar
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Reproducir
                  </>
                )}
              </button>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="mt-16">
          {viewMode === 'carousel' ? (
            /* Carousel View */
            <div className="relative mx-auto max-w-5xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-[0_32px_80px_rgba(15,23,42,0.15)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentIndex}-${selectedCategory}`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -40, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="p-8 sm:p-12 lg:p-16"
                  >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12">
                      {/* Avatar and Info */}
                      <div className="flex items-center gap-6 lg:flex-col lg:items-center lg:gap-4">
                        <div className="relative">
                          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-xl font-bold text-white shadow-2xl shadow-blue-500/30 sm:h-24 sm:w-24 sm:text-2xl">
                            {filteredTestimonials[currentIndex]?.avatar}
                          </div>
                          {filteredTestimonials[currentIndex]?.featured && (
                            <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-amber-900">
                              ★
                            </div>
                          )}
                        </div>
                        <div className="text-center lg:text-center">
                          <div className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                            {categoryLabels[filteredTestimonials[currentIndex]?.category as keyof typeof categoryLabels]}
                          </div>
                          <div className="mt-1 text-lg font-bold text-slate-900">
                            {filteredTestimonials[currentIndex]?.firm}
                          </div>
                          <div className="text-sm text-slate-600">
                            {filteredTestimonials[currentIndex]?.role}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between">
                          <Quote className="h-10 w-10 text-blue-500/70" />
                          <div className="flex items-center gap-1">
                            {Array.from({ length: filteredTestimonials[currentIndex]?.rating || 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        {/* ✅ Comillas tipográficas para evitar react/no-unescaped-entities */}
                        <blockquote className="text-xl italic leading-relaxed text-slate-700 sm:text-2xl lg:text-xl">
                          {`“${filteredTestimonials[currentIndex]?.comment}”`}
                        </blockquote>

                        <div className="pt-4 border-t border-slate-100">
                          <div className="text-xl font-bold text-slate-900">
                            {filteredTestimonials[currentIndex]?.name}
                          </div>
                          <div className="text-slate-600">
                            {filteredTestimonials[currentIndex]?.role} • {filteredTestimonials[currentIndex]?.firm}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 backdrop-blur-sm text-slate-600 shadow-lg transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-xl hover:-translate-y-0.5"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
                </button>

                <div className="flex items-center gap-3">
                  {filteredTestimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.id}
                      onClick={() => goToTestimonial(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'w-12 bg-blue-500 shadow-lg shadow-blue-500/30'
                          : 'w-3 bg-slate-300 hover:bg-slate-400 hover:w-6'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="group flex h-14 w-14 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 backdrop-blur-sm text-slate-600 shadow-lg transition-all duration-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-xl hover:-translate-y-0.5"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-sm text-slate-600 border border-slate-200/70">
                  <div className={`h-2 w-2 rounded-full ${isAutoPlaying && !isPaused ? 'bg-green-500 animate-pulse' : 'bg-slate-400'}`}></div>
                  {isAutoPlaying && !isPaused ? 'Reproducción automática' : 'Pausado'}
                  <span className="text-slate-400">•</span>
                  <span>{currentIndex + 1} de {filteredTestimonials.length}</span>
                </div>
              </div>
            </div>
          ) : (
            /* Grid View */
            <motion.div
              {...staggerContainer}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTestimonials.map((testimonial) => ( // ✅ eliminar index no usado
                <motion.div
                  key={testimonial.id}
                  {...fadeInUp}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 backdrop-blur-sm p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {testimonial.featured && (
                    <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-amber-900">
                      ★
                    </div>
                  )}

                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 text-sm font-bold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        {categoryLabels[testimonial.category]}
                      </div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>

                  {/* ✅ Comillas tipográficas */}
                  <blockquote className="mb-4 text-sm italic leading-relaxed text-slate-700">
                    {`“${testimonial.comment}”`}
                  </blockquote>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="text-sm font-semibold text-slate-900">{testimonial.role}</div>
                    <div className="text-xs text-slate-600">{testimonial.firm}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600">
            ¿Quieres que evaluemos la contabilidad y el blindaje fiscal de tu estudio?
          </p>
          <button
            onClick={() =>
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            Agendar diagnóstico contable
          </button>
        </motion.div>
      </div>
    </section>
  );
}
