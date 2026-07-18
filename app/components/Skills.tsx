import { skills } from "../data";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#FFF3F6] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Skills</p>
          <h2 className="mt-4 font-serif text-5xl">Tech Stack</h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-[#E8CDD4] bg-white px-5 py-3 text-sm font-medium">
              {skill}
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
