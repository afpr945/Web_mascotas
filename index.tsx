import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const WHATSAPP_NUM = "18057963581";
const ASSETS = {
  heroVideo: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-notifications-video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktbm90aWZpY2F0aW9ucy12aWRlby5tcDQiLCJpYXQiOjE3NzAzMTM1NjEsImV4cCI6MTgwMTg0OTU2MX0.v5kU4Zfq8ObzG27_YWMDPbbjCroexLwJ0LHw4--SiGU",
  mascotImg: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-cat-mouse.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktY2F0LW1vdXNlLnBuZyIsImlhdCI6MTc3MDE0NTYwNCwiZXhwIjoxODAxNjgxNjA0fQ.QCBDPZ7AnShIhrUo6vDyBudEjbVloe2T1Ndu9XMsVF4",
  demoVideo: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-groomer-cat-video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktZ3Jvb21lci1jYXQtdmlkZW8ubXA0IiwiaWF0IjoxNzcwMzEzNTI0LCJleHAiOjE4MDE4NDk1MjR9.xFCi3Xsvx9erYNMRUW5r8YtBq_Q7fRV1y-V1tX_I1Pc",
  pugBg: "https://pvkfxyhwjbphcrqqaitv.supabase.co/storage/v1/object/sign/Media%20Files/7LCS.com/Mascotas/Pet-industry-white-pug.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYjE4YmJhNC1kM2MxLTRiNTQtYmYwMC05NzQ4NjEzNGEzNjEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJNZWRpYSBGaWxlcy83TENTLmNvbS9NYXNjb3Rhcy9QZXQtaW5kdXN0cnktd2hpdGUtcHVnLnBuZyIsImlhdCI6MTc3MDM1NjE1NywiZXhwIjoxODAxODkyMTU3fQ.hAiTBGp7mwi7degE7_YmN6Qk4HXL9Dl6EuKy10s5BRM"
};

// --- Navbar Component ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${scrolled ? 'bg-navy/90 backdrop-blur-xl py-4 shadow-2xl' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter">
          <span className="text-sky">LATIN</span>GROWTH
        </a>
        
        <div className="hidden lg:flex items-center gap-10 text-white">
          {["Proceso", "Planes", "FAQ"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold hover:text-sky transition-all uppercase tracking-widest">{item}</a>
          ))}
          <a href={`https://wa.me/${WHATSAPP_NUM}`} className="btn-primary px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest">Agendar Demo</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-3xl">
          <i className={menuOpen ? "fas fa-times" : "fas fa-bars-staggered"}></i>
        </button>
      </div>

      <div className={`lg:hidden absolute top-full left-0 w-full bg-navy/98 backdrop-blur-3xl transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col p-10 gap-8 text-white text-center font-bold">
          <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
          <a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href={`https://wa.me/${WHATSAPP_NUM}`} className="btn-primary py-4 rounded-xl uppercase tracking-widest">Agendar Demo</a>
        </div>
      </div>
    </nav>
  );
};

// --- Hero Section ---
const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden bg-navy">
    <div className="absolute inset-0 z-0">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-sky/30 bg-sky/5 text-sky text-xs font-black uppercase tracking-[0.3em]">
          <span className="w-2 h-2 rounded-full bg-orange animate-ping"></span>
          Pet Evolution 2025
        </div>
        
        <h1 className="text-white font-display font-black text-5xl md:text-8xl leading-none mb-8 tracking-tighter">
          Tu negocio <br />
          <span className="text-gradient italic">funcionando</span> <br />
          sin ti.
        </h1>
        
        <p className="text-white/70 font-medium text-lg md:text-2xl mb-12 max-w-xl leading-relaxed">
          AI que atiende clientes + Automatización de citas + Marketing que llena tu local. 
          <span className="text-white font-black block mt-2">Listo en 7 días. Todo en Español.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a href={`https://wa.me/${WHATSAPP_NUM}`} className="btn-primary px-12 py-5 rounded-full text-lg font-black shadow-2xl">
            📱 Agendar Demo Gratis
          </a>
          <a href="#proceso" className="px-12 py-5 rounded-full border-2 border-white/20 text-white font-black text-lg hover:bg-white hover:text-navy transition-all text-center">
            Ver Proceso →
          </a>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-10 left-6 text-white/20 hidden md:block">
      <p className="text-[10px] font-black uppercase tracking-[1em] rotate-90 origin-left">SCROLL FOR MAGIC</p>
    </div>
  </section>
);

