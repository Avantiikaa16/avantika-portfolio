import { projects } from "../data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Projects</p>
          <h2 className="mt-4 font-serif text-5xl">Featured Work</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 3) * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[2rem] border border-[#E8CDD4] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">{project.name}</h3>

                <p className="mt-4 leading-7 text-[#5B5560]">{project.desc}</p>

                <p className="mt-6 text-sm font-semibold text-[#B85F7C]">{project.tech}</p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="font-semibold text-[#B85F7C] group-hover:underline">
                    View Repository →
                  </span>
                  <span className="text-xl">↗</span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
