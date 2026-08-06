import { projects } from "../data";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">Projects</p>
          <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Featured Work</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#0F1524] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20">
                <h3 className="text-2xl font-bold text-[#E7ECFB]">{project.name}</h3>

                <p className="mt-4 leading-7 text-[#8B95AB]">{project.desc}</p>

                <p className="mt-6 text-sm font-semibold text-[#8FA8FF]">{project.tech}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#8FA8FF] hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#8FA8FF] hover:underline"
                  >
                    View Repository ↗
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
