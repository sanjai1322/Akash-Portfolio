import { LabProject } from '../utils/telemetry.ts';

export interface ExhibitItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  location: string;
  caption: string;
  detailedStory: string;
  imageUrl: string;
  aspect: string;
}

export interface MetricItem {
  value: string;
  suffix: string;
  label: string;
  description: string;
  highlight: string;
}

export interface ExperienceRole {
  company: string;
  division: string;
  role: string;
  period: string;
  client: string;
  location: string;
  summary: string;
  achievements: string[];
  metrics: MetricItem[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'AKASH A.',
    fullName: 'Akash Anjamani',
    role: 'QA & AUTOMATION ARCHITECT',
    title: 'Automation Test Engineer',
    location: 'Chennai, India',
    availability: 'Open for Roles Worldwide',
    email: 'ak10akash@gmail.com',
    github: 'https://github.com/akash-1024',
    githubUser: 'akash-1024',
    linkedin: 'https://linkedin.com/in/akash-anjamani',
    linkedinUser: 'akash-anjamani',
    portraitUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtfALHSTubtG6mf17h5BsMhhSDx8ihzDogMW5LCYnL69o8quYfTrS8UKwFxfmcocD5kFW191n8M3fmx6k0rsM7_MbA__OxEjwxoj4FMCW4JcV6K3ioEMPQpfF4xy5Go8wYuZGsNZ3J65jYGJXJ5xSefoJ9w1wobZ7W5Wlq4DRtAl7ms6g3TDtFgkPOONdfRgi5e13trK0VOjaQoeP87SRqawXAYmw1_XqBxhy1XjZ0OEeu2J2VbrKe6YQywwP4uRNasw',
    passRate: '99.84%',
    experienceYears: '2+',
  },

  manifestoTech: [
    'Selenium',
    'Playwright',
    'Java',
    'Python',
    'Jenkins',
    'CI/CD',
    'TestNG',
    'Cucumber BDD',
    'Rest Assured',
    'Docker',
  ],

  experience: {
    company: 'PRODAPT NORTH AMERICA',
    division: 'ENTERPRISE TELECOM',
    role: 'Associate Software Engineer',
    period: 'Nov 2024 — Present',
    client: 'Verizon Telecom Automation',
    location: 'Chennai, TN, India',
    summary:
      'Led test suite execution and framework enhancements for critical order orchestration platforms, streamlining enterprise release cycles through automated telemetry and proactive regression guards.',
    metrics: [
      {
        value: '80',
        suffix: '%',
        label: 'Reduction in Defect Leakage',
        description: 'Through proactive automated validation pipelines and shift-left unit test guards.',
        highlight: 'Saved 200+ hours of critical production triage',
      },
      {
        value: '90',
        suffix: '%',
        label: 'Regression Scenario Coverage',
        description: 'Across telecom core orchestration modules, billing, and provisioning flows.',
        highlight: 'Continuous nightly pipeline validation',
      },
      {
        value: '50',
        suffix: '+',
        label: 'Validated API Endpoints',
        description: 'Systematically validated via resilient automated REST test suites.',
        highlight: 'Deep payload and contract validation',
      },
      {
        value: '100',
        suffix: '+',
        label: 'Daily Automated Test Cases',
        description: 'Executed across continuous Jenkins CI/CD cycles with zero test flakiness.',
        highlight: 'Parallelized 16-thread grid cluster',
      },
    ],
  },

  featuredProject: {
    tag: 'MISSION CRITICAL TELECOM',
    client: 'PROJECT: VERIZON AUTOMATION',
    title: 'Verizon Telecom Automation Platform',
    headline: 'Engineering better releases.',
    description:
      'Full-stack automation testing architecture reducing manual regression overhead by 70%. Engineered parallel execution pipelines that safeguard billing pipelines, order journeys, and provisioning systems across 12,000+ daily customer workflows.',
    technologies: ['Selenium', 'Java', 'TestNG', 'Cucumber BDD', 'Playwright', 'Jenkins', 'RestAssured', 'Maven'],
    stats: {
      concurrency: '16 Workers',
      duration: '04m 12s',
      leakage: '0.00%',
      passRate: '99.84%',
      scenarios: '104 clean',
    },
    defaultLogs: [
      {
        id: 'log-1',
        timestamp: '09:14:02.118',
        level: 'INIT' as const,
        name: 'RunnerContext: Grid Hub initialized (grid.prodapt.internal:4444)',
        status: 'OK' as const,
        durationMs: 14,
        threadId: 1,
      },
      {
        id: 'log-2',
        timestamp: '09:14:02.340',
        level: 'EXEC' as const,
        name: 'OrderOrchestrationTest.verifyB2COrderProvisioning()',
        status: 'ASSERT_TRUE' as const,
        durationMs: 222,
        threadId: 3,
      },
      {
        id: 'log-3',
        timestamp: '09:14:02.890',
        level: 'EXEC' as const,
        name: 'BillingPipelineTest.verifyInvoiceGenerationPayload()',
        status: 'HTTP_200' as const,
        durationMs: 550,
        threadId: 2,
      },
      {
        id: 'log-4',
        timestamp: '09:14:03.412',
        level: 'DATA' as const,
        name: "Payload Validated: { accountId: 'VZ-90241', latency: 42ms }",
        status: 'PASS' as const,
        durationMs: 522,
        threadId: 4,
      },
      {
        id: 'log-5',
        timestamp: '09:14:04.004',
        level: 'COMPLETE' as const,
        name: 'RegressionSuiteMatrix: 104 executed, 0 failed, 0 flaked',
        status: 'PASS' as const,
        durationMs: 592,
        threadId: 1,
      },
    ],
  },

