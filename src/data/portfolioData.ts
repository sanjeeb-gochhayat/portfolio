export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent: boolean;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  courses: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  badge: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  category: 'UI/UX' | 'Accessibility & i18n' | 'Design Systems' | 'Performance';
  description: string;
  accentColor: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "SANJEEB GOCHHAYAT",
    role: "Frontend Engineer",
    secondaryRole: "Associate Consultant • React.js Specialist",
    headline: "Frontend Engineer building scalable, high-performance web applications.",
    subHeadline: "React.js • JavaScript • TypeScript • Component Architecture • WCAG & i18n",
    intro: "Frontend Engineer with 4.5+ years of experience building scalable, high-performance web applications using React.js. Specialized in developing pixel-perfect, WCAG-compliant user interfaces for enterprise banking and project management applications.",
    status: "Associate Consultant at Infosys",
    location: "Hyderabad, India • Open to Worldwide Opportunities",
    contact: {
      email: "sanjeebgochhayat1999@gmail.com",
      phone: "+91-73771-88155",
      github: "https://github.com/sanjeebgochhayat",
      linkedin: "https://linkedin.com/in/sanjeebgochhayat",
      twitter: "https://twitter.com/sanjeeb_dev",
    }
  },

  about: {
    heading: "A developer who thinks in both code and pixels.",
    subheading: "Translating complex Figma designs into responsive, production-ready systems.",
    description: "Frontend Engineer with 4.5+ years of experience building scalable, high-performance web applications using React.js. Specialized in developing pixel-perfect, WCAG-compliant user interfaces for enterprise banking and project management applications. Strong focus on clean architecture, reusable component design, and performance optimization. Adept at translating complex Figma designs into responsive, production-ready applications with internationalization support.",
    pillars: [
      {
        id: "frontend",
        title: "Frontend Engineering",
        subtitle: "Architecture & Scale",
        description: "React.js, JavaScript, TypeScript, Redux, ExpressJS, reusable component design, and scalable frontend architectures.",
        badge: "Core Stack",
        icon: "Code2",
        details: [
          "Enterprise banking application engineering",
          "Component lifecycle & rendering performance",
          "State management with Redux & custom hooks",
          "Translating complex Figma mockups into code"
        ]
      },
      {
        id: "accessibility",
        title: "Accessibility & i18n",
        subtitle: "WCAG & Global Reach",
        description: "Pixel-perfect WCAG compliance, ARIA landmark roles, semantic HTML, and internationalization with i18next.",
        badge: "Standards",
        icon: "Palette",
        details: [
          "WCAG compliance & full keyboard navigation",
          "ARIA roles & screen-reader compatibility",
          "Multi-language i18n with i18next",
          "Zero layout shift across varied languages"
        ]
      },
      {
        id: "problem-solving",
        title: "Workflow Automation",
        subtitle: "50% Manual Effort Reduction",
        description: "Streamlining end-to-end project lifecycles, demand management, resource allocation, and automated reporting.",
        badge: "Impact",
        icon: "Cpu",
        details: [
          "Reduced manual effort by 50% via automated flows",
          "Demand generation & resource allocation modules",
          "Interactive dashboards with dynamic visualizations",
          "QA compliance & risk management audit engines"
        ]
      },
      {
        id: "continuous-learning",
        title: "CS & Lifelong Learning",
        subtitle: "BCA Foundations & Certifications",
        description: "Computer Application graduate with strong computer science fundamentals, data structures, and continuous upskilling.",
        badge: "Accreditation",
        icon: "Sparkles",
        details: [
          "Bachelor of Computer Application (July 2015 - June 2018)",
          "Value Card Award recognized by Department Director",
          "Namaste React certification (Namastedev.com)",
          "Responsive Web Design certification (FreeCodeCamp)"
        ]
      }
    ]
  },

  experiences: [
    {
      id: "infosys",
      company: "Infosys",
      role: "Associate Consultant",
      location: "Hyderabad, India",
      period: "Dec 2025 - Present",
      isCurrent: true,
      points: [
        "Developed enterprise-grade banking web applications by translating Figma designs into pixel-perfect, responsive UIs across multiple devices.",
        "Implemented internationalization (i18n) using i18next and built WCAG-compliant accessible components with ARIA and semantic HTML.",
        "Improved performance and maintainability by designing reusable components and ensuring cross-browser compatibility."
      ],
      technologies: ["React.js", "JavaScript", "TypeScript", "i18next", "WCAG", "ARIA", "Figma", "Redux"]
    },
    {
      id: "incture",
      company: "Incture Technologies",
      role: "Associate Software Engineer",
      location: "Bhubaneswar, India",
      period: "May 2022 - Dec 2025",
      isCurrent: false,
      points: [
        "Automated end-to-end project life cycle workflows, reducing manual effort by 50 percent and improving operational efficiency.",
        "Built scalable frontend modules for demand generation, resource allocation, and project management systems.",
        "Designed interactive dashboards and reporting tools with dynamic visualizations to enable data-driven decision-making."
      ],
      technologies: ["React.js", "JavaScript", "Redux", "ExpressJS", "Vite", "Jest", "CSS3", "Git"]
    }
  ] as ExperienceItem[],

  education: [
    {
      id: "ibmt",
      institution: "Institute of Business Management and Technology",
      degree: "Bachelor of Computer Application (BCA)",
      location: "Bhubaneswar, India",
      period: "July 2015 - June 2018",
      courses: ["Data Structures", "Web Development with HTML, CSS, and JavaScript", "Databases", "OOPS"]
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "value-card",
      title: "Value Card Award",
      issuer: "Department Director Recognition",
      date: "Awarded at Incture Technologies",
      description: "Recognized by the Department Director for exceptional contributions to the team and outstanding engineering delivery.",
      badge: "Honor & Award"
    },
    {
      id: "namaste-react",
      title: "Namaste React",
      issuer: "Namastedev.com",
      date: "September, 2023",
      description: "Deep dive into React engine internals, reconciliation, fiber architecture, hooks mechanics, and performance optimization.",
      badge: "Certified"
    },
    {
      id: "fcc-rwd",
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "November, 2021",
      description: "Comprehensive mastery of responsive web principles, CSS Grid, Flexbox, media queries, and semantic accessible HTML.",
      badge: "Certified"
    }
  ] as CertificationItem[],

  creativeWorks: [
    {
      id: "creative-1",
      title: "Enterprise Figma to React Design Fidelity",
      category: "UI/UX",
      description: "Translating multi-breakpoint banking mockups from Figma into pixel-perfect React components with exact spatial spacing and typography.",
      accentColor: "#38bdf8",
      tags: ["Figma", "Pixel-Perfect", "React.js", "Tailwind CSS"]
    },
    {
      id: "creative-2",
      title: "Accessible Design Systems (WCAG & ARIA)",
      category: "Accessibility & i18n",
      description: "Constructing inclusive user interfaces that meet strict enterprise WCAG accessibility standards with full keyboard traversal and screen reader parity.",
      accentColor: "#a855f7",
      tags: ["WCAG", "ARIA", "Semantic HTML", "Inclusive Design"]
    },
    {
      id: "creative-3",
      title: "Dynamic Telemetry & Reporting Visualizations",
      category: "Performance",
      description: "Engineering responsive dashboard reporting interfaces with dynamic charting to transform raw project metrics into actionable business intelligence.",
      accentColor: "#34d399",
      tags: ["Dashboards", "Data Visualization", "50% Effort Reduction", "rAF"]
    },
    {
      id: "creative-4",
      title: "Global Internationalization Architecture (i18n)",
      category: "Design Systems",
      description: "Deploying robust i18next multilingual infrastructure across enterprise banking portals, handling dynamic currencies, date formats, and localized strings.",
      accentColor: "#f59e0b",
      tags: ["i18next", "Global Systems", "Banking Web", "Enterprise UI"]
    }
  ] as CreativeItem[]
};
