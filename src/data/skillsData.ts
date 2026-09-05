export interface SkillNode {
  id: string;
  name: string;
  category: 'languages' | 'frameworks' | 'tools' | 'core-skills';
  level: string;
  description: string;
  highlight: string;
  tags: string[];
  // 3D position relative to center [x, y, z]
  coords: [number, number, number];
  color: string;
}

export const skillsData: SkillNode[] = [
  // Languages
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    level: "Core Strength",
    description: "Deep foundation in modern JavaScript (ES6+), closures, event loop, async/await, DOM APIs, and functional paradigms.",
    highlight: "Primary engineering language powering scalable web applications.",
    tags: ["ES6+", "Asynchronous JS", "Event Loop", "DOM Manipulation"],
    coords: [-2.2, 1.2, 0.4],
    color: "#F7DF1E"
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    level: "Proficient",
    description: "Static type systems, generic interfaces, strict type guards, and reliable component prop contracts.",
    highlight: "Writing type-safe, maintainable enterprise frontend code.",
    tags: ["Generics", "Type Inference", "Interfaces", "Strict Typing"],
    coords: [2.0, 1.4, -0.3],
    color: "#3178C6"
  },
  {
    id: "sql",
    name: "SQL",
    category: "languages",
    level: "Working Knowledge",
    description: "Relational database querying, schema understanding, table joins, filtering, and data aggregation.",
    highlight: "Understanding backend data modeling and query structures.",
    tags: ["Queries", "Joins", "Data Modeling", "CRUD"],
    coords: [-1.4, -2.1, 0.5],
    color: "#E38C00"
  },

  // Frameworks & State
  {
    id: "react",
    name: "React.js",
    category: "frameworks",
    level: "4.5+ Years Mastery",
    description: "Component lifecycle, custom hooks, virtual DOM, reconciliation, context API, and high-performance reusable UI architecture.",
    highlight: "Specialized in building scalable, enterprise-grade React web applications.",
    tags: ["Custom Hooks", "Reactivity", "Context API", "Component Tree"],
    coords: [0.0, 2.3, 0.6],
    color: "#61DAFB"
  },
  {
    id: "redux",
    name: "Redux",
    category: "frameworks",
    level: "Advanced",
    description: "Predictable state containers, Redux Toolkit, actions, reducers, middleware, and immutable state synchronization.",
    highlight: "Centralized, predictable state management across enterprise modules.",
    tags: ["Redux Toolkit", "Actions", "Reducers", "Normalized State"],
    coords: [1.8, -1.2, 0.7],
    color: "#764ABC"
  },
  {
    id: "express",
    name: "ExpressJS",
    category: "frameworks",
    level: "Working Knowledge",
    description: "RESTful route handlers, middleware integration, JSON API contracts, and server-side request processing.",
    highlight: "Full-stack understanding of client-server communication.",
    tags: ["REST APIs", "Middleware", "Node Runtime", "HTTP Protocol"],
    coords: [-2.5, 0.2, -0.8],
    color: "#FFFFFF"
  },

  // Tools
  {
    id: "git",
    name: "Git & Version Control",
    category: "tools",
    level: "Proficient",
    description: "Branching strategies, collaborative workflows, code review hygiene, merge conflict resolution, and release tagging.",
    highlight: "Disciplined version control across distributed enterprise teams.",
    tags: ["Git Flow", "Branching", "Code Reviews", "Semantic Commits"],
    coords: [-1.2, 1.9, -0.9],
    color: "#F05032"
  },
  {
    id: "figma",
    name: "Figma",
    category: "tools",
    level: "Advanced Translation",
    description: "Deep ability to inspect complex Figma design systems and translate them into pixel-perfect, responsive React components.",
    highlight: "Seamless bridge between UI/UX design vision and frontend code.",
    tags: ["Design Translation", "Auto-Layout", "Design Tokens", "Pixel Precision"],
    coords: [2.5, 0.2, -0.8],
    color: "#F24E1E"
  },
  {
    id: "vite",
    name: "Vite",
    category: "tools",
    level: "Proficient",
    description: "Modern lightning-fast build tooling, ESM development server, bundling configuration, and asset optimization.",
    highlight: "Blazing development velocity and lean production bundles.",
    tags: ["ESM Bundling", "HMR", "Build Pipeline", "Optimization"],
    coords: [1.3, 2.0, 0.8],
    color: "#646CFF"
  },
  {
    id: "jest",
    name: "Jest",
    category: "tools",
    level: "Testing & QA",
    description: "Unit testing, snapshot testing, mock functions, assertions, and test-driven component stability.",
    highlight: "Ensuring zero regressions and rock-solid code reliability.",
    tags: ["Unit Testing", "Test Assertions", "Mocking", "Regression Prevention"],
    coords: [-0.6, -1.9, 0.9],
    color: "#C21325"
  },
  {
    id: "i18next",
    name: "i18next (Internationalization)",
    category: "tools",
    level: "Specialized",
    description: "Multi-language localization architecture, dynamic translation namespaces, locale persistence, and RTL/LTR layout handling.",
    highlight: "Powering global enterprise banking applications with multi-locale reach.",
    tags: ["i18n", "Localization", "Dynamic Translation", "Global Reach"],
    coords: [0.8, -2.2, -0.4],
    color: "#26A69A"
  },

  // Core Skills
  {
    id: "wcag-accessibility",
    name: "Accessibility (WCAG & ARIA)",
    category: "core-skills",
    level: "Enterprise Standard",
    description: "WCAG 2.1 guidelines, semantic HTML5 landmarks, ARIA live regions, focus management, and screen-reader accessibility.",
    highlight: "Delivering inclusive web interfaces accessible to every user.",
    tags: ["WCAG 2.1 AA", "ARIA Roles", "Semantic HTML", "Keyboard Traversal"],
    coords: [-2.8, -0.8, 0.2],
    color: "#34D399"
  },
  {
    id: "component-architecture",
    name: "Component Architecture",
    category: "core-skills",
    level: "Senior Level",
    description: "Design systems, atomic modular components, composable APIs, clean folder hierarchies, and reusable pattern libraries.",
    highlight: "Crafting scalable component libraries that accelerate development.",
    tags: ["Reusable Design", "Separation of Concerns", "Design Systems", "Modularity"],
    coords: [2.2, -1.8, -0.6],
    color: "#A78BFA"
  },
  {
    id: "performance-optimization",
    name: "Performance Optimization",
    category: "core-skills",
    level: "Specialized",
    description: "Render profiling, memoization, code-splitting, lazy loading, DOM reflow minimization, and cross-browser consistency.",
    highlight: "Ensuring responsive, render-optimized user experiences across enterprise applications.",
    tags: ["Render Profiling", "React.memo", "Cross-Browser", "Zero Layout Shift"],
    coords: [-1.5, -1.8, -0.5],
    color: "#38BDF8"
  }
];

export const skillCategories = [
  { id: 'all', label: 'All Constellations' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks & State' },
  { id: 'tools', label: 'Tools & Testing' },
  { id: 'core-skills', label: 'Core Engineering' },
];
