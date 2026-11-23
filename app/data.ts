export const RESUME_URL = "/Avantika_Chapegadikar_Resume.pdf";

export const stats: { value: number; decimals?: number; suffix: string; label: string }[] = [
  { value: 80, suffix: "%", label: "Faster BigQuery Pipelines" },
  { value: 500, suffix: "K+", label: "Products Automated" },
  { value: 99.5, decimals: 1, suffix: "%", label: "Order Sync Success" },
  { value: 15, suffix: "+", label: "Production APIs Integrated" },
];

export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Scripting",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "PHP", "Go", "C++", "Scala", "HTML", "CSS", "Bash"],
  },
  {
    category: "Backend & Full-Stack",
    items: ["FastAPI", "Django", "Flask", "Node.js", "React", "Next.js", "REST APIs", "API Design", "Microservices", "Asynchronous Programming"],
  },
  {
    category: "Generative AI & ML",
    items: [
      "LLM Applications", "Prompt Engineering", "Multi-Agent Systems", "Agentic Workflows", "RAG",
      "Semantic Search", "Transformer Embeddings", "Hugging Face", "PyTorch", "OpenAI API", "Claude Code", "Gemini API",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS", "GCP", "Azure", "Linux", "Docker", "Kubernetes", "Terraform", "Jenkins",
      "GitLab CI/CD", "Azure DevOps", "Git", "Grafana", "Jira", "Postman",
    ],
  },
  {
    category: "Databases & Data Engineering",
    items: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "SQL Server", "DB2", "ETL/ELT", "Data Modeling", "Apache Airflow"],
  },
  {
    category: "Networking & Security",
    items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Routing & Switching", "AWS VPC & Subnets", "IAM", "API Authentication", "OAuth", "JWT"],
  },
  {
    category: "Engineering Practices",
    items: [
      "System Design", "Software Architecture", "Distributed Systems", "Agile & Scrum", "SDLC",
      "Unit, Integration & Regression Testing", "Production Monitoring", "Debugging", "Automation Scripting", "System Integration",
    ],
  },
];

export const navItems = ["About", "Experience", "Projects", "Hackathons", "Skills", "Recognition", "Contact"];

export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Data Engineer Intern",
    company: "Tenet Healthcare",
    location: "Dallas, TX",
    duration: "Jun 2025 – May 2026",
    points: [
      "Cut pipeline runtime by up to 80% across fact and IDM datasets by optimizing 150+ BigQuery stored procedures with temp tables, streamlined CTEs, and parallel execution.",
      "Migrated 100 pipelines from DB2, SQL Server, and Alteryx to BigQuery with zero data-loss incidents, using Python automation and Airflow DAGs on Cloud Composer with schema validation, data-quality checks, and Azure DevOps CI/CD.",
      "Modeled Bronze, Silver, and Gold layers with fact and dimension tables, giving 4 analytics teams consistent reporting datasets.",
    ],
  },
  {
    role: "Research Assistant",
    company: "Southern Methodist University",
    location: "Dallas, TX",
    duration: "Mar 2025 – May 2025",
    points: [
      "Improved researcher–industry match relevance by 50% over keyword search using PyTorch and Hugging Face transformer embeddings for semantic similarity and NLP query understanding.",
      "Indexed 200+ researcher and industry profiles for SMU Lyle Sci-Hub with Java and Scala ingestion services on AWS, unit-tested with JUnit.",
    ],
  },
  {
    role: "Full-Stack Software Developer",
    company: "Ergode IT Services",
    location: "Mumbai, India",
    duration: "Jul 2022 – Jun 2024",
    points: [
      "Eliminated 90% of manual compliance work across 500K+ products on 40+ marketplaces with a rule-based auto-delisting service that flags listings by ASIN, brand, and keyword. Recognized as Technologist of the Month.",
      "Maintained a 99.5% order-sync success rate across 10K daily orders by integrating 15+ marketplace REST APIs (orders, inventory, pricing, shipment tracking) with auth, retry logic, and structured logging.",
      "Reduced incident resolution time by 40% through root-cause analysis of 30+ production incidents, Grafana monitoring, and moving application logs from AWS EBS to S3.",
      "Shipped 50+ production releases with a rollback rate under 2% via GitLab CI/CD and Jenkins pipelines, PHPUnit tests, and integration and regression testing.",
      "Improved onboarding productivity by 70% for 50 vendors by automating EDI and FTP file validation, reconciliation, and label generation.",
    ],
  },
];