  labProjects: [
    {
      id: 'arch-01',
      code: 'ARCH-01 // JAVA',
      title: 'selenium-framework',
      category: 'Java / TestNG',
      description:
        'High-concurrency parallel Selenium WebDriver engine with automated driver management, TestNG listeners, and ExtentReports integration.',
      detailedOverview:
        'A production-proven automation blueprint engineered in Java 17 and Selenium 4. Incorporates Page Object Model (POM) pattern, dynamic element waits, thread-safe WebDriver instances via ThreadLocal, and automated multi-environment execution profiles.',
      techStack: ['Java', 'TestNG', 'Selenium 4', 'Maven', 'ExtentReports'],
      metrics: {
        coverage: '94%',
        speed: '4.2x Faster',
        stars: 18,
        tests: 180,
      },
      features: [
        'ThreadLocal WebDriver lifecycle management',
        'Dynamic Retry Analyzer for transient network glitches',
        'Rich HTML ExtentReports with automated screenshot capture on failure',
        'Cross-browser matrix: Chrome, Edge, Firefox, and Headless Chromium',
      ],
      cliSample: 'mvn clean test -DsuiteXmlFile=testng-parallel.xml -Dthreads=8',
      githubUrl: 'https://github.com/akash-1024/selenium-framework',
    },
    {
      id: 'arch-02',
      code: 'ARCH-02 // PYTHON',
      title: 'playwright-pytest-framework',
      category: 'Python / Playwright',
      description:
        'Fast, resilient headless execution engine utilizing Playwright Python bindings, async event loops, auto-waiting assertions, and Allure reports.',
      detailedOverview:
        'Modern ultra-fast testing pipeline built on Python 3.11 with Playwright and Pytest. Features asynchronous web socket interception, smart auto-waiting locators, network request stubbing, and zero flaky selectors.',
      techStack: ['Python', 'Pytest', 'Playwright', 'Allure', 'Docker'],
      metrics: {
        coverage: '97%',
        speed: '6.5x Faster',
        stars: 24,
        tests: 145,
      },
      features: [
        'Asynchronous pytest-xdist distributed multi-core workers',
        'Smart network route mocking and API response interception',
        'Trace Viewer artifacts generation for millisecond-level step replay',
        'Video and HAR recording on demand for regression audits',
      ],
      cliSample: 'pytest --numprocesses=auto --browser=chromium --tracing=retain-on-failure',
      githubUrl: 'https://github.com/akash-1024/playwright-pytest-framework',
    },
    {
      id: 'arch-03',
      code: 'ARCH-03 // BDD SPEC',
      title: 'cucumber-framework',
      category: 'Java / Cucumber BDD',
      description:
        'Human-readable Gherkin specification harness translating enterprise user stories directly into parameterized Java test scripts with zero ambiguity.',
      detailedOverview:
        'Enterprise Behavior-Driven Development (BDD) test harness connecting product stakeholders with automated regression. Combines Cucumber, Gherkin syntax, TestNG, and Picocontainer for dependency injection.',
      techStack: ['Java', 'Cucumber', 'Gherkin', 'TestNG', 'PicoContainer'],
      metrics: {
        coverage: '92%',
        speed: '3.1x Faster',
        stars: 14,
        tests: 210,
      },
      features: [
        'Gherkin scenarios with scenario outlines and dynamic data tables',
        'PicoContainer DI for clean state isolation across step definitions',
        'Cucumber HTML report publishing with step-by-step tags and timing',
        'Jira Xray and Zephyr synchronization tags integration',
      ],
      cliSample: 'mvn test -Dcucumber.filter.tags="@Regression and not @WIP"',
      githubUrl: 'https://github.com/akash-1024/cucumber-framework',
    },
    {
      id: 'arch-04',
      code: 'ARCH-04 // AI EXPERIMENTAL',
      title: 'Selenium-MCPilot',
      category: 'Python / MCP / Agentic QA',
      description:
        'Autonomous agent toolkit generating resilient Page Object Models and self-healing locator strategies via Model Context Protocol agents.',
      detailedOverview:
        'Next-generation experimental testing toolkit utilizing Model Context Protocol (MCP) to analyze DOM mutations, infer visual regression, and propose self-healing CSS/XPath locators when UI structures shift.',
      techStack: ['Python', 'MCP', 'AI Agent', 'Playwright', 'FastAPI'],
      metrics: {
        coverage: '89%',
        speed: 'Instant Self-Heal',
        stars: 39,
        tests: 85,
      },
      features: [
        'Automated DOM snapshot inspection and semantic locator generation',
        'Self-healing locator fallback when DOM attributes mutate in CI',
        'Natural-language test step execution via MCP tool calls',
        'Visual regression diffing with sub-pixel sensitivity',
      ],
      cliSample: 'python -m mcpilot.cli inspect --url="https://telecom.portal" --heal',
      githubUrl: 'https://github.com/akash-1024/Selenium-MCPilot',
    },
  ] as LabProject[],

