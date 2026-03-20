import profilePic from './assets/profile.png';
import { SiAngular, SiReact } from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { 
  Users, 
  ShieldCheck, 
  Target, 
  Zap, 
  MessageSquare, 
  Search 
} from 'lucide-react';
import { useState } from 'react';


const translations = {
  EN: {
    role: "Frontend Architect",
    coreFrameworks: "Core Frameworks",
    uiDesign: "UI & Design",
    engineering: "Engineering",
    leadershipTitle: "Leadership & Architectural Process",
    leadershipDesc: "From hands-on development to technical leadership—I focus on building robust engineering cultures and delivering high-quality web applications.",
    pillars: [
      {
        icon: Zap,
        title: "Frontend Architecture",
        description: "Designing scalable frontend structures. I focus on creating a balance between modern development speed and architectural stability.",
        tools: ["React", "Architecture Design", "Best Practices"]
      },
      {
        icon: Users,
        title: "Team Mentorship",
        description: "Moving beyond individual contribution to lead teams at Bridge Global and IQness. I focus on bridging the experience gap in AI-driven workflows, ensuring speed doesn't compromise code integrity.",
        tools: ["Team Lead", "AI Oversight", "Knowledge Sharing"]
      },
      {
        icon: ShieldCheck,
        title: "Quality Governance",
        description: "Enforcing high engineering standards through automated gatekeeping. I implement coding standards that the whole team follows to ensure long-term maintainability.",
        tools: ["Husky", "ESLint", "Prettier", "Code Reviews"]
      },
      {
        icon: Search,
        title: "QA-Centric Development",
        description: "I approach development with a tester's mindset. By identifying edge cases early, I significantly reduce the bug-count reported by QA teams and ensure smoother release cycles.",
        tools: ["Defensive Coding", "Unit Testing", "Regression Prevention"]
      },
      {
        icon: Target,
        title: "Strategic Delivery",
        description: "Analyzing client requirements and providing realistic estimations. I manage the lifecycle from initial analysis to final delivery, ensuring milestones are met on time.",
        tools: ["Jira", "Kanban", "Estimation", "Project Planning"]
      },
      {
        icon: MessageSquare,
        title: "Stakeholder Synergy",
        description: "Direct communication with clients and management. I translate complex technical requirements into clear business value and vice versa to prevent communication silos.",
        tools: ["Client Relations", "Leadership", "Technical Consulting"]
      }
    ],
    profile: [
      "Strategic Frontend Architect with over a decade of experience bridging the gap between complex client requirements and high-performance technical execution.",
      "My approach goes beyond standard development; I specialize in establishing robust engineering cultures through automated standards (Husky, Linting), rigorous peer reviews, and a 'test-like-a-QA' mindset that drastically reduces regression cycles.",
      "From my leadership origins at Bridge Global to my current architectural role at IQness, I have mastered the art of balancing hands-on development with technical mentorship.",
      "I don't just deliver features—I manage the entire delivery pipeline: from analyzing client requirements and providing precise estimations to guiding teams through the nuances of AI-assisted development.",
      "I ensure that while AI speeds up our velocity, my architectural oversight maintains the code integrity and best practices that prevent 'inexperience-driven' bugs."
    ],
    projectsTitle: "Featured Projects & Case Studies",
    projectsDesc: "These projects highlight my journey through leading teams at Bridge Global and IQness, focusing on scalable React architectures, mentored development workflows, and a 'test-first' methodology to ensure enterprise-grade reliability.",
    projects: [
      {
        title: "Vamana & Workwell Dashboards",
        company: "IQness Technologies",
        role: "Frontend Architect",
        desc: "Workplace management platforms with unified dashboards and visitor tracking.",
        stack: ["Next.js", "Vite", "React", "MUI", "Radix UI"]
      },
      {
        title: "Swayamvara Matrimony",
        company: "IQness Technologies",
        role: "Frontend Architect",
        desc: "A secure matrimony platform featuring OTP verification and profile management.",
        stack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"]
      },
      {
        title: "Sessionly",
        company: "Bridge Global",
        role: "Senior Frontend Developer",
        desc: "An event booking and ticketing platform for live experiences.",
        stack: ["Nuxt", "Vue", "Vuex", "i18n"]
      },
      {
        title: "Valency Retail ERP",
        company: "Bridge Global",
        role: "Senior Frontend Developer",
        desc: "B2B ERP software for retail operators using complex state management.",
        stack: ["Angular 7", "NGXS", "RxJS", "Kendo UI"]
      }
    ],
    footer: "B.Tech • Computer Science & Engineering • 2010 • MG University"
  },
  DE: {
    role: "Frontend-Architekt",
    coreFrameworks: "Kern-Frameworks",
    uiDesign: "UI & Design",
    engineering: "Ingenieurwesen",
    leadershipTitle: "Führung & Architekturprozess",
    leadershipDesc: "Von der praktischen Entwicklung zur technischen Führung – ich konzentriere mich auf den Aufbau robuster Engineering-Kulturen und die Bereitstellung hochwertiger Webanwendungen.",
    pillars: [
      {
        icon: Zap,
        title: "Frontend-Architektur",
        description: "Entwurf skalierbarer Frontend-Strukturen. Ich konzentriere mich auf die Schaffung eines Gleichgewichts zwischen moderner Entwicklungsgeschwindigkeit und architektonischer Stabilität.",
        tools: ["React", "Architektur-Design", "Bewährte Praktiken"]
      },
      {
        icon: Users,
        title: "Team-Mentoring",
        description: "Über den individuellen Beitrag hinausgehend, um Teams bei Bridge Global und IQness zu führen. Ich konzentriere mich auf die Überbrückung der Erfahrungslücke in KI-gesteuerten Workflows und stelle sicher, dass Geschwindigkeit die Code-Integrität nicht beeinträchtigt.",
        tools: ["Team-Leiter", "KI-Überwachung", "Wissensweitergabe"]
      },
      {
        icon: ShieldCheck,
        title: "Qualitätssteuerung",
        description: "Durchsetzung hoher Engineering-Standards durch automatisierte Gatekeeping. Ich implementiere Coding-Standards, denen das gesamte Team folgt, um langfristige Wartbarkeit zu gewährleisten.",
        tools: ["Husky", "ESLint", "Prettier", "Code Reviews"]
      },
      {
        icon: Search,
        title: "QA-zentrierte Entwicklung",
        description: "Ich nähere mich der Entwicklung mit der Denkweise eines Testers. Durch frühzeitige Identifizierung von Edge-Cases reduziere ich die Anzahl der von QA-Teams gemeldeten Bugs erheblich und gewährleiste reibungslosere Release-Zyklen.",
        tools: ["Defensives Coding", "Unit-Tests", "Regressionsprävention"]
      },
      {
        icon: Target,
        title: "Strategische Lieferung",
        description: "Analyse von Kundenanforderungen und Bereitstellung realistischer Schätzungen. Ich verwalte den Lebenszyklus von der ersten Analyse bis zur endgültigen Lieferung und stelle sicher, dass Meilensteine pünktlich erreicht werden.",
        tools: ["Jira", "Kanban", "Schätzung", "Projektplanung"]
      },
      {
        icon: MessageSquare,
        title: "Stakeholder-Synergie",
        description: "Direkte Kommunikation mit Kunden und Management. Ich übersetze komplexe technische Anforderungen in klaren Geschäftswert und umgekehrt, um Kommunikationssilos zu verhindern.",
        tools: ["Kundenbeziehungen", "Führung", "Technische Beratung"]
      }
    ],
    profile: [
      "Strategischer Frontend-Architekt mit über einem Jahrzehnt Erfahrung in der Überbrückung der Kluft zwischen komplexen Kundenanforderungen und leistungsstarker technischer Ausführung.",
      "Mein Ansatz geht über die Standardentwicklung hinaus; ich spezialisiere mich auf die Etablierung robuster Engineering-Kulturen durch automatisierte Standards (Husky, Linting), strenge Peer-Reviews und eine 'test-like-a-QA'-Denkweise, die Regressionszyklen drastisch reduziert.",
      "Von meinen Führungsanfängen bei Bridge Global bis zu meiner aktuellen architektonischen Rolle bei IQness habe ich die Kunst beherrscht, praktische Entwicklung mit technischer Mentorschaft zu balancieren.",
      "Ich liefere nicht nur Features – ich verwalte die gesamte Lieferpipeline: von der Analyse von Kundenanforderungen und der Bereitstellung präziser Schätzungen bis zur Führung von Teams durch die Nuancen der KI-unterstützten Entwicklung.",
      "Ich stelle sicher, dass während KI unsere Geschwindigkeit beschleunigt, meine architektonische Überwachung die Code-Integrität und bewährten Praktiken aufrechterhält, die 'unerfahrenheit-getriebene' Bugs verhindern."
    ],
    projectsTitle: "Ausgewählte Projekte & Fallstudien",
    projectsDesc: "Diese Projekte heben meine Reise durch die Führung von Teams bei Bridge Global und IQness hervor, mit Fokus auf skalierbare React-Architekturen, betreute Entwicklungsworkflows und einer 'test-first'-Methodologie zur Sicherstellung von Enterprise-Grade-Reliabilität.",
    projects: [
      {
        title: "Vamana & Workwell Dashboards",
        company: "IQness Technologies",
        role: "Frontend-Architekt",
        desc: "Plattformen für Arbeitsplatzmanagement mit einheitlichen Dashboards und Besucher-Tracking.",
        stack: ["Next.js", "Vite", "React", "MUI", "Radix UI"]
      },
      {
        title: "Swayamvara Matrimony",
        company: "IQness Technologies",
        role: "Frontend-Architekt",
        desc: "Eine sichere Heiratsplattform mit OTP-Verifizierung und Profilmanagement.",
        stack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"]
      },
      {
        title: "Sessionly",
        company: "Bridge Global",
        role: "Senior Frontend Developer",
        desc: "Eine Plattform für Event-Buchung und Ticketing für Live-Erlebnisse.",
        stack: ["Nuxt", "Vue", "Vuex", "i18n"]
      },
      {
        title: "Valency Retail ERP",
        company: "Bridge Global",
        role: "Senior Frontend Developer",
        desc: "B2B-ERP-Software für Einzelhandelsbetreiber mit komplexem Zustandsmanagement.",
        stack: ["Angular 7", "NGXS", "RxJS", "Kendo UI"]
      }
    ],
    footer: "B.Tech • Informatik & Ingenieurwesen • 2010 • MG Universität"
  }
};

