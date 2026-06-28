import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";

const stats = [
  ["3", "Years Experience"],
  ["150+", "Stored Procedures"],
  ["80%", "Query Performance Gain"],
  ["500K+", "Products Automated"],
];

const skills = [
  "Python", "Java", "SQL", "JavaScript", "React", "FastAPI",
  "Django", "Flask", "BigQuery", "Airflow", "AWS", "GCP",
  "Azure", "Docker", "Kubernetes", "TensorFlow", "PyTorch", "MongoDB"
];

const experiences = [
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
  }
];

const projects = [
  {
    name: "Skill Bridge Career Navigator",
    desc: "AI-powered career guidance platform that helps students explore career paths, identify skill gaps, and receive personalized recommendations.",
    tech: "React • Python • AI • SQL",
    link: "https://github.com/Avantiikaa16/skill-bridge-career-navigator",
  },
  {
    name: "Idempotent Payment System",
    desc: "Distributed backend system implementing idempotent payment processing to ensure reliable and duplicate-safe transactions.",
    tech: "Java • Spring Boot • Distributed Systems",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F8] text-[#2F2D36]">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-[#E8CDD4] bg-[#FFF9F8]/80 px-8 py-5 backdrop-blur-xl">
        <div>
          <div className="font-serif text-3xl italic text-[#B85F7C]">AC</div>
          <p className="text-xs text-[#B85F7C]">Software Engineer</p>
        </div>

        <nav className="hidden md:flex items-center gap-10">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-[#5B5560] transition-colors duration-300 hover:text-[#B85F7C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B85F7C] after:transition-all after:duration-300 hover:after:w-full"
                >
                {item}
                </a>
            ))}
        </nav>
            <a
                href="https://drive.google.com/file/d/1N0ZDjuJ3GbRCAq7zHDdN4E8qKg0hNRgA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#E4B9C5] bg-[#FFF0F4] px-5 py-3 text-sm font-semibold text-[#B85F7C]"
                >
                Resume ↓
            </a>
      </nav>

      <section className="relative overflow-hidden px-8 pb-24 pt-36">
        <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-[#F8D7DF]/70 blur-3xl" />
        <div className="absolute right-[-120px] top-48 h-[420px] w-[420px] rounded-full bg-[#F6C9D6]/60 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[45%] h-96 w-96 rounded-full bg-[#E8DDFF]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4B9C5] bg-[#FFF3F7] px-5 py-2 shadow-sm">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-semibold text-[#B85F7C]">
                    Open to Full-time Opportunities
                </span>
            </div>

            <p className="mb-2 text-xl text-[#5B5560]">Hello, I&apos;m</p>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
                Avantika
            <br />
            <span className="italic text-[#B85F7C]">Chapegadikar</span>
            </h1>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-[#B85F7C]">
              Software Engineer <span className="text-[#9B8EA0]">| Backend • Cloud • Data • AI</span>
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B5560]">
              I build scalable backend systems, cloud data platforms, and AI-powered applications that solve real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-[#B85F7C] px-7 py-4 font-semibold text-white shadow-lg">
                View Projects →
              </a>
              <a href="#contact" className="rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C]">
                Contact Me ✉
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#EAD2D8] bg-white/75 p-8 shadow-[0_30px_100px_rgba(184,95,124,0.16)] backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-6 border-b border-[#EAD2D8] pb-8">
              {stats.map(([num, label]) => (
                <div key={label} className="rounded-3xl bg-[#FFF3F6] p-6">
                  <p className="font-serif text-4xl font-bold text-[#2F2D36]">{num}</p>
                  <p className="mt-2 text-sm text-[#6C616B]">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#B85F7C]">
              Technologies I work with
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Python", "SQL", "GCP", "BigQuery", "Airflow", "Docker"].map((skill) => (
                <span key={skill} className="rounded-full border border-[#E8CDD4] bg-white px-4 py-2 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-[#EAD2D8] px-8 py-24">
        <div className="mx-auto max-w-6xl grid items-center gap-16 md:grid-cols-2">

            {/* LEFT - PHOTO */}

            <div className="flex justify-center">
            <Image
                src="/avantika.jpg"
                alt="Avantika Chapegadikar"
                width={420}
                height={520}
                className="rounded-[2rem] object-cover shadow-xl border border-[#E8CDD4]"
            />
            </div>

            {/* RIGHT - ABOUT */}

            <div>

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">
                ABOUT ME
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-tight">
                Building software
                <span className="italic text-[#B85F7C]">
                {" "}with purpose.
                </span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#5B5560]">

                <p>
                I'm a Software Engineer with 3 years of experience building scalable backend systems, cloud platforms, and data pipelines.
                </p>

                <p>
                I recently completed my Master's in Computer Science from Southern Methodist University with a specialization in Artificial Intelligence and Machine Learning.
                </p>

                <p>
                I'm passionate about backend engineering, distributed systems, cloud infrastructure, AI, and solving complex engineering problems.
                </p>

            </div>

            </div>

        </div>
      </section>

      <section id="experience" className="bg-[#FFF3F6] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Experience</p>
          <h2 className="mt-4 font-serif text-5xl">Career Journey</h2>

          <div className="mt-12 grid gap-6">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-[2rem] border border-[#E8CDD4] bg-white p-8 shadow-sm hover:shadow-lg transition"
                >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B85F7C]">
                    {exp.company}
                </p>

                <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>

                    <span className="mt-2 md:mt-0 rounded-full bg-[#FFF3F6] px-4 py-1 text-sm font-medium text-[#B85F7C]">
                    {exp.duration}
                    </span>
                </div>

                <p className="mt-5 leading-8 text-[#5B5560]">
                    {exp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Projects</p>
          <h2 className="mt-4 font-serif text-5xl">Featured Work</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] border border-[#E8CDD4] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                <h3 className="text-2xl font-bold">{project.name}</h3>

                <p className="mt-4 leading-7 text-[#5B5560]">
                    {project.desc}
                </p>

                <p className="mt-6 text-sm font-semibold text-[#B85F7C]">
                    {project.tech}
                </p>

                <div className="mt-8 flex items-center justify-between">
                    <span className="font-semibold text-[#B85F7C] group-hover:underline">
                    View Repository →
                    </span>

                    <span className="text-xl">↗</span>
                </div>
                </a>
            ))}
            </div>
        </div>
      </section>

      <section id="skills" className="bg-[#FFF3F6] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Skills</p>
          <h2 className="mt-4 font-serif text-5xl">Tech Stack</h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-[#E8CDD4] bg-white px-5 py-3 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="recognition" className="bg-[#FFF9F9] px-8 py-24">
        <div className="mx-auto max-w-6xl">

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">
            Achievements
            </p>

            <h2 className="mt-4 font-serif text-5xl">
            Recognition & Highlights
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-[#E8CDD4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">🏆</div>
                <h3 className="mt-5 text-2xl font-bold">
                Technologist of the Month
                </h3>
                <p className="mt-4 text-[#5B5560]">
                Awarded at Ergode IT Services for delivering the Keyword Violation Automation Platform and driving engineering excellence.
                </p>
            </div>

            <div className="rounded-3xl border border-[#E8CDD4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl">🤖</div>
                <h3 className="mt-5 text-2xl font-bold">
                Connect4 AI Competition
                </h3>
                <p className="mt-4 text-[#5B5560]">
                Secured 2nd Place by building an AI agent using Minimax and Alpha-Beta pruning.
                </p>
            </div>

            </div>

        </div>
      </section>

      <section id="contact" className="px-8 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Contact</p>
        <h2 className="mt-4 font-serif text-5xl">Let&apos;s build something meaningful.</h2>
        <p className="mx-auto mt-6 max-w-xl text-[#5B5560]">
          Open to Software Engineer, Backend Engineer, Data Engineer, Platform Engineer, and AI/ML Engineer roles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

        <span className="rounded-full border border-[#E8CDD4] bg-white px-4 py-2 text-sm">
        📍 San Francisco, California
        </span>

        <span className="rounded-full border border-[#E8CDD4] bg-white px-4 py-2 text-sm">
        Open to Relocation
        </span>

        <span className="rounded-full border border-[#E8CDD4] bg-white px-4 py-2 text-sm">
        Available for Full-Time
        </span>

        </div>

       <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
            href="mailto:achapegadikar@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B85F7C] hover:text-white hover:shadow-lg"
        >
            <FaEnvelope size={18} />
            <span>Email Me</span>
        </a>

        <a
            href="https://www.linkedin.com/in/avantikachapegadikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B85F7C] hover:text-white hover:shadow-lg"
        >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
        </a>

        <a
            href="https://github.com/Avantiikaa16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B85F7C] hover:text-white hover:shadow-lg"
        >
            <FaGithub size={18} />
            <span>GitHub</span>
        </a>

        <a
            href="https://leetcode.com/u/avantika16/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B85F7C] hover:text-white hover:shadow-lg"
        >
            <SiLeetcode size={18} />
            <span>LeetCode</span>
        </a>
       </div>
      </section>

      <footer className="mt-24 border-t border-[#E8CDD4] py-10 text-center">

        <h2 className="font-serif text-3xl text-[#B85F7C]">
        Avantika Chapegadikar
        </h2>

        <p className="mt-2 text-[#5B5560]">
        Software Engineer
        </p>

        <p className="mt-5 text-sm text-[#8A7C84]">
        © 2026 • Built with Next.js & Tailwind CSS
        </p>

      </footer>

    </main>
  );
}