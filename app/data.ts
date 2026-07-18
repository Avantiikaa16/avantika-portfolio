export const stats: [string, string][] = [
  ["3", "Years Experience"],
  ["150+", "Stored Procedures"],
  ["80%", "Query Performance Gain"],
  ["500K+", "Products Automated"],
];

export const skills = [
  "Python", "Java", "SQL", "JavaScript", "React", "FastAPI",
  "Django", "Flask", "BigQuery", "Airflow", "AWS", "GCP",
  "Azure", "Docker", "Kubernetes", "TensorFlow", "PyTorch", "MongoDB",
];

export const heroSkills = ["Python", "SQL", "GCP", "BigQuery", "Airflow", "Docker"];

export const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

export type Experience = {
  role: string;
  company: string;
  duration: string;
  text: string;
};

export const experiences: Experience[] = [
  {
    role: "Data Engineer Intern",
    company: "Tenet Healthcare",
    duration: "May 2025 – May 2026",
    text: "Optimized BigQuery SQL pipelines and stored procedures, improving performance by up to 80%. Developed and maintained 150+ stored procedures supporting enterprise healthcare analytics. Built Apache Airflow DAGs for automated ETL workflows. Migrated healthcare datasets from DB2 to Google BigQuery with automated validation. Designed scalable Bronze • Silver • Gold Medallion data architecture.",
  },
  {
    role: "Software Development Engineer",
    company: "Ergode IT Services",
    duration: "July 2022 – June 2024",
    text: "Built backend services and REST APIs for enterprise marketplace integrations. Developed an automation platform processing 500K+ products. Integrated 15+ marketplaces including Amazon, Walmart, eBay, and Shopify. Automated onboarding for 50+ vendors, reducing manual effort by nearly 90%. Worked with AWS, Docker, CI/CD, and production cloud infrastructure.",
  },
];

export type Project = {
  name: string;
  desc: string;
  tech: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "Patient Voice Bot",
    desc: "Automated voice QA bot that calls a medical office AI agent and simulates realistic patient conversations to surface bugs.",
    tech: "Python • FastAPI • Twilio Media Streams • Deepgram STT/TTS • Groq (Llama 3.3 70B) • WebSockets",
    link: "https://github.com/Avantiikaa16/patient-ai-voice-bot",
  },
  {
    name: "Skill Bridge Career Navigator",
    desc: "AI-powered career guidance platform that helps students explore career paths, identify skill gaps, and receive personalized recommendations.",
    tech: "React • Python • AI • SQL",
    link: "https://github.com/Avantiikaa16/skill-bridge-career-navigator",
  },
  {
    name: "Idempotent Payment System",
    desc: "FastAPI backend simulator ensuring exactly-once payment processing, using idempotency-key handling, atomic transactions, and deduplication to prevent duplicate charges on retried requests.",
    tech: "Python • FastAPI • SQLAlchemy • Pydantic • SQLite/PostgreSQL",
    link: "https://github.com/Avantiikaa16/idempotent-payment-system",
  },
  {
    name: "Lean In Circle Impact Dashboard",
    desc: "Interactive analytics dashboard measuring engagement, retention, leadership growth, and overall community health.",
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
    desc: "Artificial Intelligence game agent implementing adversarial search algorithms including Minimax with Alpha-Beta pruning.",
    tech: "Python • AI • Minimax • Alpha-Beta",
    link: "https://github.com/Avantiikaa16/connect4-ai-adversarial-search",
  },
];