// --- Problem Section ---
const PainPoints = () => {
  const items = [
    { icon: "📱", title: "Esclavo de WhatsApp", desc: "Contestando mensajes a las 11 PM sobre precios y disponibilidad." },
    { icon: "📅", title: "Cancelaciones", desc: "Pierdes dinero porque no tienes recordatorios automáticos efectivos." },
    { icon: "😫", title: "Info Repetitiva", desc: "Explicando lo mismo 50 veces al día: precios, horarios, vacunas..." }
  ];

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 grayscale">
        <img src={ASSETS.pugBg} className="h-full w-full object-contain object-right" alt="Pug" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sky font-black uppercase tracking-widest text-sm mb-4">¿Te suena familiar?</h2>
          <h3 className="text-white font-display font-black text-5xl md:text-7xl">El caos que <br /> <span className="text-orange italic">te roba</span> tiempo.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="glass p-12 rounded-[3rem] hover:border-sky/40 transition-all group">
              <div className="text-7xl mb-10 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h4 className="text-2xl font-black text-white mb-6 leading-tight">{item.title}</h4>
              <p className="text-white/50 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Solution Showcase ---
const Solution = () => (
  <section className="py-32 bg-white rounded-[4rem] -mt-10 relative z-20 shadow-2xl">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-navy font-display font-black text-6xl md:text-8xl mb-8 leading-none">Tu Asistente <br /><span className="text-ocean italic">AI 24/7.</span></h2>
        <p className="text-gray-500 text-xl md:text-2xl mb-12 font-medium leading-relaxed">Un agente inteligente que trabaja por ti mientras duermes, entrenado específicamente para el mercado hispano en California.</p>
        <div className="space-y-8">
          {[
            { t: "Agendamiento Automático", d: "Sincronizado con tu calendario real." },
            { t: "Calificación de Leads", d: "Solo te avisa de clientes reales y listos." },
            { t: "Marketing Integrado", d: "Anuncios que traen gente nueva cada día." }
          ].map((feat, i) => (
            <div key={i} className="flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-sky flex items-center justify-center text-navy font-black shadow-lg shadow-sky/30">0{i+1}</div>
              <div>
                <h4 className="text-xl font-bold text-navy mb-1">{feat.t}</h4>
                <p className="text-gray-400 font-medium">{feat.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-4 bg-ocean/20 blur-3xl group-hover:bg-ocean/30 transition-all rounded-[3rem]"></div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src={ASSETS.demoVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
);

// --- Process Timeline ---
const Timeline = () => {
  const steps = [
    { d: "01", t: "Diagnóstico", desc: "Entendemos tus procesos actuales y diseñamos el mapa de automatización." },
    { d: "03", t: "Construcción", desc: "Creamos tu nueva presencia web y entrenamos a tu AI Agent." },
    { d: "05", t: "Integración", desc: "Conectamos todo: WhatsApp, Calendarios e Instagram bajo un solo motor." },
    { d: "07", t: "Lanzamiento", desc: "Salimos al aire. Tú recibes tus primeras citas y nosotros monitoreamos todo." }
  ];

  return (
    <section id="proceso" className="py-40 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-32">
          <h2 className="text-sky font-black uppercase tracking-widest text-sm mb-4">Metodología 7LCS</h2>
          <h3 className="text-white font-display font-black text-6xl md:text-9xl mb-12 leading-none">De 0 a 100 <br /> <span className="text-gradient italic">en 7 días.</span></h3>
        </div>
        
        <div className="relative max-w-4xl mx-auto timeline-line">
          <div className="space-y-24 md:space-y-40">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center gap-10 md:gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="z-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-ocean to-sky rounded-full flex items-center justify-center text-white text-2xl md:text-4xl font-black shadow-2xl shrink-0">
                  {step.d}
                </div>
                <div className={`flex-1 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <h4 className="text-2xl md:text-4xl font-black text-white mb-4">{step.t}</h4>
                  <p className="text-white/50 text-lg md:text-2xl font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ Component ---
const FAQ = () => {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "¿Necesito saber de tecnología?", a: "Absolutamente nada. Si sabes enviar un mensaje por WhatsApp, ya tienes todo el conocimiento necesario." },
    { q: "¿Qué pasa si ya tengo una página web?", a: "Nosotros la transformamos de un simple folleto digital a un motor de ventas activo." },
    { q: "¿Es seguro para mis clientes?", a: "Totalmente. Utilizamos servidores seguros y procesos cifrados de nivel empresarial." }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-navy font-display font-black text-6xl md:text-8xl mb-20 text-center leading-none">Resolvemos tus <br /> <span className="text-sky italic">Dudas.</span></h3>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="border-2 border-gray-100 rounded-[2.5rem] overflow-hidden transition-all hover:border-sky">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full p-8 md:p-12 text-left flex justify-between items-center font-black text-navy text-xl md:text-3xl"
              >
                {item.q}
                <span className={`text-4xl transition-transform ${open === i ? 'rotate-45 text-orange' : 'text-ocean'}`}>+</span>
              </button>
              <div className={`transition-all duration-500 px-12 ${open === i ? 'max-h-96 pb-12 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 text-lg md:text-2xl font-medium border-t border-gray-100 pt-8">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer Section ---
const Footer = () => (
  <footer className="bg-navy pt-40 pb-20 text-white relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-32 mb-32">
        <div>
          <h2 className="text-7xl md:text-9xl font-black mb-12 tracking-tighter leading-none italic">Hagámoslo <br /> <span className="text-gradient">Realidad.</span></h2>
          <a href={`https://wa.me/${WHATSAPP_NUM}`} className="btn-primary px-16 py-8 rounded-full text-3xl font-black">
            📱 Demo WhatsApp
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h4 className="text-sky font-black text-xs uppercase tracking-[0.5em] mb-10">Servicios</h4>
            <ul className="space-y-6 font-bold text-2xl">
              <li><a href="#proceso" className="hover:text-sky transition-colors">Proceso</a></li>
              <li><a href="#planes" className="hover:text-sky transition-colors">Planes</a></li>
              <li><a href="#faq" className="hover:text-sky transition-colors">Dudas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sky font-black text-xs uppercase tracking-[0.5em] mb-10">Contacto</h4>
            <p className="text-3xl font-black text-white underline decoration-sky decoration-4 underline-offset-8">+1 (805) 796-3581</p>
            <p className="text-gray-500 mt-6 font-bold uppercase tracking-widest text-sm">Ventura County, California</p>
          </div>
        </div>
      </div>
      <div className="pt-20 border-t border-white/10 text-center text-white/30 font-black text-xs tracking-widest">
        © 2025 LATIN GROWTH BUSINESS • BY 7LCS STUDIO
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <PainPoints />
    <Solution />
    <Timeline />
    <FAQ />
    <Footer />
  </div>
);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}