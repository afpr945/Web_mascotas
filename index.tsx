import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Constants & Assets ---
const WHATSAPP_NUM = "18057963581";
const ASSETS = {
  heroVideo: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-notifications-video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktbm90aWZpY2F0aW9ucy12aWRlby5tcDQiLCJpYXQiOjE3NzAzMTM1NjEsImV4cCI6MTgwMTg0OTU2MX0.v5kU4Zfq8ObzG27_YWMDPbbjCroexLwJ0LHw4--SiGU",
  mascotImg: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-cat-mouse.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktY2F0LW1vdXNlLnBuZyIsImlhdCI6MTc3MDE0NTYwNCwiZXhwIjoxODAxNjgxNjA0fQ.QCBDPZ7AnShIhrUo6vDyBudEjbVloe2T1Ndu9XMsVF4",
  demoVideo: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-groomer-cat-video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktZ3Jvb21lci1jYXQtdmlkZW8ubXA0IiwiaWF0IjoxNzcwMzEzNTI0LCJleHAiOjE4MDE4NDk1MjR9.xFCi3Xsvx9erYNMRUW5r8YtBq_Q7fRV1y-V1tX_I1Pc",
  step1: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800",
  step2: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800",
  step3: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800"
};

// --- Helper Components ---

const FloatingPaw = ({ className, delay = 0, size = "text-6xl" }: { className: string; delay?: number; size?: string }) => (
  <div 
    className={`floating-paw animate-float-organico ${size} ${className}`} 
    style={{ animationDelay: `${delay}s` }}
  >
    🐾
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className = "" }) => (
    <div className={className}>
      {["Proceso", "Planes", "FAQ"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold hover:text-sky transition-all group flex items-center gap-2">
          {item}
          <span className="h-1 w-0 group-hover:w-4 bg-sky transition-all duration-300 rounded-full"></span>
        </a>
      ))}
      <a 
        href={`https://wa.me/${WHATSAPP_NUM}?text=Hola, quiero agendar mi demo gratuita`}
        target="_blank" rel="noopener noreferrer"
        className="btn-primary px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest gap-2"
      >
        <i className="fab fa-whatsapp text-lg"></i> Agendar Demo
      </a>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 px-6 ${scrolled ? 'bg-navy/90 backdrop-blur-xl py-4 shadow-2xl border-b border-white/10' : 'py-10'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter">
          <span className="text-sky">LATIN</span>GROWTH
        </a>
        
        <NavLinks className="hidden lg:flex items-center gap-10 text-white" />

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white text-3xl">
          <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars-staggered"}></i>
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-navy/98 backdrop-blur-3xl border-t border-white/5 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] py-12 px-6 shadow-2xl' : 'max-h-0'}`}>
        <NavLinks className="flex flex-col gap-8 text-white text-center text-xl" />
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out"
      });
      
      gsap.to(".floating-mascot", {
        y: -30,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/98 via-navy/85 to-ocean/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-20">
        <div className="hero-content text-left">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-sky/30 bg-sky/10 backdrop-blur-md text-sky font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
            <span className="w-2 h-2 rounded-full bg-orange animate-ping"></span>
            Pet Business Evolution 2025
          </div>
          
          <h1 className="text-white font-display font-black text-5xl md:text-8xl leading-[0.85] mb-10 tracking-tighter">
            Tu negocio <br />
            <span className="text-gradient-ocean italic">funcionando</span> <br />
            sin ti.
          </h1>
          
          <p className="text-white/80 font-medium text-lg md:text-2xl mb-12 max-w-xl leading-relaxed">
            AI que atiende clientes + Automatización de citas + Marketing que llena tu local. 
            <span className="text-white font-black block mt-2 underline decoration-sky decoration-4 underline-offset-8">Listo en 7 días. Todo en Español.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={`https://wa.me/${WHATSAPP_NUM}?text=Hola, quiero ver la demo gratuita`} 
              target="_blank" rel="noopener noreferrer"
              className="btn-primary px-12 py-6 rounded-[2.5rem] text-xl font-black shadow-2xl"
            >
              📱 Agendar Demo Gratis
            </a>
            <a 
              href="#proceso" 
              className="px-12 py-6 rounded-[2.5rem] border-2 border-white/20 text-white font-black text-xl hover:bg-white hover:text-navy transition-all backdrop-blur-sm"
            >
              Ver Proceso →
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <img 
            src={ASSETS.mascotImg} 
            className="floating-mascot w-full h-auto drop-shadow-[0_35px_35px_rgba(142,202,230,0.3)]" 
            alt="Mascot" 
          />
          <div className="absolute top-10 right-10 bg-yellow text-navy font-black px-6 py-3 rounded-full border-4 border-orange transform rotate-12 shadow-2xl animate-pulse">
            ✨ AI INSIDE
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce cursor-pointer" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
        <i className="fas fa-chevron-down text-3xl"></i>
      </div>
    </section>
  );
};

