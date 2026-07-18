import { experiences } from "../data";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#FFF3F6] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Experience</p>
          <h2 className="mt-4 font-serif text-5xl">Career Journey</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1}>
              <div className="rounded-[2rem] border border-[#E8CDD4] bg-white p-8 shadow-sm hover:shadow-lg transition">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B85F7C]">
                  {exp.company}
                </p>

                <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="mt-2 md:mt-0 rounded-full bg-[#FFF3F6] px-4 py-1 text-sm font-medium text-[#B85F7C]">
                    {exp.duration}
                  </span>
                </div>

                <p className="mt-5 leading-8 text-[#5B5560]">{exp.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
