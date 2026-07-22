import { useState, useEffect, type Dispatch, type SetStateAction } from 'react';
import {
  Users, Target, Search, Lightbulb, PenTool, BarChart3,
  ExternalLink, ArrowLeft, CheckCircle2, FolderGit2,
  BookOpen, Target as TargetIcon, Brain, Star, Leaf,
  ZoomIn, X, PlayCircle, PieChart, TrendingUp,
  type LucideIcon
} from 'lucide-react';

// Prefix for assets in the /public folder so they resolve correctly
const BASE_URL = import.meta?.env?.BASE_URL || '';

type SetView = Dispatch<SetStateAction<string>>;

interface PlaceholderImageProps {
  title: string;
  icon: LucideIcon;
  aspectRatio?: string;
  src?: string;
  onClick?: () => void;
}

interface ProjectPortfolioProps {
  setView: SetView;
}

interface ReflectionViewProps {
  studentId: string;
  setView: SetView;
}

const TEAM_MEMBERS = [
    {
    id: 'syafiq',
    name: 'Mohamad Syafiq Bin Mohd Tohid',
    idNumber: '2025195737 ',
    role: 'Project Leader & UI Developer',
    avatar: `${BASE_URL}/images/syafiq.jpg`,
    reflection: {
      learning: {
        what: "I am learning how to conduct deep user research, utilizing empathy maps and persona profiling to understand our target demographic.",
        why: "Because an application is useless if it doesn't align with the actual habits, pains, and gains of its intended users.",
        project: "This project taught me that students aren't necessarily opposed to recycling; they are simply deterred by the friction and inconvenience of the current campus infrastructure."
      },
      goals: {
        progress: "By continuously cross-referencing our prototype features with our 5 User Personas to ensure every pain point was addressed.",
        help: "The 5W1H framework provided a solid foundation to keep our research focused on specific, actionable campus issues.",
        preventing: "Gathering accurate, unbiased data from a diverse set of students was challenging and initially delayed our problem-finding phase."
      },
      dynamics: {
        help: "My team helped me synthesize raw interview data into clear, concise Fishbone diagrams, making the root problems visible to everyone.",
        encourage: "When I felt overwhelmed by the amount of data we collected, my peers stepped in to help categorize the findings into logical themes."
      },
      thinking: {
        goodAt: "I am highly capable at empathizing with users and translating their verbal feedback into structured user requirements.",
        limitations: "I occasionally struggle with the technical prototyping tools (like Figma or React) to bring the research to life visually.",
        madeMeThink: "Developing the 'Student Awareness & Lifestyle' branch of the Fishbone diagram forced me to think deeply about psychological barriers rather than just physical ones.",
        mistakes: "I initially assumed all students wanted monetary rewards. Learning that academic merits were equally valuable taught me to never assume user preferences without proper profiling."
      },
      other: {
        like: "I loved the collaborative nature of the SCAMPER workshop, where wild ideas were welcomed and refined.",
        workOnNow: "I need to work on translating research into UI/UX wireframes more efficiently.",
        future: "I will strive to integrate more quantitative data analysis (like SUS scoring) into my qualitative research methods.",
        remember: "The realization that a simple UI change could drastically alter a student's willingness to recycle is something I'll carry into my career."
      }
    }
  },
   {
    id: 'faiz',
    name: 'Muhammad Faiz Ellmy Bin Rizatulnizam',
    idNumber: '2025130553',
    role: 'UX Researcher & Analyst',
    avatar: `${BASE_URL}/images/faiz.PNG`,
    reflection: {
      learning: {
        what: "I am learning to utilize design thinking principles to create intuitive, engaging, and accessible mobile interfaces for campus students.",
        why: "To ensure that the digital solutions we propose are actually adopted by the users, reducing cognitive load and maximizing usability.",
        project: "I learned how to apply the 'Modify/Minify' aspect of SCAMPER directly to UI design—stripping away complex menus for a lightweight, fast-loading experience."
      },
      goals: {
        progress: "I knew I was progressing when our initial paper sketches evolved into high-fidelity Figma screens that accurately reflected our proposed solutions.",
        help: "Constant feedback loops and rapid iteration sessions with the team helped me refine the visual hierarchy of the app.",
        preventing: "Balancing the desire to add innovative features with the necessity of keeping the app 'lightweight' was a constant creative struggle."
      },
      dynamics: {
        help: "My team provided the core functional requirements, which gave me the boundaries I needed to design effective user flows.",
        encourage: "When I hit a creative block designing the Route Generator map, the team encouraged me to look at transit maps for inspiration, which broke the block."
      },
      thinking: {
        goodAt: "I am skilled at visual communication, layout design, and creating cohesive branding (like our green sustainability theme).",
        limitations: "I can sometimes focus too much on aesthetics, temporarily losing sight of the backend technical constraints.",
        madeMeThink: "Figuring out how to visualize an 'AI Photo Scanner' in a static prototype without it looking fake or confusing required significant creative problem-solving.",
        mistakes: "I made the initial reward redemption screen too complicated. By testing it mentally against our persona 'Aiman Nazhif', I learned to simplify the UI."
      },
      other: {
        like: "I really enjoyed designing the gamification elements, like the badges and the interactive timeline for the smart drop-off route.",
        workOnNow: "I need to improve my understanding of responsive CSS to ensure my designs translate perfectly to code.",
        future: "I want to delve deeper into interaction design and micro-animations to make future projects feel even more alive.",
        remember: "Seeing my initial rough sketches transform into a fully functional-looking prototype is a proud memory I will retain forever."
      }
    }
  },
    {
    id: 'amirah',
    name: 'Amirah Hajar Binti Nor Hazani',
    idNumber: '2025385861',
    role: 'Content Analysis and Sketcher',
    avatar: `${BASE_URL}/images/hajar.jpg`,
    reflection: {
      learning: {
        what: "I am learning how to structure testing protocols, evaluate usability using metrics like SUS (System Usability Scale), and craft compelling content.",
        why: "To validate our creative assumptions objectively and ensure the final product meets high quality and educational standards.",
        project: "I learned that even the most innovative ideas (like the Dorm-to-Dorm Pickup) require clear, concise instructions within the app to be utilized correctly."
      },
      goals: {
        progress: "I monitored our progress through structured peer review sessions and checking off the requirements defined in our Workshop 1 and 2 documentation.",
        help: "The clearly defined 'Use Case Exploration Canvas' provided an excellent checklist for my testing scenarios.",
        preventing: "Finding adequate time to simulate comprehensive user testing within the tight academic deadlines was a major hurdle."
      },
      dynamics: {
        help: "The team was highly receptive to my critical feedback during the prototyping phase, willing to make changes when a feature failed a usability check.",
        encourage: "When compiling the final presentation and feeling the pressure of documentation, my teammates stepped in to help organize the assets and data."
      },
      thinking: {
        goodAt: "I excel at finding logical loopholes in user flows, ensuring that every button click leads to a predictable and helpful outcome.",
        limitations: "I sometimes struggle to generate the initial 'wild' ideas during brainstorming, preferring to refine and evaluate existing concepts instead.",
        madeMeThink: "Developing the 'Daily Eco-Quiz' feature made me think critically about how to gamify learning without it feeling like an academic chore.",
        mistakes: "I initially overlooked the edge case of students not knowing how to classify e-waste. This mistake taught me the importance of providing in-app guidance and 'Help' sections."
      },
      other: {
        like: "I appreciated the comprehensive nature of this project—we didn't just build an app; we researched a real environmental issue at UiTM.",
        workOnNow: "I need to work on being more vocal during the early, unstructured phases of ideation.",
        future: "I plan to study advanced UX copywriting to better guide users through complex digital processes in the future.",
        remember: "I will forever remember the satisfaction of finalizing our SCAMPER framework, seeing how drastically it improved our initial, basic idea."
      }
    }
  },
  {
    id: 'hasif',
    name: 'Hasif Irfan Bin Sapuan',
    idNumber: '2025342669',
    role: '',
    avatar: `${BASE_URL}/images/hasif.jpg`,
    reflection: {
      learning: {
        what: "I am learning how to apply critical and creative thinking frameworks (like SCAMPER and Fishbone diagrams) to solve real-world problems in software development.",
        why: "To transition from just writing code to actually designing solutions that address genuine user pain points effectively.",
        project: "I learned that developing a campus recycling app isn't just about UI/UX; it's about understanding the logistics, campus infrastructure, and human psychology regarding waste disposal."
      },
      goals: {
        progress: "I tracked my progress against our Use Case Exploration Canvas. Seeing our initial problem statements translate into tangible app features (like the Smart Route Generator) showed we were hitting our milestones.",
        help: "The structured workshops and consistent communication with my team members kept me aligned with our core objectives.",
        preventing: "Time constraints due to other assignments occasionally slowed down our prototyping phase, but proper task delegation helped overcome this."
      },
      dynamics: {
        help: "My peers provided excellent insights during the ideation phase, especially when identifying the root causes of poor recycling habits among resident students.",
        encourage: "When we struggled to figure out an innovative gamification feature, the team brainstormed together until we came up with the direct Mixue Wallet injection idea, which motivated me to push forward."
      },
      thinking: {
        goodAt: "I excel at analyzing technical feasibility and structuring the overall flow of the application to ensure it is lightweight and user-friendly.",
        limitations: "I sometimes struggle with the initial visual design aesthetics and rely heavily on my team's input for UI color theory and layout.",
        madeMeThink: "Applying the 'Reverse' lens in SCAMPER to flip the traditional reward timeline into an instant-gratification model really challenged my conventional way of thinking about user retention.",
        mistakes: "Initially, I overcomplicated the map feature. Realizing the mistake during peer discussions taught me that minifying the UI to focus only on 'Quick-Drop Routes' is much more effective."
      },
      other: {
        like: "I deeply appreciate the real-world impact this project aims to achieve for UiTM Arau's sustainability efforts.",
        workOnNow: "I need to improve my time-management skills to balance intensive prototyping with documentation.",
        future: "I plan to explore more advanced user-testing methodologies for future software projects.",
        remember: "I will always remember the moment our team had when we came up with the idea of integrating the university merit system with our app's recycling points."
      }
    }
  }
];

