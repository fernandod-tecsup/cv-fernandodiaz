import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CVDocument';
import fotoFernando from './img/fotoCV2.png';
import { 
  Mail, Phone, MapPin, Code2, Database, Smartphone, 
  Languages, GraduationCap, ChevronRight, 
  Linkedin, Github, Download 
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experiencia');

  const profile = {
    name: "Fernando Diaz",
    role: "Analista Programador Backend",
    summary: "Profesional egresado de TECSUP con sólida trayectoria en el diseño e implementación de arquitecturas escalables. Experto en optimización de lógica de servidor y microservicios robustos, con un enfoque analítico para la resolución de problemas complejos.",
    contact: {
      email: "luis.diaz.tr@tecsup.edu.pe",
      phone: "981549279",
      location: "Lima, Perú"
    },
    techBackend: ["Java Spring Boot", "Microservicios", "Arquitectura Hexagonal", "PHP Nativo", "API REST / SOAP", "SOLID Principles"],
    techCloud: ["SQL", "MySQL", "MongoDB", "Firebase Firestore", "Realtime Database", "Git / GitLab / GitHub","Postman"],
    techMobile: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM" , "Java", "Firebase","Android Studio","Material Design 3"]
  };

  const experience = [
    {
      title: "Analista Senior Java Backend",
      company: "COMSATEL",
      period: "2024 — 2025",
      points: [
        "Mantenimiento y evolución de sistemas Backend utilizando Java Spring Boot.",
        "Implementación de patrones de diseño bajo Arquitectura Hexagonal para asegurar desacoplamiento.",
        "Desarrollo de nuevos endpoints y microservicios para la mejora operativa del core de negocio."
      ]
    },
    {
      title: "Analista Desarrollador Móvil Android",
      company: "UNIVERSIDAD DE LIMA",
      period: "2022 — 2023",
      points: [
        "Optimización del aplicativo móvil institucional mediante integraciones API REST y SOAP.",
        "Liderazgo en el desarrollo de interfaces modernas con Jetpack Compose y Material Design 3.",
        "Gestión completa del ciclo de vida en Play Store y servicios de nube con Firebase."
      ]
    },
    {
      title: "Desarrollador de Aplicaciones",
      company: "BALKANED",
      period: "2021 — 2022",
      points: [
        "Desarrollo de Backend en PHP Nativo para sistemas de administración web.",
        "Sistematización de procesos portuarios incluyendo firma digital y generación automatizada de documentos PDF en Kotlin.",
        "Optimización del aplicativo móvil Oceano Seafood mediante integraciones API REST en JAVA y Kotlin.",
        "Manejo de flujos de datos en tiempo real para inventarios mediante Firebase."
      ]
    }
  ];

  const cvRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-[#0f1113] text-[#f8fafc] font-sans selection:bg-[#deff9a] selection:text-[#0f1113] p-4 md:p-8 lg:p-12">
      <div ref={cvRef} id="cv-print" className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[#1a1d21] rounded-[2rem] overflow-hidden border border-[#2d3339] shadow-2xl" style={{ width: '1120px' }}>
        
        {/* SIDEBAR */}
        <aside className="w-full lg:w-[350px] bg-[#14171a] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#2d3339]">
          <div className="flex flex-col items-center lg:items-start">
            
            <div className="w-40 rounded-[2rem] flex items-center justify-center mb-8 ">
              <img 
                src={fotoFernando} 
                alt="Fernando Diaz" 
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            
            <div className="space-y-6 w-full">
              <section>
                <h3 className="text-[#deff9a] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Mail size={14} /> Contacto
                </h3>
                <div className="space-y-3">
                  <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-[#deff9a] transition-colors truncate">
                    <Mail size={16} /> {profile.contact.email}
                  </a>
                  <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <Phone size={16} /> {profile.contact.phone}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <MapPin size={16} /> {profile.contact.location}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-[#deff9a] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Code2 size={14} /> Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.techBackend.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[11px] rounded-lg bg-[#deff9a]/5 border border-[#deff9a]/20 text-[#deff9a] font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[#deff9a] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Database size={14} /> Data & Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.techCloud.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[11px] rounded-lg bg-[#94a3b8]/5 border border-[#94a3b8]/20 text-[#94a3b8]">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-[#deff9a] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Smartphone size={14} /> Mobile
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.techMobile.map(skill => (
                    <span key={skill} className="px-3 py-1 text-[11px] rounded-lg bg-blue-500/5 border border-blue-500/20 text-blue-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="pt-4">
                <h3 className="text-[#deff9a] text-xs font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                  <Languages size={14} /> Idiomas
                </h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#94a3b8]">Español</span>
                    <span className="text-[#deff9a]">Nativo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94a3b8]">Inglés</span>
                    <span className="text-[#deff9a]/60">Básico</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 lg:p-16 overflow-y-auto">
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight leading-none">
              Fernando <span className="text-[#deff9a]">Diaz Trinidad</span>
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-[#deff9a]/90 mb-6">
              Analista Programador Backend
            </div>
            <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl">
              {profile.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <PDFDownloadLink document={<CVDocument />} fileName="CV-Fernando-Diaz.pdf">
                {({ loading }) => (
                  <button className="flex items-center gap-2 bg-[#deff9a] text-[#0f1113] px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-[#deff9a]/10">
                    <Download size={18} /> {loading ? 'Generando...' : 'Descargar CV'}
                  </button>
                )}
              </PDFDownloadLink>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/luisfernandodiaztrinidad/" className="p-3 bg-[#2d3339] rounded-xl text-[#f8fafc] hover:bg-[#deff9a] hover:text-[#0f1113] transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-[#2d3339] rounded-xl text-[#f8fafc] hover:bg-[#deff9a] hover:text-[#0f1113] transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </header>

          <nav className="flex gap-8 border-b border-[#2d3339] mb-10">
            {['experiencia', 'educación', 'competencias'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                  activeTab === tab ? 'text-[#deff9a]' : 'text-[#94a3b8] hover:text-[#f8fafc]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#deff9a] rounded-t-full shadow-[0_-4px_10px_rgba(222,255,154,0.3)]" />
                )}
              </button>
            ))}
          </nav>

          <div className="min-h-[400px]">
            {activeTab === 'experiencia' && (
              <div className="space-y-12">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-[#2d3339] group hover:border-[#deff9a] transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a1d21] border-2 border-[#2d3339] group-hover:border-[#deff9a] group-hover:bg-[#deff9a] transition-all" />
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-[#deff9a] transition-colors">{exp.title}</h4>
                        <div className="text-[#deff9a] font-semibold text-sm">{exp.company}</div>
                      </div>
                      <span className="text-[#94a3b8] text-sm font-medium bg-[#2d3339] px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                          <ChevronRight size={16} className="text-[#deff9a] shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'educación' && (
              <div className="bg-[#14171a] p-8 rounded-2xl border border-[#2d3339] flex justify-between items-center group hover:border-[#deff9a]/30 transition-all">
                <div>
                  <div className="text-[#deff9a] mb-2"><GraduationCap size={32} /></div>
                  <h4 className="text-xl font-bold">Diseño y Desarrollo de Software</h4>
                  <p className="text-[#94a3b8] text-lg">TECSUP</p>
                </div>
                <div className="text-right">
                  <span className="text-[#deff9a] font-bold text-lg">2017 — 2021</span>
                  <p className="text-[#94a3b8] text-sm">Egresado</p>
                </div>
              </div>
            )}

            {activeTab === 'competencias' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Liderazgo Técnico", desc: "Capacidad para guiar decisiones de arquitectura y mejores prácticas.", icon: "⚡" },
                  { title: "Adaptabilidad", desc: "Rápida curva de aprendizaje ante nuevos stack tecnológicos.", icon: "🎯" },
                  { title: "Calidad de Código", desc: "Enfoque estricto en principios SOLID y Clean Code.", icon: "💎" },
                  { title: "Trabajo en Equipo", desc: "Experiencia en metodologías ágiles y entornos colaborativos.", icon: "🤝" }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-[#14171a] rounded-2xl border border-[#2d3339] hover:border-[#deff9a]/30 transition-all group">
                    <span className="text-3xl mb-4 block">{item.icon}</span>
                    <h5 className="font-bold text-lg mb-2 group-hover:text-[#deff9a] transition-colors">{item.title}</h5>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
      
      <footer className="mt-8 text-center text-[#94a3b8] text-xs opacity-50">
        &copy; 2025 Fernando Diaz • Generado para portafolio interactivo
      </footer>
    </div>
  );
};
// Componentes auxiliares
const SideSection = ({ title, icon, children }: any) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{
      color: '#deff9a', fontSize: '9px', fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px'
    }}>
      {icon} {title}
    </div>
    {children}
  </div>
);

const ContactItem = ({ icon, text, small }: any) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: '6px',
    fontSize: small ? '9px' : '11px', color: '#94a3b8', marginBottom: '6px',
    wordBreak: 'break-all'
  }}>
    {icon} {text}
  </div>
);

const TagList = ({ tags, color }: any) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
    {tags.map((tag: string) => (
      <span key={tag} style={{
        padding: '2px 8px', fontSize: '9px', borderRadius: '6px',
        border: `1px solid ${color}30`, color: color, background: `${color}08`
      }}>{tag}</span>
    ))}
  </div>
);

const SocialBtn = ({ icon }: any) => (
  <button style={{
    padding: '8px', background: '#2d3339', border: 'none',
    borderRadius: '10px', color: '#f8fafc', cursor: 'pointer'
  }}>{icon}</button>
);

export default App;