  exhibits: [
    {
      id: 'exhibit-01',
      title: 'Foundations Program Honors',
      subtitle: 'Class of 2025 • Java Selenium Excellence',
      tag: 'AWARD CONVOCATION',
      date: 'OCT 2025',
      location: 'Prodapt University, Chennai',
      caption: 'EXHIBIT 01: PRODAPT UNIVERSITY FORMAL VALEDICTION & FOUNDATIONS AWARD CEREMONY',
      detailedStory:
        'Formal certificate presentation and convocation at Prodapt University honoring top-tier engineering performance during intensive enterprise automation training covering advanced Java, Selenium architectures, and telecom test design.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCPLFj1m4m-HXcAdm-V_5-o2PYHYMhHlELtX0sjIriilEq5MJyIuCqE-cFRPz0Iiog-3mqRGjeO6xDxutn1j3ghH1DuA8_FnWgD_7B9OfVjSq5CHTEYsBoxLSpXBu6nm0cdgK_ASl5HWNTNbbTB1DV-dXdVtU7HwTbOdRhLV0BadJFIkJ27domCjA5lbVSuQ5y89BELFUSdDipFZeiTy_LHtYrgEfg6X8MyEIk9b63q0s9eLBvQSI3ZbTY-QQPuNIa2Sw',
      aspect: 'landscape',
    },
    {
      id: 'exhibit-02',
      title: 'Star Award of the Month',
      subtitle: 'Prodapt Monthly Recognition',
      tag: 'STAR AWARD OF THE MONTH',
      date: '02 FEB 2026',
      location: 'Enterprise Telecom Business Unit',
      caption: 'EXHIBIT 02: STAR AWARD OF THE MONTH — COMMENDATION FOR TELECOM SUITE AUTOMATION',
      detailedStory:
        'Awarded to Akash Anjamani in recognition of extraordinary commitment to quality assurance, proactive bug detection, and rapid stabilization of critical regression pipelines for high-volume enterprise customer accounts.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD_WtCS_WUgRTrKWybA4I-5nDa5BAgPuqXy-QVcllP8aiqOWORXo0aUUBeBJ9beAUS625gNegQqOdvfVIbtXD4ql7dG0F4-vAhSewc4jptI7kk8EjXtQNE63aaEA_QV7fZX_uoBtEk4pdE8BK__2f5mL1Q9LgcVokRpEhUjSF4QfhVwLhhEGe2DAj3cSWWTCmhheOvqOCpm5VwzMygF2nR62blarET9Yr5TMYLXivShnRzfdCMVy7loyjjwekIbnPD8eg',
      aspect: 'portrait',
    },
    {
      id: 'exhibit-03',
      title: 'Accreditation Diploma',
      subtitle: 'Prodapt University Foundations Program',
      tag: 'ACCREDITATION DIPLOMA',
      date: 'CLASS OF 2025',
      location: 'Academic Registrar, Prodapt',
      caption: 'EXHIBIT 03: ACCREDITATION DIPLOMA — VERIFIED PROFICIENCY IN AUTOMATION ENGINEERING',
      detailedStory:
        'Official credential awarded by Prodapt University certifying verified competency in enterprise-grade test automation, continuous integration architectures, API verification, and performance evaluation.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDIgqFej4eN5uB8hc25aSdohl5Awd5Ui8Z0A38vAxKNYE7djU0QsVFA2MyTGg23K0AB13kzD9p8jAfwjR11vIOMR7hX84HclFUgxvF4uEHgeNf7rBvjNM2blkMr97yIJuLjn1ZUmHdIyuY31qAC4nygXTLP1HafbrcMvu0uPlvkwfN_OsEtCsTT0KQ0eqkaoK_uzEBvqAHF5_7eh3ijBTMEcWN9W5sg9ICt0OG0mSnWAJjwyWhxVQSzVFZXevspWo_IBA',
      aspect: 'portrait',
    },
    {
      id: 'exhibit-04',
      title: 'Prodapt Telecom Automation Batch',
      subtitle: 'Batch 2024-NOV-NEG • Class of 30 Specialized Quality Engineers',
      tag: 'ENGINEERING COHORT',
      date: 'NOV 2024 — 2026',
      location: 'Prodapt Facility, Tamil Nadu, India',
      caption: 'EXHIBIT 04: ENGINEERING COHORT — PRODAPT ENTERPRISE TELECOM BATCH 2024-NOV-NEG',
      detailedStory:
        'Group commemorative portrait of the specialized telecom quality engineering cohort deployed across mission-critical communications networks, SDN validation, and OSS/BSS automation platforms.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDLht3b_WCFS_wUfMvFPRISdUvOFE4vmCMEQ3Vb_MEh9V-MP5E72z67LWs6Wb6sAdwXYCSljhQW7BfSt91DAffQFIDRd9R6FWFvf4KMs-n_4A0zlSHkDxZWzAJCAwzr2f6zodnlUAfADMZtmmJTZVHPNlH6nZyw1kiuPZ6R7gDQCp_L3CO_qBuZOhrRRuLRneYJo-i2JLXoI0gah4kbUDIV-7OV_wqSrEZG_6JDcOJcNWctGrWoL8ANVEceHW1dJd5Z7A',
      aspect: 'wide',
    },
  ] as ExhibitItem[],

