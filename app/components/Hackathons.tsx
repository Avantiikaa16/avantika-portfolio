import { hackathons } from "../data";
import FadeIn from "./FadeIn";

export default function Hackathons() {
  return (
    <section id="hackathons" className="bg-[#FFF3F6] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">Hackathons</p>
          <h2 className="mt-4 font-serif text-5xl">Built Under Pressure</h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hackathons.map((hackathon, i) => (
            <FadeIn key={hackathon.name} delay={(i % 3) * 0.1}>
              <div className="group flex h-full flex-col rounded-[2rem] border border-[#E8CDD4] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <span className="inline-block w-fit rounded-full bg-[#FFF3F6] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#B85F7C]">
                  {hackathon.event}
                </span>

                <h3 className="mt-4 text-2xl font-bold">{hackathon.name}</h3>

                <p className="mt-4 leading-7 text-[#5B5560]">{hackathon.desc}</p>

                <p className="mt-6 text-sm font-semibold text-[#B85F7C]">{hackathon.tech}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {hackathon.live && (
                    <a
                      href={hackathon.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#B85F7C] hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={hackathon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#B85F7C] hover:underline"
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
