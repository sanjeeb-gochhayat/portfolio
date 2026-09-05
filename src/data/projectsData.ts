export interface ProjectItem {
  id: string;
  title: string;
  company: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  problemSolved: string;
  technologies: string[];
  myContribution: string;
  keyChallenge: string;
  impactResult: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
  architectureHighlights: string[];
  previewType: 'interactive-ui' | 'dashboard' | '3d-canvas' | 'algorithmic';
}

export const projectsData: ProjectItem[] = [
  {
    id: "banking-web-apps",
    title: "Banking Web Applications",
    company: "Infosys (Dec 2025 - Present)",
    subtitle: "Enterprise-Grade Accessible Banking Portal",
    category: "Enterprise Banking / FinTech",
    shortDescription: "Secure, scalable enterprise banking web applications translated from Figma designs into pixel-perfect, fully responsive React components with internationalization (i18n) and strict WCAG accessibility compliance.",
    problemSolved: "Enterprise banking interfaces require uncompromising security, seamless cross-device responsiveness, multi-language internationalization, and strict WCAG accessibility standards for diverse customer bases.",
    technologies: ["React.js", "TypeScript", "JavaScript", "i18next", "ARIA / WCAG", "Figma", "Redux", "Semantic HTML"],
    myContribution: "Translated complex Figma designs into responsive React components, implemented internationalization using i18next, engineered WCAG-compliant accessible UI with ARIA roles, and designed reusable component systems for cross-browser stability.",
    keyChallenge: "Ensuring 100% WCAG accessibility compliance and keyboard navigation across complex multi-step banking flows while preserving pixel-perfect visual fidelity to Figma designs.",
    impactResult: "Delivered production-ready, internationalized banking interfaces with full accessibility compliance and improved long-term component maintainability.",
    featured: true,
    accentColor: "#38bdf8",
    previewType: "interactive-ui",
    architectureHighlights: [
      "Internationalization architecture using i18next with dynamic locale switching",
      "WCAG 2.1 AA compliance with ARIA live regions and keyboard focus traps",
      "Reusable component design system ensuring cross-browser compatibility"
    ]
  },
  {
    id: "workflow-automation-platform",
    title: "Project Management & Workflow Automation",
    company: "Incture Technologies (May 2022 - Dec 2025)",
    subtitle: "End-to-End Enterprise Operations Engine",
    category: "Enterprise Operations / SaaS",
    shortDescription: "A comprehensive internal enterprise platform streamlining project creation, demand management, talent allocation, timesheet tracking, and executive reporting with dynamic data visualizations.",
    problemSolved: "Fragmented manual processes across project creation, staffing, and time tracking caused administrative overhead, delayed reporting, and low operational visibility.",
    technologies: ["React.js", "JavaScript", "Redux", "ExpressJS", "Vite", "Jest", "CSS3", "REST APIs"],
    myContribution: "Automated end-to-end project life cycle workflows, built scalable frontend modules for demand generation and resource allocation, and designed interactive dashboards with dynamic visualizations.",
    keyChallenge: "Structuring complex state synchronization across demand management, timesheets, and talent allocation modules while maintaining smooth rendering and fast query updates.",
    impactResult: "Reduced manual operational effort by 50 percent and enabled data-driven executive decision-making through real-time dashboards.",
    featured: true,
    accentColor: "#34d399",
    previewType: "dashboard",
    architectureHighlights: [
      "Automated lifecycle workflow engine reducing manual effort by 50%",
      "Interactive analytics dashboards with dynamic real-time reporting visualizations",
      "Modular Redux state architecture with isolated slice reducers and Jest unit tests"
    ]
  },
  {
    id: "qa-compliance-risk",
    title: "QA Compliance & Risk Management",
    company: "Incture Technologies (May 2022 - Dec 2025)",
    subtitle: "Enterprise Audit & Governance System",
    category: "Governance / Quality Assurance",
    shortDescription: "A mission-critical enterprise governance system facilitating risk management, structured audit workflows, and automated QA compliance enforcement across distributed delivery teams.",
    problemSolved: "Lack of centralized risk visibility and unstructured audit procedures resulted in compliance oversights and delayed remediation across engineering projects.",
    technologies: ["React.js", "JavaScript", "TypeScript", "Redux", "REST APIs", "Tailwind CSS", "Git"],
    myContribution: "Led end-to-end development of the risk management and QA audit frontend modules, establishing structured audit workflows, enforceability mechanisms, and risk status monitoring.",
    keyChallenge: "Designing an intuitive, audit-trail compliant UI capable of capturing detailed compliance checklists, approval stages, and risk matrix scores with zero data loss.",
    impactResult: "Significantly improved risk visibility, enforced organizational accountability, and enhanced overall project execution quality across multiple client deliveries.",
    featured: true,
    accentColor: "#a855f7",
    previewType: "3d-canvas",
    architectureHighlights: [
      "Structured multi-step audit workflow pipelines with state preservation",
      "Dynamic risk score matrix visualization with automated threshold triggers",
      "Clean component separation separating audit form logic from presentation layers"
    ]
  }
];