const PlaceholderImage = ({ title, icon: Icon, aspectRatio = "aspect-video", src, onClick }: PlaceholderImageProps) => {
  if (src) {
    return (
      <div
        className={`w-full ${aspectRatio} rounded-2xl overflow-hidden shadow-sm border border-gray-200 group relative bg-gray-50 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); } : undefined}
      >
        <img src={src} alt={title} className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" />
        {onClick && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 text-white font-semibold text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
              <ZoomIn className="w-4 h-4" /> Click to enlarge
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={`w-full ${aspectRatio} bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-gray-400 hover:bg-gray-50 transition-colors`}>
      <Icon className="w-12 h-12 mb-3 text-gray-300" />
      <span className="font-semibold text-center text-sm">{title}</span>
      <span className="text-xs mt-1 text-center opacity-70">Image / Asset Placeholder</span>
    </div>
  );
};

function ImageLightbox({ image, onClose }: { image: { src: string; title: string } | null; onClose: () => void }) {
  useEffect(() => {
    if (!image) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors"
        aria-label="Close enlarged image"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="max-w-5xl max-h-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain bg-white/5"
        />
        <p className="text-white/80 font-medium text-sm">{image.title}</p>
      </div>
    </div>
  );
}

function ProjectPortfolio({ setView }: ProjectPortfolioProps) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24 animate-fade-in">
      
      {/* HEADER / HERO */}
      <header className="text-center space-y-6 pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 font-semibold text-sm border border-green-200">
          <Leaf className="w-4 h-4" /> ICT500: Critical and Creative Thinking
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
          Uni <span className="text-green-600">Recycle</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          A comprehensive digital solution addressing campus waste management through innovative SCAMPER applications.
        </p>
      </header>

      {/* MEET THE TEAM */}
      <section id="team" className="space-y-8 pt-10 scroll-mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-500 mt-2">Class: RCDCS2403A | Prepared for: Dr. Siti Zulaiha Binti Ahmad</p>
          <p className="text-sm font-medium text-green-600 mt-4 animate-pulse">Click on a member to view their Self-Reflection Portfolio</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              onClick={() => setView(`reflection-${member.id}`)}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 cursor-pointer hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-4 overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg leading-tight">{member.name}</h3>
              <p className="text-sm font-mono text-gray-400 mt-1">{member.idNumber}</p>
              <div className="mt-4 inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GOAL & USERS */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 rounded-[3rem] p-8 md:p-12 text-white">
        <div className="space-y-6">
          <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Project Goals</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-400 shrink-0"/> Encourage students to practice recycling regularly.</li>
            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-400 shrink-0"/> Make recycling easier and more accessible on the UiTM campus.</li>
            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-400 shrink-0"/> Increase awareness about sustainability via gamification.</li>
            <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-400 shrink-0"/> Reward students for active environmental participation.</li>
          </ul>
        </div>
        <div className="space-y-6 bg-gray-800 p-8 rounded-3xl border border-gray-700">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-400" /> Target Users
          </h3>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">UiTM University Students</strong> (both resident and non-resident) who want to recycle but face significant barriers in their everyday campus life.
          </p>
          <div className="pt-4 border-t border-gray-700">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Identified Pain Points</h4>
            <div className="flex flex-wrap gap-2">
              {['No nearby bins', 'Full capacity bins', 'Busy schedules', 'Lack of knowledge', 'No incentives'].map(pain => (
                <span key={pain} className="bg-gray-700 text-gray-200 text-xs px-3 py-1.5 rounded-lg border border-gray-600">{pain}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM FINDING & IDEATION */}
      <section id="process" className="space-y-10 pt-10 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Problem Finding & Ideation</h2>
          <p className="text-gray-500 mt-3">Utilizing critical thinking frameworks from Workshop 1 & 2 to map root causes and brainstorm innovative solutions.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Search className="w-5 h-5 text-green-600"/> Fishbone Diagram</h3>
            <p className="text-sm text-gray-600 mb-4">Root cause analysis of poor campus recycling practices.</p>
            <PlaceholderImage
              title="Fishbone Diagram"
              icon={Brain}
              src={`${BASE_URL}/images/fishbone.PNG`}
              onClick={() => setLightboxImage({ src: `${BASE_URL}/images/fishbone.PNG`, title: 'Fishbone Diagram' })}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2"><Lightbulb className="w-5 h-5 text-yellow-500"/> SCAMPER Framework</h3>
            <p className="text-sm text-gray-600 mb-4">Ideation process yielding features like Instant Rewards and AI Scanning.</p>
            <PlaceholderImage
              title="SCAMPER Framework"
              icon={Lightbulb}
              src={`${BASE_URL}/images/scamper.png`}
              onClick={() => setLightboxImage({ src: `${BASE_URL}/images/scamper.png`, title: 'SCAMPER Framework' })}
            />
          </div>
        </div>
      </section>

      {/* PROTOTYPING PROCESS */}
      <section className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-gray-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Prototyping Process</h2>
          <p className="text-gray-500 mt-3">From low-fidelity paper sketches to high-fidelity interactive digital designs.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <PlaceholderImage
            title="Sketch 1"
            icon={PenTool}
            aspectRatio="aspect-[3/4]"
            src={`${BASE_URL}/images/sketch_1.PNG`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/sketch_1.PNG`, title: 'Sketch 1' })}
          />
          <PlaceholderImage
            title="Sketch 2"
            icon={PenTool}
            aspectRatio="aspect-[3/4]"
            src={`${BASE_URL}/images/sketch_2.jpg`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/sketch_2.jpg`, title: 'Sketch 2' })}
          />
          <PlaceholderImage
            title="Real UI Design"
            icon={TargetIcon}
            aspectRatio="aspect-[3/4]"
            src={`${BASE_URL}/images/real_ui_design.JPG`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/real_ui_design.JPG`, title: 'Real UI Design' })}
          />
        </div>
      </section>

      {/* TESTING WITH USERS */}
      <section className="space-y-10" id="testing" scroll-mt-20>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Testing with Users</h2>
          <p className="text-gray-500 mt-3">Validating our prototype through structured questionnaires and System Usability Scale (SUS) calculations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PlaceholderImage
            title="Questionnaire"
            icon={BookOpen}
            aspectRatio="aspect-square"
            src={`${BASE_URL}/images/questionaire.jpg`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/questionaire.jpg`, title: 'Questionnaire Screenshot' })}
          />
          <PlaceholderImage 
            title="SUS Score" 
            icon={BarChart3} 
            aspectRatio="aspect-square" 
            src={`${BASE_URL}/images/sus_score.JPG`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/sus_score.JPG`, title: 'System Usability Scale (SUS) Score' })}
          />
          <PlaceholderImage 
            title="Feedback Pie Chart" 
            icon={PieChart} 
            aspectRatio="aspect-square" 
            src={`${BASE_URL}/images/pie_chart.JPG`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/pie_chart.JPG`, title: 'User Feedback Pie Chart' })}
          />
          <PlaceholderImage 
            title="Feedback Bar Chart" 
            icon={TrendingUp} 
            aspectRatio="aspect-square" 
            src={`${BASE_URL}/images/bar_chart.JPG`}
            onClick={() => setLightboxImage({ src: `${BASE_URL}/images/bar_chart.JPG`, title: 'User Feedback Bar Chart' })}
          />
        </div>
      </section>

      {/* FINAL DEMO */}
      <section id="demo" className="max-w-4xl mx-auto space-y-8 pt-10 scroll-mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Final Demo</h2>
          <p className="text-gray-500 mt-3">Watch how Uni Recycle transforms the student recycling experience.</p>
        </div>
        
        <div className="bg-gray-900 rounded-3xl p-2 md:p-3 relative group overflow-hidden shadow-2xl">
          <div className="w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/XrMQioYx3Z8"
              title="Uni Recycle Video Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* OPEN PROTOTYPE CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 rounded-[3rem] p-10 md:p-16 text-center text-white shadow-2xl">
        <div className="relative space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-sm font-semibold">
            <PlayCircle className="w-4 h-4" /> Live Interactive Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Try the Prototype Yourself</h2>
          <p className="text-lg text-white/90">
            Explore every screen of Uni Recycle firsthand — scan items, generate pickup routes, and redeem rewards in our fully interactive static prototype.
          </p>
          <a
            href="https://syffiq.github.io/uni-recycle-prototype/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-green-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Open Prototype <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Project Resources</h2>
          <p className="text-gray-500 mt-3">Source code repositories for this portfolio site and the interactive prototype.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://github.com/SYFFIQ/uni-recycle-prototype"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 transition-colors p-8 rounded-3xl flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 group-hover:bg-gray-700 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                <FolderGit2 className="w-6 h-6 text-white" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-lg text-white truncate">Uni Recycle Prototype</h3>
                <p className="text-sm text-gray-400 truncate">github.com/SYFFIQ/uni-recycle-prototype</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors shrink-0 ml-4" />
          </a>

          <a
            href="https://github.com/SYFFIQ/uni-recycle-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 hover:bg-gray-800 transition-colors p-8 rounded-3xl flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 group-hover:bg-gray-700 rounded-2xl flex items-center justify-center shrink-0 transition-colors">
                <FolderGit2 className="w-6 h-6 text-white" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-lg text-white truncate">Uni Recycle Portfolio</h3>
                <p className="text-sm text-gray-400 truncate">github.com/SYFFIQ/uni-recycle-portfolio</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors shrink-0 ml-4" />
          </a>
        </div>
      </section>

    </div>

    <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}

function ReflectionView({ studentId, setView }: ReflectionViewProps) {
  const student = TEAM_MEMBERS.find(m => m.id === studentId);
  if (!student) return null;

  const { reflection } = student;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in-down pb-24 mt-8">
      
      <button 
        onClick={() => setView('project')}
        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium mb-8 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Project Portfolio
      </button>

      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
        <div className="w-32 h-32 bg-gray-100 rounded-full overflow-hidden border-4 border-gray-50 shrink-0 shadow-inner">
          <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-green-600 font-bold tracking-widest text-xs mb-2 uppercase">Student Portfolio • Self Reflection</h4>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">{student.name}</h1>
          <div className="flex flex-col md:flex-row items-center gap-3 text-gray-500 font-medium">
            <span className="font-mono bg-gray-100 px-3 py-1 rounded-md text-sm">{student.idNumber}</span>
            <span className="hidden md:block">•</span>
            <span>{student.role}</span>
          </div>
        </div>
      </div>

      {/* Reflection Content Grid */}
      <div className="space-y-8">
        
        {/* Section 1: Reflecting on Learning */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <BookOpen className="w-6 h-6 text-blue-500" /> Reflecting on Learning
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What am I learning?</h3>
              <p className="text-gray-600 leading-relaxed">{reflection.learning.what}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Why am I learning it?</h3>
              <p className="text-gray-600 leading-relaxed">{reflection.learning.why}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">What did I learn about this project?</h3>
              <p className="text-blue-800/80 leading-relaxed">{reflection.learning.project}</p>
            </div>
          </div>
        </section>

        {/* Section 2: Reflecting on Project Goals */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <TargetIcon className="w-6 h-6 text-red-500" /> Reflecting on Project Goals
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How did I know that I was making progress toward my goals?</h3>
              <p className="text-gray-600 leading-relaxed">{reflection.goals.progress}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
                <h3 className="font-semibold text-green-900 mb-2">What is helping me reach my goals?</h3>
                <p className="text-green-800/80 text-sm leading-relaxed">{reflection.goals.help}</p>
              </div>
              <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                <h3 className="font-semibold text-red-900 mb-2">What is preventing me from reaching my goals?</h3>
                <p className="text-red-800/80 text-sm leading-relaxed">{reflection.goals.preventing}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Reflecting on Group Dynamics */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <Users className="w-6 h-6 text-purple-500" /> Reflecting on Group Dynamics
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How did my peers help me to reach my goals?</h3>
              <p className="text-gray-600 leading-relaxed">{reflection.dynamics.help}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How did my peers encourage me to keep going when I was stuck?</h3>
              <p className="text-gray-600 leading-relaxed border-l-4 border-purple-300 pl-4 italic">{reflection.dynamics.encourage}</p>
            </div>
          </div>
        </section>

        {/* Section 4: Critical and Creative Thinking */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <Brain className="w-6 h-6 text-amber-500" /> Reflecting on Critical & Creative Thinking
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What am I good at?</h3>
                <p className="text-gray-600 leading-relaxed">{reflection.thinking.goodAt}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What are my limitations?</h3>
                <p className="text-gray-600 leading-relaxed">{reflection.thinking.limitations}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What made me really think?</h3>
                <p className="text-gray-600 leading-relaxed">{reflection.thinking.madeMeThink}</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100">
                <h3 className="font-semibold text-amber-900 mb-2">How did I learn when I made mistakes?</h3>
                <p className="text-amber-800/80 text-sm leading-relaxed">{reflection.thinking.mistakes}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Other Reflection Questions */}
        <section className="bg-gray-900 p-8 rounded-3xl shadow-xl text-gray-300">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
            <Star className="w-6 h-6 text-yellow-400 fill-current" /> Final Thoughts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-5 rounded-2xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2">What I really like about this project</h3>
              <p className="text-sm leading-relaxed">{reflection.other.like}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2">Something I really need to work on NOW</h3>
              <p className="text-sm leading-relaxed">{reflection.other.workOnNow}</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl border border-gray-700">
              <h3 className="font-semibold text-white mb-2">To improve myself in the future</h3>
              <p className="text-sm leading-relaxed">{reflection.other.future}</p>
            </div>
            <div className="bg-green-900/40 p-5 rounded-2xl border border-green-700">
              <h3 className="font-semibold text-green-300 mb-2">One thing I will remember forever</h3>
              <p className="text-sm text-green-100 leading-relaxed font-medium italic">"{reflection.other.remember}"</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState('project'); // 'project' | 'reflection-hasif' | etc.

  // Utility function for top navigation
  const navigateTo = (view: string, hash?: string) => {
    setCurrentView(view);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Slight delay to ensure DOM is updated if coming from ReflectionView
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-green-200">
      
      {/* Top Navigation */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => navigateTo('project')}
          >
            <div className="bg-green-100 p-1.5 rounded-lg group-hover:bg-green-200 transition-colors">
              <Leaf className="w-5 h-5 text-green-700" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-green-700 transition-colors">
              Uni Recycle
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-gray-600">
            {currentView === 'project' ? (
              <>
                <button onClick={() => navigateTo('project', 'team')} className="hover:text-green-600 transition-colors hidden sm:block">Team</button>
                <button onClick={() => navigateTo('project', 'process')} className="hover:text-green-600 transition-colors hidden sm:block">Process</button>
                <button onClick={() => navigateTo('project', 'testing')} className="hover:text-green-600 transition-colors hidden sm:block">Testing</button>
                <button onClick={() => navigateTo('project', 'demo')} className="hover:text-green-600 transition-colors hidden sm:block">Demo</button>
              </>
            ) : (
              <button 
                onClick={() => navigateTo('project')} 
                className="hover:text-green-600 transition-colors flex items-center gap-1"
              >
                Home
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Dynamic View Rendering */}
      {currentView === 'project' ? (
        <ProjectPortfolio setView={setCurrentView} />
      ) : (
        <ReflectionView 
          studentId={currentView.replace('reflection-', '')} 
          setView={setCurrentView} 
        />
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-12 text-center text-sm text-gray-400">
        <p>Uni Recycle Portfolio Site &copy; 2026. Designed for ICT500.</p>
      </footer>
      
    </div>
  );
}

// Global styles injected for custom animations
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
  }
  .animate-fade-in-down {
    animation: fade-in-down 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
`;
document.head.appendChild(styleSheet);