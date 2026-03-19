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


const projects = [
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
];

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

const LeadershipProcess = () => {
  const pillars = [
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
  ];

  return (
    <section className="py-2 px-0 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Leadership & Architectural Process
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mx-auto px-8">
          From hands-on development to technical leadership—I focus on building robust engineering cultures and delivering high-quality web applications.
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
  <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs font-mono border border-slate-300">
    {text}
  </span>
);

const Header = () => (  
  <header className="mb-4 flex items-end justify-center gap-7">
    {/* Text Content */}
    <div className="text-center">
      <h1 className="text-5xl font-bold tracking-tight text-slate-900 mb-1">
        Ajin Gopi
      </h1>
      <p className="text-sm text-blue-600 font-semibold uppercase tracking-widest mb-4">Frontend Architect</p>
      <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600 font-mono">
        <a href="mailto:ajingopi@gmail.com" className="hover:text-blue-600 transition-colors">ajingopi@gmail.com</a>
        <span className="text-slate-400">•</span>
        <a href="https://linkedin.com/in/ajingopi" className="hover:text-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="text-slate-400">•</span>
        <span>01187, Dresden</span>        
        
      </div>
    </div>
    
    {/* Profile Picture with Icons */}
    <div className="flex items-center gap-4">
      <img 
        src={profilePic} 
        alt="Ajin Gopi" 
        className="w-30 h-30 rounded-full border-0 object-contain"
      />
      {/* Technology Icons */}
      <div className="flex flex-col gap-3">
        {/* React Icon */}
        <div className="w-7 h-7 flex items-center justify-center">
          <SiReact className="w-7 h-7 text-blue-600" />
        </div>
        
        {/* Angular Icon */}
        <div className="w-7 h-7 flex items-center justify-center">
          <SiAngular className="w-7 h-7 text-red-600" />
        </div>
        
        {/* Vue Icon */}
        <div className="w-7 h-7 flex items-center justify-center">
          <BiLogoVuejs className="w-7 h-7 text-green-600" />
        </div>
      </div>
    </div>
  </header>
)

const TechnicalStack = () => (
  <section className="mb-4 grid md:grid-cols-3 gap-7 py-7">
    <div className="text-center border border-slate-300 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <h3 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Core Frameworks</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {["React", "Vue 2", "Angular", "TypeScript", "Next.js", "Nuxt", "Vite"].map(s => <SkillBadge key={s} text={s} />)}
      </div>
    </div>
    <div className="text-center border border-slate-300 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <h3 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">UI & Design</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {["Bootstrap", "Tailwind CSS", "MUI", "Shadcn UI", "Radix UI", "Figma"].map(s => <SkillBadge key={s} text={s} />)}
      </div>
    </div>
    <div className="text-center border border-slate-300 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <h3 className="text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">Engineering</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {["Kanban", "JIRA", "Git", "GitHub", "Browserstack", "Ubuntu"].map(s => <SkillBadge key={s} text={s} />)}
      </div>
    </div>
  </section>
)

const ProfileSection = () => (
  <section className="mt-4 mb-12">
    <div className="mx-auto text-left border border-slate-300 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <ul className="space-y-4 text-base leading-relaxed text-slate-700">
        <li className="flex items-start">
          <span className="text-blue-600 mr-3 mt-1">•</span>
          <span>Strategic Frontend Architect with over a decade of experience bridging the gap between complex client requirements and high-performance technical execution.</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3 mt-1">•</span>
          <span>My approach goes beyond standard development; I specialize in establishing robust engineering cultures through automated standards (Husky, Linting), rigorous peer reviews, and a 'test-like-a-QA' mindset that drastically reduces regression cycles.</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3 mt-1">•</span>
          <span>From my leadership origins at Bridge Global to my current architectural role at IQness, I have mastered the art of balancing hands-on development with technical mentorship.</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3 mt-1">•</span>
          <span>I don't just deliver features—I manage the entire delivery pipeline: from analyzing client requirements and providing precise estimations to guiding teams through the nuances of AI-assisted development.</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-600 mr-3 mt-1">•</span>
          <span>I ensure that while AI speeds up our velocity, my architectural oversight maintains the code integrity and best practices that prevent 'inexperience-driven' bugs.</span>
        </li>
      </ul>
    </div>
  </section>   
)

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Header - With Profile Picture */}
        <Header />

        {/* Technical Stack - Grouped by Architecture */}
        <TechnicalStack />

        <LeadershipProcess />   

        {/* Profile Section */}
        <ProfileSection />

        {/* Project Ledger */}
        <section className="mb-4">
          <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Featured Projects & Case Studies
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mx-auto px-8">
          These projects highlight my journey through leading teams at Bridge Global and IQness, focusing on scalable React architectures, mentored development workflows, and a 'test-first' methodology to ensure enterprise-grade reliability.
        </p>
      </div>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <div key={i} className="group border border-slate-300 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors text-left">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-700">{p.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{p.role}</span>
                  </div>
                </div>
                <p className="text-sm text-left text-slate-700 mb-3 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(s => (
                    <span key={s} className="text-[11px] text-slate-700 bg-slate-100 px-2 py-1 rounded font-medium">
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