import { skills } from "../data";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">Skills</p>
          <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Tech Stack</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-[#0F1524] px-5 py-3 text-sm font-medium text-[#E7ECFB]">
              {skill}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
