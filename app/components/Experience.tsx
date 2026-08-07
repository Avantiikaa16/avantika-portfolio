import { experiences } from "../data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0D1424] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">Experience</p>
          <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Career Journey</h2>
        </FadeIn>

        <div className="relative mt-12 space-y-8 border-l-2 border-white/10 pl-10">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-[3.05rem] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#5B7FFF] bg-[#0A0E17]" />

              <div className="rounded-[1.5rem] border border-white/10 bg-[#0F1524] p-8 shadow-sm hover:border-white/20 transition">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#8FA8FF]">
                  {exp.company}
                </p>

                <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-bold text-[#E7ECFB]">{exp.role}</h3>
                  <span className="mt-2 md:mt-0 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm font-medium text-[#8FA8FF]">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-5 leading-8 text-[#8B95AB]">{exp.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
