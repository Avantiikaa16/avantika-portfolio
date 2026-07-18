import { heroSkills, stats } from "../data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 pb-24 pt-36">
      <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-[#F8D7DF]/70 blur-3xl" />
      <div className="absolute right-[-120px] top-48 h-[420px] w-[420px] rounded-full bg-[#F6C9D6]/60 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[45%] h-96 w-96 rounded-full bg-[#E8DDFF]/70 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4B9C5] bg-[#FFF3F7] px-5 py-2 shadow-sm">
            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-semibold text-[#B85F7C]">
              Open to Full-time Opportunities
            </span>
          </div>

          <p className="mb-2 text-xl text-[#5B5560]">Hello, I&apos;m</p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            Avantika
            <br />
            <span className="italic text-[#B85F7C]">Chapegadikar</span>
          </h1>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-[#B85F7C]">
            Software Engineer <span className="text-[#9B8EA0]">| Backend • Cloud • Data • AI</span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5B5560]">
            I build scalable backend systems, cloud data platforms, and AI-powered applications that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-[#B85F7C] px-7 py-4 font-semibold text-white shadow-lg">
              View Projects →
            </a>
            <a href="#contact" className="rounded-2xl border border-[#E4B9C5] bg-white px-7 py-4 font-semibold text-[#B85F7C]">
              Contact Me ✉
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#EAD2D8] bg-white/75 p-8 shadow-[0_30px_100px_rgba(184,95,124,0.16)] backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-6 border-b border-[#EAD2D8] pb-8">
            {stats.map(([num, label]) => (
              <div key={label} className="rounded-3xl bg-[#FFF3F6] p-6">
                <p className="font-serif text-4xl font-bold text-[#2F2D36]">{num}</p>
                <p className="mt-2 text-sm text-[#6C616B]">{label}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#B85F7C]">
            Technologies I work with
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {heroSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-[#E8CDD4] bg-white px-4 py-2 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
