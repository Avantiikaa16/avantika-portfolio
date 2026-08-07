import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CalendarDays } from "lucide-react";
import FadeIn from "./FadeIn";

const SCHEDULE_LINK = "https://calendly.com/achapegadikar-smu/30min";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 text-center">
      <FadeIn>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">Contact</p>
        <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Let&apos;s build something meaningful.</h2>
        <p className="mx-auto mt-6 max-w-xl text-[#8B95AB]">
          Open to Software Engineer, Backend Engineer, Data Engineer, Platform Engineer, and AI/ML Engineer roles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-white/10 bg-[#0F1524] px-4 py-2 text-sm text-[#E7ECFB]">
            📍 San Francisco, California
          </span>
          <span className="rounded-full border border-white/10 bg-[#0F1524] px-4 py-2 text-sm text-[#E7ECFB]">
            Open to Relocation
          </span>
          <span className="rounded-full border border-white/10 bg-[#0F1524] px-4 py-2 text-sm text-[#E7ECFB]">
            Available for Full-Time
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={SCHEDULE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-[#5B7FFF] px-8 py-4 font-semibold text-white shadow-lg shadow-[#5B7FFF]/20 transition-all duration-300 hover:-translate-y-1"
          >
            <CalendarDays size={18} />
            <span>Schedule a Call</span>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:achapegadikar@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-[#8FA8FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B7FFF] hover:text-white hover:border-[#5B7FFF]"
          >
            <FaEnvelope size={18} />
            <span>Email Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/avantikachapegadikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-[#8FA8FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B7FFF] hover:text-white hover:border-[#5B7FFF]"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/Avantiikaa16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-[#8FA8FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B7FFF] hover:text-white hover:border-[#5B7FFF]"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://leetcode.com/u/avantika16/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-[#8FA8FF] transition-all duration-300 hover:-translate-y-1 hover:bg-[#5B7FFF] hover:text-white hover:border-[#5B7FFF]"
          >
            <SiLeetcode size={18} />
            <span>LeetCode</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
