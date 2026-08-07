import { skillGroups } from "../data";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">Skills</p>
          <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Tech Stack</h2>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.08}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5B6478]">
                {group.category}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-[#0F1524] px-5 py-3 text-sm font-medium text-[#E7ECFB] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5B7FFF]/50 hover:text-[#8FA8FF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
