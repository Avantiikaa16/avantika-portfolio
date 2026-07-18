import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 text-center">
      <FadeIn>
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
      </FadeIn>
    </section>
  );
}