const ProcessCard = ({ icon: Icon, title, description, tools }) => (
  <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
      <h4 className="text-md font-bold text-slate-800 dark:text-white text-left">{title}</h4>
    </div>
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pb-4 text-left">
      {description}
    </p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool) => (
        <span key={tool} className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const LeadershipProcess = ({ lang }) => {
  const t = translations[lang];
  const pillars = t.pillars;

  return (
    <section className="py-2 px-0 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t.leadershipTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mx-auto px-8">
          {t.leadershipDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <ProcessCard key={index} {...pillar} />
        ))}
      </div>
    </section>
  );
};

const SkillBadge = ({ text }) => (
  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs font-mono border border-slate-300 dark:border-slate-600">
    {text}
  </span>
);

const Header = ({ lang }) => (  
  <header className="mb-4 flex flex-col md:flex-row items-center md:items-end justify-center gap-4 md:gap-7">
    {/* Text Content */}
    <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-1">
        Ajin Gopi
      </h1>
      <p className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-widest mb-4">{translations[lang].role}</p>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs text-slate-600 font-mono">
        <span>Müllerbrunnenstr. 2, 01187, Dresden</span>        
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-xs text-slate-600 font-mono">
        <a href="mailto:ajingopi@gmail.com" className="hover:text-blue-600 transition-colors">ajingopi@gmail.com</a>
        <span className="text-slate-400">•</span>
        <a href="https://linkedin.com/in/ajingopi" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="text-slate-400">•</span>
        <span>+49-155-10942932</span>        
        
      </div>
    </div>
    
    {/* Profile Picture with Icons */}
    <div className="flex flex-col md:flex-row md:items-center items-center gap-2 md:gap-4">
      <img 
        src={profilePic} 
        alt="Ajin Gopi" 
        className="w-20 h-20 md:w-30 md:h-30 rounded-full border-0 object-contain"
      />
      {/* Technology Icons */}
      <div className="flex flex-row md:flex-col gap-2 md:gap-3">
        {/* React Icon */}
        <div className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
          <SiReact className="w-5 h-5 md:w-7 md:h-7 text-blue-600" />
        </div>
        
        {/* Angular Icon */}
        <div className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
          <SiAngular className="w-5 h-5 md:w-7 md:h-7 text-red-600" />
        </div>
        
        {/* Vue Icon */}
        <div className="w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
          <BiLogoVuejs className="w-5 h-5 md:w-7 md:h-7 text-green-600" />
        </div>
      </div>
    </div>
  </header>
)