  coreStack: [
    { name: 'Java', category: 'Core Language', mastery: 'Expert', desc: 'Core OOP, Collections, Concurrency, JVM Tuning' },
    { name: 'Python', category: 'Core Language', mastery: 'Advanced', desc: 'Async IO, Pytest fixtures, Automation scripting' },
    { name: 'Selenium', category: 'Web Automation', mastery: 'Expert', desc: 'Selenium 4 Grid, WebDriver, Dynamic waits, POM' },
    { name: 'Playwright', category: 'Web Automation', mastery: 'Advanced', desc: 'Headless browsers, Network mocking, Tracing' },
    { name: 'TestNG', category: 'Test Runner', mastery: 'Expert', desc: 'Parallel suites, Data Providers, Custom Listeners' },
    { name: 'Pytest', category: 'Test Runner', mastery: 'Advanced', desc: 'xdist parallelization, parameterization, hooks' },
    { name: 'Cucumber', category: 'BDD Specification', mastery: 'Advanced', desc: 'Gherkin specs, Step bindings, Living docs' },
    { name: 'Serenity BDD', category: 'Living Reports', mastery: 'Proficient', desc: 'Narrative reporting, Screenplay pattern' },
    { name: 'Jenkins', category: 'CI/CD Pipelines', mastery: 'Advanced', desc: 'Declarative pipelines, Groovy scripts, Distributed agents' },
    { name: 'JMeter', category: 'Performance', mastery: 'Proficient', desc: 'Load curves, Thread groups, Response latency' },
    { name: 'Git & GitHub', category: 'Version Control', mastery: 'Expert', desc: 'Branching strategies, PR reviews, Actions' },
    { name: 'Jira & Agile', category: 'Lifecycle Management', mastery: 'Expert', desc: 'Sprint rituals, Defect triage, Xray test tracking' },
  ],

  education: [
    {
      period: '2021 — 2024',
      degree: 'BSc Computer Science',
      institution: 'Bishop Heber College, Tiruchirappalli',
      details: 'Distinction honors. Coursework in Data Structures, Algorithms, Software Engineering, Database Systems, and Object-Oriented Programming.',
    },
    {
      period: '2019 — 2021',
      degree: 'Higher Secondary Education',
      institution: 'Maxwell Higher Secondary School, Thanjavur',
      details: 'Mathematics, Physics, Chemistry, and Computer Science foundations.',
    },
  ],
};