export type Project = {
  name: string;
  desc: string;
  tech: string;
  link: string;
  live?: string;
};

export type Hackathon = {
  name: string;
  event: string;
  desc: string;
  tech: string;
  link: string;
  live?: string;
};

export const hackathons: Hackathon[] = [
  {
    name: "ReproZero",
    event: "Greptile Fast Hackathon 2026",
    desc: "Multi-tenant platform that imports incident tickets from Jira, runs candidate fixes in an isolated Vercel Sandbox, and verifies them with real before/after test results, cutting investigation time from 2–3 hours to about 15 minutes.",
    tech: "Next.js • TypeScript • OpenAI API • Postgres • Vercel Sandbox • Vitest",
    link: "https://github.com/Avantiikaa16/ReproZero",
    live: "https://reprozero.vercel.app",
  },
  {
    name: "AgentCourt Precedent",
    event: "Memory Meets Motion Hackathon 2026",
    desc: "AI governance system where every risky agent action goes on trial. Prosecutor, Defense, and Judge agents argue using FalkorDB precedent, while deterministic guardrails and human approval, not the LLM, hold final execution authority.",
    tech: "Next.js • TypeScript • Fastify • FalkorDB • Guild.ai • RocketRide",
    link: "https://github.com/Avantiikaa16/agentcourt-precedent",
    live: "https://agentcourt-precedent.vercel.app",
  },
  {
    name: "TruthLens AI",
    event: "You.com Agentic AI Hackathon 2026",
    desc: "Fact investigation platform that returns sourced verdicts in under 10 seconds, using parallel live web research, official-source detection, source-independence checks, and explainable confidence scoring across any domain, from health to politics.",
    tech: "React 19 • TypeScript • FastAPI • PostgreSQL • You.com API • JWT Auth",
    link: "https://github.com/Avantiikaa16/truthlens-ai",
    live: "https://avantika-truthlens-ai.vercel.app",
  },
];

export const projects: Project[] = [
  {
    name: "Patient Voice Bot",
    desc: "Real-time voice agent that calls a medical office AI as a simulated patient, with under 1.5s end-to-end latency and automated post-call analysis that flags chatbot failures.",
    tech: "Python • FastAPI • Twilio • Deepgram • Groq Llama 3.3",
    link: "https://github.com/Avantiikaa16/patient-ai-voice-bot",
  },
  {
    name: "Idempotent Payment System",
    desc: "FastAPI backend that guarantees exactly-once payment processing, using idempotency keys, atomic transactions, and deduplication to prevent duplicate charges on retried requests.",
    tech: "Python • FastAPI • SQLAlchemy • Pydantic • PostgreSQL",
    link: "https://github.com/Avantiikaa16/idempotent-payment-system",
  },
  {
    name: "Skill Bridge Career Navigator",
    desc: "AI-powered career guidance platform that analyzes a user's skills, identifies skill gaps, and recommends personalized learning paths using the Gemini API.",
    tech: "FastAPI • React • MySQL • Gemini API",
    link: "https://github.com/Avantiikaa16/skill-bridge-career-navigator",
  },
  {
    name: "Lean In Circle Impact Dashboard",
    desc: "Interactive analytics dashboard measuring engagement, retention, leadership growth, and overall community health across Lean In Circles.",
    tech: "Python • Streamlit • Pandas • Plotly",
    link: "https://github.com/Avantiikaa16/leanin-circle-impact-dashboard",
  },
  {
    name: "University Program Evaluation System",
    desc: "Full-stack platform for evaluating academic programs through analytics, reporting, and structured feedback workflows.",
    tech: "React • Python • SQL",
    link: "https://github.com/Avantiikaa16/university-program-evaluation-system-v2",
  },
  {
    name: "Connect4 AI",
    desc: "Game-playing AI agent built on adversarial search with Minimax and Alpha-Beta pruning. Placed 2nd in a Connect4 AI competition.",
    tech: "Python • Minimax • Alpha-Beta Pruning",
    link: "https://github.com/Avantiikaa16/connect4-ai-adversarial-search",
  },
];
