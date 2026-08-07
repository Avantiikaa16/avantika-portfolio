import TypewriterRole from "./TypewriterRole";
import TerminalSession from "./TerminalSession";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 pb-24 pt-36">
      <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-[#1E3A8A]/25 blur-3xl" />
      <div className="absolute right-[-120px] top-48 h-[420px] w-[420px] rounded-full bg-[#312E81]/25 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[45%] h-96 w-96 rounded-full bg-[#1D4ED8]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2 shadow-sm">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-[#8FA8FF]">
              Open to Full-time Opportunities
            </span>
          </div>

          <p className="mb-2 text-xl text-[#8B95AB]">Hello, I&apos;m</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] bg-gradient-to-b from-[#DCE6FF] to-[#8FA8FF] bg-clip-text text-transparent">
            Avantika
            <br />
            Chapegadikar
          </h1>

          <p className="mt-7 text-sm font-bold uppercase tracking-[0.25em] text-[#8FA8FF]">
            <TypewriterRole />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#8B95AB]">
            I build scalable backend systems, cloud data platforms, and AI-powered applications that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-2xl bg-[#5B7FFF] px-7 py-4 font-semibold text-white shadow-lg shadow-[#5B7FFF]/20">
              View Projects →
            </a>
            <a href="#contact" className="rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-4 font-semibold text-[#8FA8FF]">
              Contact Me ✉
            </a>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-[#0F1524]/90 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6159]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs text-[#5B6478]">~/avantika</span>
          </div>

          <div className="p-8">
            <div className="min-h-[260px]">
              <TerminalSession />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