const TechnicalStack = ({ lang }) => {
  const t = translations[lang];
  return (
    <section className="mb-4 grid md:grid-cols-3 gap-7 py-7">
      <div className="text-center border border-slate-300 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
        <h3 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-3">{t.coreFrameworks}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {["React", "Vue 2", "Angular", "TypeScript", "Next.js", "Nuxt", "Vite"].map(s => <SkillBadge key={s} text={s} />)}
        </div>
      </div>
      <div className="text-center border border-slate-300 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
        <h3 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-3">{t.uiDesign}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Bootstrap", "Tailwind CSS", "MUI", "Shadcn UI", "Radix UI", "Figma"].map(s => <SkillBadge key={s} text={s} />)}
        </div>
      </div>
      <div className="text-center border border-slate-300 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
        <h3 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-3">{t.engineering}</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Kanban", "JIRA", "Git", "GitHub", "Browserstack", "Ubuntu"].map(s => <SkillBadge key={s} text={s} />)}
        </div>
      </div>
    </section>
  );
}

const ProfileSection = ({ lang }) => {
  const t = translations[lang];
  return (
    <section className="mt-4 mb-12">
      <div className="mx-auto text-left border border-slate-300 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 hover:shadow-md transition-shadow">
        <ul className="space-y-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {t.profile.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>   
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState("EN");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 py-8 relative">
        {/* Language Switcher */}
        <div className="flex justify-end px-8 lg:px-16 pt-4 absolute top-0 right-0">
          <div className="flex items-center gap-1 bg-secondary rounded-full p-1 border border-border">
            <button
              type="button"
              onClick={() => setLang("EN")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "EN"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("DE")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                lang === "DE"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              DE
            </button>
          </div>
        </div>

        {/* Header - With Profile Picture */}
        <Header lang={lang} />

        {/* Technical Stack - Grouped by Architecture */}
        <TechnicalStack lang={lang} />

        <LeadershipProcess lang={lang} />   

        {/* Profile Section */}
        <ProfileSection lang={lang} />

        {/* Project Ledger */}
        <section className="mb-4">
          <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t.projectsTitle}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mx-auto px-8">
          {t.projectsDesc}
        </p>
      </div>
          <div className="space-y-6">
            {t.projects.map((p, i) => (
              <div key={i} className="group border border-slate-300 dark:border-slate-700 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all dark:bg-slate-800">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors text-left">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{p.company}</span>
                    <span className="text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-slate-600 dark:text-slate-400">{p.role}</span>
                  </div>
                </div>
                <p className="text-sm text-left text-slate-700 dark:text-slate-300 mb-3 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-[11px] text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Education */}
        <footer className="text-slate-600 text-xs text-center">
          <p className="mb-2">B.Tech • Computer Science & Engineering • 2010 • MG University</p>
          <p className="uppercase tracking-widest">© {new Date().getFullYear()} Ajin Gopi</p>
        </footer>

      </div>
    </div>
  );
}