const TrustWall = () => (
  <section className="py-20 bg-white border-y border-gray-100 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6">
      <p className="text-center text-navy/40 font-black uppercase tracking-[0.5em] text-[10px] mb-12">Empresas que ya crecen en automático</p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
        <span className="text-2xl md:text-4xl font-black text-navy italic tracking-tighter">PET-IA</span>
        <span className="text-2xl md:text-4xl font-black text-navy italic tracking-tighter">LATIN GROWERS</span>
        <span className="text-2xl md:text-4xl font-black text-navy italic tracking-tighter">7LCS STUDIO</span>
        <span className="text-2xl md:text-4xl font-black text-navy italic tracking-tighter">CALI-GROOM</span>
      </div>
    </div>
  </section>
);

const PainPoints = () => {
  const items = [
    { emoji: "😰", title: "Caos en WhatsApp", solution: "Tu AI responde en segundos, 24/7, sin que tú tengas que tocar el teléfono." },
    { emoji: "📅", title: "Citas Olvidadas", solution: "Confirmaciones y recordatorios automáticos que reducen el ausentismo al 0%." },
    { emoji: "📱", title: "Redes Vacías", solution: "Contenido estratégico que atrae dueños de mascotas calificados cada semana." },
    { emoji: "💸", title: "Gastos Ciegos", solution: "Sabes exactamente cuánto inviertes y cuánto dinero nuevo entra a tu caja." },
    { emoji: "🏆", title: "Marca Común", solution: "Identidad premium que te posiciona como el mejor de tu zona al instante." }
  ];

  useEffect(() => {
    gsap.utils.toArray('.problem-card').forEach((card: any, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1
      });
    });
  }, []);

  return (
    <section className="py-40 bg-navy relative overflow-hidden">
      <FloatingPaw className="top-20 left-[10%]" delay={1} />
      <FloatingPaw className="bottom-40 right-[15%]" delay={3} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 fade-in-section">
          <h2 className="font-display font-black text-5xl md:text-8xl mb-8 text-white leading-none">Problemas reales. <br /><span className="text-sky italic">Soluciones AI.</span></h2>
          <p className="text-white/60 text-xl md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">No somos marketing tradicional. Somos ingeniería de crecimiento para mascotas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="problem-card group p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 shadow-2xl">
              <div className="text-7xl mb-10 transform group-hover:scale-110 transition-transform duration-500">{item.emoji}</div>
              <h4 className="text-2xl font-black mb-4 text-sky">{item.title}</h4>
              <p className="text-white/50 leading-relaxed font-medium">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DemoShowcase = () => (
  <section className="py-32 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="fade-in-section">
        <h2 className="text-navy font-display font-black text-5xl md:text-7xl mb-8 leading-tight">Mira cómo <br /><span className="text-ocean italic">automatizamos</span> el éxito.</h2>
        <p className="text-gray-500 text-xl mb-12 leading-relaxed font-medium">Un flujo optimizado que convierte interesados en citas confirmadas mientras tú atiendes a tus clientes actuales.</p>
        <div className="space-y-6">
          {[
            "Captación instantánea de nuevos clientes",
            "Agenda digital sincronizada en tiempo real",
            "Recordatorios por WhatsApp automáticos",
            "Reportes de rendimiento claros y útiles"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-lg font-bold text-navy">
              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white text-xs">
                <i className="fas fa-check"></i>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src={ASSETS.demoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/10"></div>
      </div>
    </div>
  </section>
);

const Timeline = () => {
  const steps = [
    { day: "01", title: "Diagnóstico", desc: "Entendemos tus procesos actuales y diseñamos el mapa de automatización a medida.", img: ASSETS.step1 },
    { day: "03", title: "Construcción", desc: "Creamos tu nueva presencia web y entrenamos a tu AI Agent con tus precios y servicios.", img: ASSETS.step2 },
    { day: "05", title: "Integración", desc: "Conectamos todo: WhatsApp, Calendarios e Instagram bajo un solo motor inteligente.", img: ASSETS.step3 },
    { day: "07", title: "Lanzamiento", desc: "Salimos al aire. Tú recibes tus primeras citas y nosotros monitoreamos cada paso.", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800" }
  ];

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(s => observer.observe(s));
  }, []);

  return (
    <section id="proceso" className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 fade-in-section">
          <h2 className="text-navy font-display font-black text-6xl md:text-9xl mb-12 leading-none">De 0 a 100 <br /><span className="text-ocean italic">en 7 días.</span></h2>
          <p className="text-gray-400 text-2xl font-bold max-w-2xl mx-auto">Un proceso acelerado para que no pierdas ni un solo cliente más.</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto timeline-track">
          <div className="space-y-40">
            {steps.map((step, idx) => (
              <div key={idx} className={`fade-in-section relative flex flex-col md:flex-row items-center gap-20 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2">
                  <div className="rounded-[4rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img src={step.img} className="w-full h-[400px] object-cover" alt={step.title} />
                  </div>
                </div>
                <div className="md:w-1/2 flex items-center gap-10">
                  <div className="relative z-10 flex-shrink-0 w-24 h-24 bg-navy border-[8px] border-white rounded-full flex items-center justify-center text-white text-3xl font-black shadow-2xl">
                    {step.day}
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-navy mb-4">{step.title}</h4>
                    <p className="text-gray-500 text-xl leading-relaxed font-medium">{step.desc}</p>
                    <span className="text-orange font-black text-sm uppercase tracking-[0.4em] block mt-6">ETAPA {idx + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Esencial', price: '$400', sub: 'Setup único', features: ['Web profesional', 'Rediseño de marca', 'Hosting incluido', 'SEO básico'], popular: false },
    { name: 'Crecimiento', price: '$900', sub: '$350/mes mtto', features: ['Todo de Esencial', 'Plan de marketing', 'Content mensual', 'Ads setup'], popular: true },
    { name: 'Full AI', price: '$1,200', sub: '$600+/mes', features: ['Todo de Crecimiento', 'AI Agent 24/7', 'WhatsApp Automation', 'Dashboard Pro'], popular: false }
  ];

  return (
    <section id="planes" className="py-40 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32 fade-in-section">
          <h2 className="text-navy font-display font-black text-5xl md:text-8xl mb-8 leading-none">Inversión para <br /><span className="text-ocean italic">Ganar.</span></h2>
          <p className="text-gray-400 text-2xl font-bold">Sin sorpresas. Inversión inteligente que se paga con el primer cliente extra.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div key={idx} className={`fade-in-section flex flex-col bg-white rounded-[4rem] border-2 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] ${plan.popular ? 'border-ocean scale-105' : 'border-gray-100'}`}>
              <div className={`p-16 text-center ${plan.popular ? 'bg-navy text-white' : 'bg-gray-50 text-navy'}`}>
                {plan.popular && <span className="bg-orange text-white text-[10px] font-black px-6 py-2 rounded-full mb-6 inline-block tracking-[0.2em]">RECOMENDADO</span>}
                <h3 className="text-3xl font-black mb-4">{plan.name}</h3>
                <div className="text-7xl font-black mb-2">{plan.price}</div>
                <div className="text-xs uppercase font-black opacity-50 tracking-widest">{plan.sub}</div>
              </div>
              <div className="p-16 flex-grow flex flex-col justify-between">
                <ul className="space-y-6 mb-12">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg font-bold text-gray-700">
                      <span className="text-yellow text-xl">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${WHATSAPP_NUM}?text=Me interesa el plan ${plan.name}`} target="_blank" rel="noopener noreferrer" className={`block text-center py-6 rounded-3xl font-black text-xl transition-all ${plan.popular ? 'btn-primary' : 'bg-navy text-white hover:bg-ocean'}`}>
                  Solicitar mi demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const items = [
    { q: "¿Necesito saber de tecnología?", a: "Absolutamente nada. Si sabes enviar un mensaje por WhatsApp, ya tienes todo el conocimiento necesario. Nosotros nos encargamos de que la tecnología trabaje por ti." },
    { q: "¿Qué pasa si ya tengo una página web?", a: "La mayoría de las webs son solo folletos digitales. Nosotros la transformamos en un motor de ventas activo con inteligencia artificial que agenda por ti." },
    { q: "¿Es seguro para mis clientes?", a: "Totalmente. Utilizamos servidores seguros y procesos cifrados. La IA solo tiene acceso a la información que tú decidas compartir para agendar citas." },
    { q: "¿Cuánto tiempo toma ver resultados?", a: "Muchos negocios ven sus primeras citas automatizadas en las primeras 48 horas tras el lanzamiento del día 7." }
  ];

  return (
    <section id="faq" className="py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24 fade-in-section">
          <h2 className="text-navy font-display font-black text-6xl md:text-8xl mb-12 tracking-tighter leading-none">Resolvemos tus <br /><span className="text-sky italic">Dudas.</span></h2>
        </div>
        <div className="space-y-6">
          {items.map((item, idx) => (
            <div key={idx} className="fade-in-section bg-gray-50 rounded-[3rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-10 text-left flex justify-between items-center font-black text-navy text-2xl md:text-3xl"
              >
                {item.q}
                <span className={`text-4xl transition-transform duration-500 ${openIndex === idx ? 'rotate-45 text-orange' : 'text-ocean'}`}>+</span>
              </button>
              <div className={`transition-all duration-700 px-10 ${openIndex === idx ? 'max-h-[500px] pb-16 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <p className="text-gray-500 leading-relaxed text-xl font-medium border-t border-gray-200 pt-10">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-navy pt-40 pb-20 text-white relative overflow-hidden">
    <FloatingPaw className="top-20 right-[10%] opacity-10" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-32 mb-32">
        <div className="fade-in-section">
          <h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.85]">Hagámoslo <br /><span className="text-sky italic">Realidad.</span></h2>
          <a 
            href={`https://wa.me/${WHATSAPP_NUM}`} 
            className="btn-primary inline-flex items-center gap-8 px-16 py-8 rounded-[3rem] text-3xl font-black shadow-2xl"
          >
            <i className="fab fa-whatsapp text-4xl"></i> Demo WhatsApp
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-20 fade-in-section">
          <div className="space-y-10">
            <h4 className="text-sky font-black text-xs uppercase tracking-[0.5em]">PLATAFORMA</h4>
            <ul className="space-y-6 font-bold text-2xl">
              <li><a href="#proceso" className="hover:text-sky transition-colors">Nuestro Proceso</a></li>
              <li><a href="#planes" className="hover:text-sky transition-colors">Planes</a></li>
              <li><a href="#faq" className="hover:text-sky transition-colors">Dudas</a></li>
            </ul>
          </div>
          <div className="space-y-10">
            <h4 className="text-sky font-black text-xs uppercase tracking-[0.5em]">UBICACIÓN</h4>
            <p className="text-3xl font-black leading-tight text-white/80 underline decoration-sky">Ventura County, <br /> California. <br /> <span className="text-sky text-xl">+1 (805) 796-3581</span></p>
          </div>
        </div>
      </div>
      <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-white/30 font-black text-xs tracking-[0.3em] uppercase">
        <span>© 2025 LATIN GROWTH BUSINESS • BY 7LCS STUDIO</span>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">PRIVACIDAD</a>
          <a href="#" className="hover:text-white transition-colors">TÉRMINOS</a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    
    gsap.to('.hero-text-box', {
      scrollTrigger: { trigger: '.hero-text-box', start: 'top top', scrub: true },
      y: 100, opacity: 0.4, scale: 0.95
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustWall />
      <PainPoints />
      <DemoShowcase />
      <Timeline />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}