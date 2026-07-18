import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="border-t border-[#EAD2D8] px-8 py-24">
      <div className="mx-auto max-w-6xl grid items-center gap-16 md:grid-cols-2">
        <FadeIn className="flex justify-center">
          <Image
            src="/avantika.jpg"
            alt="Avantika Chapegadikar"
            width={420}
            height={520}
            className="rounded-[2rem] object-cover shadow-xl border border-[#E8CDD4]"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">
            ABOUT ME
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-tight">
            Building software
            <span className="italic text-[#B85F7C]"> with purpose.</span>
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#5B5560]">
            <p>
              I&apos;m a Software Engineer with 3 years of experience building scalable backend systems, cloud platforms, and data pipelines.
            </p>
            <p>
              I recently completed my Master&apos;s in Computer Science from Southern Methodist University with a specialization in Artificial Intelligence and Machine Learning.
            </p>
            <p>
              I&apos;m passionate about backend engineering, distributed systems, cloud infrastructure, AI, and solving complex engineering problems.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
