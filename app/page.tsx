'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Waves,
  Users,
  Star,
  Calendar,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Clock,
  Award,
  Check,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Breaks', href: '#breaks' },
    { label: 'Instructores', href: '#instructors' },
    { label: 'Programas', href: '#programs' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-2">
              <Waves className="h-8 w-8 text-[#1B7B8F]" />
              <span className="font-bold text-xl text-white tracking-wide">
                SURF ACADEMY
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm uppercase tracking-widest transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => setBookingOpen(true)}
                className="bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 text-white px-6"
              >
                Reserva Tu Clase
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0D1B2A]/98 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white text-lg uppercase tracking-widest transition-all duration-300"
                style={{ transitionDelay: mobileMenuOpen ? `${index * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingOpen(true);
              }}
              className="w-full bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 text-white mt-4"
            >
              Reserva Tu Clase
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section
        id="hero"
        style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#000' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) saturate(1.1)',
          }}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* Bottom gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)',
            zIndex: 2,
          }}
        />
        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="text-center px-4 max-w-4xl">
            <h1 className="font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight">
              Catch Your Wave
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
              Clases de surf con expertos para todos los niveles en los mejores breaks de Playa del
              Carmen
            </p>
            <Button
              onClick={() => setBookingOpen(true)}
              className="bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 text-white text-lg px-10 py-6 h-auto"
            >
              Reserva Tu Clase
            </Button>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#0D1B2A]/95 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, value: '1,240+', label: 'Estudiantes Entrenados' },
              { icon: Award, value: '47', label: 'Instructores Certificados' },
              { icon: Star, value: '99.2%', label: 'Reseñas 5 Estrellas' },
              { icon: Calendar, value: '8+', label: 'Años de Experiencia Local' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 text-white">
                <stat.icon className="h-6 w-6 text-[#F4A460] flex-shrink-0" />
                <div>
                  <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Breaks */}
      <section id="breaks" className="py-20 md:py-28 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
              Nuestros Breaks
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Conocemos cada ola de Playa del Carmen. Te llevamos al break perfecto según tu nivel.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'La Boca',
                subtitle: 'Paraíso para Principiantes',
                difficulty: 1,
                height: '1–2 ft',
                description:
                  'Shore break suave, agua cálida, perfecta para tu primer día en el agua.',
              },
              {
                name: 'Punta Venado',
                subtitle: 'Progresión Natural',
                difficulty: 2,
                height: '2–3 ft',
                description:
                  'Olas consistentes y largas paredes ideales para practicar tu pop up.',
              },
              {
                name: 'Puerto Morelos',
                subtitle: 'Desafío Intermedio',
                difficulty: 3,
                height: '3–4 ft',
                description:
                  'Beach break con más potencia para surfistas que buscan el siguiente nivel.',
              },
              {
                name: 'Tulum Point',
                subtitle: 'Para Surfistas Avanzados',
                difficulty: 4,
                height: '4–6 ft',
                description:
                  'Point break con secciones tubulares cuando el swell del norte conecta.',
              },
            ].map((spot) => (
              <Card
                key={spot.name}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1B7B8F] to-[#0D1B2A] flex items-center justify-center">
                  <Waves className="h-20 w-20 text-white/20" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white">
                    {spot.height}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#0D1B2A]">{spot.name}</h3>
                      <p className="text-[#1B7B8F] text-sm">{spot.subtitle}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <Waves
                          key={level}
                          className={`h-4 w-4 ${
                            level <= spot.difficulty ? 'text-[#1B7B8F]' : 'text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#6B7280]">{spot.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section with Video */}
      <section
        style={{ position: 'relative', height: '70vh', overflow: 'hidden', background: '#000' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) saturate(1.1)',
          }}
        >
          <source src="/videos/section1-video.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
            zIndex: 2,
          }}
        />
        <div
          className="relative z-10 h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-3xl">
            <p className="text-[#F4A460] uppercase tracking-[0.3em] text-sm mb-4">
              La Experiencia
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Más Que Clases de Surf
            </h2>
            <p className="text-xl text-white/80 font-light">
              Una comunidad, un estilo de vida, y la mejor manera de conectar con el mar Caribe
            </p>
          </div>
        </div>
      </section>

      {/* About Split Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-[#F4A460] uppercase tracking-[0.2em] text-sm">
                Nuestra Historia
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] leading-tight">
                Surf de Clase Mundial en el Corazón del Caribe
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                Fundada por surfistas locales apasionados por compartir las olas del Caribe
                mexicano, Surf Academy ofrece una experiencia única de aprendizaje. Grupos
                reducidos de máximo 6 estudiantes garantizan atención personalizada en cada sesión.
              </p>
              <ul className="space-y-4">
                {[
                  'Instructores certificados con conocimiento local',
                  'Equipo de primera calidad incluido',
                  'Ubicaciones adaptadas a tu nivel',
                  'Fotos y videos de tu sesión',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-[#1B7B8F]/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-[#1B7B8F]" />
                    </div>
                    <span className="text-[#0D1B2A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1B7B8F] to-[#0D1B2A] flex items-center justify-center">
                <Waves className="h-32 w-32 text-white/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F4A460] text-[#0D1B2A] rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold">8+</div>
                <div className="text-sm">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs / Services Cards */}
      <section id="programs" className="py-20 md:py-28 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
              Nuestros Programas
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Desde tu primera ola hasta técnicas avanzadas, tenemos el programa perfecto para ti.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sesiones Drop In',
                price: 'Desde $45 USD',
                description: 'Clases grupales flexibles de 1.5 horas',
                features: [
                  'Tabla y lycra incluidos',
                  'Horarios al amanecer o atardecer',
                  'Máximo 6 estudiantes',
                  'Paquete de fotos GoPro',
                ],
              },
              {
                title: 'Curso Foundations',
                price: 'Desde $160 USD',
                description: 'Programa de progresión de 4 semanas',
                features: [
                  'Currículo estructurado',
                  'Seguimiento de tu progreso',
                  'Acceso a biblioteca de videos',
                  'Reservas prioritarias',
                ],
                featured: true,
              },
              {
                title: 'Coaching Privado',
                price: 'Desde $85 USD/hora',
                description: 'Sesiones personalizadas 1 a 1',
                features: [
                  'Análisis de video de tu surf',
                  'Plan de entrenamiento personalizado',
                  'Elección de break',
                  'Horario flexible',
                ],
              },
            ].map((program) => (
              <Card
                key={program.title}
                className={`relative overflow-hidden border-0 shadow-lg ${
                  program.featured ? 'ring-2 ring-[#1B7B8F]' : ''
                }`}
              >
                {program.featured && (
                  <div className="absolute top-0 right-0 bg-[#1B7B8F] text-white text-xs px-3 py-1 rounded-bl-lg">
                    Más Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{program.title}</h3>
                  <div className="text-2xl font-bold text-[#1B7B8F] mb-3">{program.price}</div>
                  <p className="text-[#6B7280] mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#1B7B8F]" />
                        <span className="text-[#0D1B2A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setBookingOpen(true)}
                    className={`w-full mt-6 ${
                      program.featured
                        ? 'bg-[#1B7B8F] hover:bg-[#1B7B8F]/90'
                        : 'bg-[#0D1B2A] hover:bg-[#0D1B2A]/90'
                    }`}
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors / Team Cards */}
      <section id="instructors" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
              Nuestros Instructores
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Surfistas profesionales certificados que conocen cada ola de la Riviera Maya.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: 'Director de Surf',
                specialty: 'Técnica de Shortboard',
                years: '12 años',
                quote: 'El surf te enseña paciencia y perseverancia.',
              },
              {
                role: 'Instructora Senior',
                specialty: 'Surf para Principiantes',
                years: '8 años',
                quote: 'Mi energía hace que hasta los más nerviosos se sientan seguros.',
              },
              {
                role: 'Coach de Competencia',
                specialty: 'Maniobras Avanzadas',
                years: '10 años',
                quote: 'Cada ola es una oportunidad de mejorar.',
              },
              {
                role: 'Instructor de Longboard',
                specialty: 'Estilo Clásico',
                years: '15 años',
                quote: 'El longboard es la esencia del surf.',
              },
              {
                role: 'Instructora de Niños',
                specialty: 'Surf para Familias',
                years: '6 años',
                quote: 'Ver a un niño atrapar su primera ola es mágico.',
              },
              {
                role: 'Coach de Fitness',
                specialty: 'Preparación Física',
                years: '7 años',
                quote: 'Un cuerpo preparado surfea mejor.',
              },
            ].map((instructor, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden group">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-[#1B7B8F] to-[#0D1B2A] flex items-center justify-center">
                    <Users className="h-16 w-16 text-white/30" />
                  </div>
                  <div className="absolute inset-0 bg-[#0D1B2A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-sm text-center italic">
                      &ldquo;{instructor.quote}&rdquo;
                    </p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#0D1B2A]">{instructor.role}</h3>
                  <p className="text-sm text-[#1B7B8F]">{instructor.specialty}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{instructor.years} de experiencia</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section 2 */}
      <section
        style={{ position: 'relative', height: '60vh', overflow: 'hidden', background: '#000' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'contrast(1.05) saturate(1.1)',
          }}
        >
          <source src="/videos/section2-video.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
            zIndex: 2,
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[#F4A460] uppercase tracking-[0.3em] text-sm mb-4">
              Lo Que Dicen Nuestros Estudiantes
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Historias de Surf
            </h2>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Nunca había surfeado y me daba miedo el océano. En dos semanas con Surf Academy, ya estaba montando olas y disfrutando cada momento.',
                name: 'Carlos M.',
                location: 'Ciudad de México',
              },
              {
                quote:
                  'Los instructores conocen cada break al detalle y te llevan al lugar perfecto según tu nivel. Altamente profesionales.',
                name: 'Emma T.',
                location: 'Londres, UK',
              },
              {
                quote:
                  'El mejor dinero que he gastado en vacaciones. Los grupos pequeños significan atención real y personalizada.',
                name: 'João S.',
                location: 'São Paulo, Brasil',
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`border-0 shadow-lg ${index === 1 ? 'md:-mt-8' : ''}`}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-[#F4A460] text-[#F4A460]"
                      />
                    ))}
                  </div>
                  <p className="text-[#0D1B2A] text-lg mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-bold text-[#0D1B2A]">{testimonial.name}</div>
                    <div className="text-sm text-[#6B7280]">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-4">
              Planes y Precios
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus metas de surf.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Casual Surfer',
                price: '$45',
                period: 'por sesión',
                features: [
                  'Clase grupal drop in',
                  'Tabla y wetsuit incluidos',
                  'Horarios al amanecer o atardecer',
                  'Paquete de fotos GoPro',
                  'Máximo 6 estudiantes',
                ],
              },
              {
                name: 'Committed Learner',
                price: '$160',
                period: '4 sesiones',
                featured: true,
                features: [
                  'Currículo estructurado de 4 semanas',
                  'Seguimiento de progresión',
                  'Acceso a biblioteca de videos',
                  'Reservas prioritarias',
                  'Descuento en tienda',
                ],
              },
              {
                name: 'Dedicated Athlete',
                price: '$340',
                period: 'por mes',
                features: [
                  'Clases grupales ilimitadas',
                  '2 sesiones de coaching privado',
                  'Plan de entrenamiento personalizado',
                  'Análisis de video',
                  'Acceso a red de competidores',
                ],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`relative border-0 shadow-lg ${
                  plan.featured
                    ? 'ring-2 ring-[#1B7B8F] scale-105'
                    : ''
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F4A460] text-[#0D1B2A] text-sm font-bold px-4 py-1 rounded-full">
                    Recomendado
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-[#1B7B8F]">{plan.price}</span>
                    <span className="text-[#6B7280]">USD</span>
                  </div>
                  <p className="text-sm text-[#6B7280] mb-6">{plan.period}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-[#1B7B8F] mt-0.5 flex-shrink-0" />
                        <span className="text-[#0D1B2A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setBookingOpen(true)}
                    className={`w-full ${
                      plan.featured
                        ? 'bg-[#1B7B8F] hover:bg-[#1B7B8F]/90'
                        : 'bg-[#0D1B2A] hover:bg-[#0D1B2A]/90'
                    }`}
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#0D1B2A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reserva Tu Sesión
            </h2>
            <p className="text-lg text-white/70">
              Completa el formulario y te contactaremos para confirmar tu reserva.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Waves className="h-8 w-8 text-[#1B7B8F]" />
                <span className="font-bold text-xl text-white">SURF ACADEMY</span>
              </div>
              <p className="text-white/60 mb-6 max-w-sm">
                La mejor escuela de surf en Playa del Carmen. Clases para todos los niveles con
                instructores certificados.
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:info@surfacademy.mx"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1B7B8F] hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1B7B8F] hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#1B7B8F] hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Enlaces</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Playa del Carmen, Q. Roo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>6:00 AM – 6:00 PM</span>
                </li>
              </ul>
              <Button
                onClick={() => setBookingOpen(true)}
                className="mt-6 bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 w-full"
              >
                Reservar Ahora
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Surf Academy. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Booking Sidebar / Modal */}
      <BookingSidebar open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    lesson_type: '',
    skill_level: '',
    time_slot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/10 rounded-2xl p-12 text-center">
        <div className="h-16 w-16 rounded-full bg-[#1B7B8F] flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Reserva Recibida!</h3>
        <p className="text-white/70">
          Te contactaremos pronto para confirmar tu sesión de surf.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 rounded-2xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-white/80 text-sm mb-2">Nombre completo *</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Email *</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Teléfono</label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
            placeholder="+52 984 123 4567"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Fecha preferida</label>
          <Input
            type="date"
            value={formData.preferred_date}
            onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
            className="bg-white/10 border-white/20 text-white"
          />
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Tipo de clase</label>
          <select
            value={formData.lesson_type}
            onChange={(e) => setFormData({ ...formData, lesson_type: e.target.value })}
            className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
          >
            <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
            <option value="drop-in" className="bg-[#0D1B2A]">Sesión Drop In</option>
            <option value="foundations" className="bg-[#0D1B2A]">Curso Foundations</option>
            <option value="private" className="bg-[#0D1B2A]">Coaching Privado</option>
          </select>
        </div>
        <div>
          <label className="block text-white/80 text-sm mb-2">Nivel de surf</label>
          <select
            value={formData.skill_level}
            onChange={(e) => setFormData({ ...formData, skill_level: e.target.value })}
            className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
          >
            <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
            <option value="beginner" className="bg-[#0D1B2A]">Principiante</option>
            <option value="intermediate" className="bg-[#0D1B2A]">Intermedio</option>
            <option value="advanced" className="bg-[#0D1B2A]">Avanzado</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-white/80 text-sm mb-2">Horario preferido</label>
        <select
          value={formData.time_slot}
          onChange={(e) => setFormData({ ...formData, time_slot: e.target.value })}
          className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
        >
          <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
          <option value="sunrise" className="bg-[#0D1B2A]">Amanecer (6:00 AM)</option>
          <option value="morning" className="bg-[#0D1B2A]">Mañana (9:00 AM)</option>
          <option value="afternoon" className="bg-[#0D1B2A]">Tarde (3:00 PM)</option>
          <option value="sunset" className="bg-[#0D1B2A]">Atardecer (5:00 PM)</option>
        </select>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm">
          Hubo un error al enviar. Por favor intenta de nuevo.
        </p>
      )}
      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 h-12 text-lg"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Reserva'}
      </Button>
    </form>
  );
}

function BookingSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    lesson_type: '',
    skill_level: '',
    time_slot: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CONSTRUCTOR_API}/v1/forms/${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar (desktop) / Modal (mobile) */}
      <div
        className={`fixed z-50 bg-[#0D1B2A] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          md:right-0 md:top-0 md:h-full md:w-[450px] md:translate-x-0
          inset-x-4 bottom-4 top-auto rounded-2xl md:rounded-none max-h-[90vh] md:max-h-none overflow-y-auto
          ${open ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-y-0 md:translate-x-full'}
        `}
      >
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Reserva Tu Clase</h3>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="h-16 w-16 rounded-full bg-[#1B7B8F] flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">¡Reserva Recibida!</h4>
              <p className="text-white/70 mb-6">
                Te contactaremos pronto para confirmar.
              </p>
              <Button onClick={onClose} variant="outline" className="border-white/20 text-white">
                Cerrar
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-white/80 text-sm mb-2">Nombre completo *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Email *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Teléfono</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  placeholder="+52 984 123 4567"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Fecha preferida</label>
                <Input
                  type="date"
                  value={formData.preferred_date}
                  onChange={(e) => setFormData({ ...formData, preferred_date: e.target.value })}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Tipo de clase</label>
                <select
                  value={formData.lesson_type}
                  onChange={(e) => setFormData({ ...formData, lesson_type: e.target.value })}
                  className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
                >
                  <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
                  <option value="drop-in" className="bg-[#0D1B2A]">Sesión Drop In</option>
                  <option value="foundations" className="bg-[#0D1B2A]">Curso Foundations</option>
                  <option value="private" className="bg-[#0D1B2A]">Coaching Privado</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Nivel de surf</label>
                <select
                  value={formData.skill_level}
                  onChange={(e) => setFormData({ ...formData, skill_level: e.target.value })}
                  className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
                >
                  <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
                  <option value="beginner" className="bg-[#0D1B2A]">Principiante</option>
                  <option value="intermediate" className="bg-[#0D1B2A]">Intermedio</option>
                  <option value="advanced" className="bg-[#0D1B2A]">Avanzado</option>
                </select>
              </div>
              <div>
                <label className="block text-white/80 text-sm mb-2">Horario preferido</label>
                <select
                  value={formData.time_slot}
                  onChange={(e) => setFormData({ ...formData, time_slot: e.target.value })}
                  className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 text-white text-sm"
                >
                  <option value="" className="bg-[#0D1B2A]">Seleccionar...</option>
                  <option value="sunrise" className="bg-[#0D1B2A]">Amanecer (6:00 AM)</option>
                  <option value="morning" className="bg-[#0D1B2A]">Mañana (9:00 AM)</option>
                  <option value="afternoon" className="bg-[#0D1B2A]">Tarde (3:00 PM)</option>
                  <option value="sunset" className="bg-[#0D1B2A]">Atardecer (5:00 PM)</option>
                </select>
              </div>
              {status === 'error' && (
                <p className="text-red-400 text-sm">
                  Hubo un error al enviar. Por favor intenta de nuevo.
                </p>
              )}
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#1B7B8F] hover:bg-[#1B7B8F]/90 h-12"
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Reserva'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
