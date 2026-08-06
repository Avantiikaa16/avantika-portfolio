import FadeIn from "./FadeIn";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-[#0D1424] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#8FA8FF]">
            Achievements
          </p>
          <h2 className="mt-4 text-5xl font-bold text-[#E7ECFB]">Recognition & Highlights</h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn className="rounded-[1.25rem] border border-white/10 bg-[#0F1524] p-8 shadow-sm transition hover:-translate-y-1 hover:border-white/20">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-5 text-2xl font-bold text-[#E7ECFB]">Technologist of the Month</h3>
            <p className="mt-4 text-[#8B95AB]">
              Awarded at Ergode IT Services for delivering the Keyword Violation Automation Platform and driving engineering excellence.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-[1.25rem] border border-white/10 bg-[#0F1524] p-8 shadow-sm transition hover:-translate-y-1 hover:border-white/20">
            <div className="text-4xl">🤖</div>
            <h3 className="mt-5 text-2xl font-bold text-[#E7ECFB]">Connect4 AI Competition</h3>
            <p className="mt-4 text-[#8B95AB]">
              Secured 2nd Place by building an AI agent using Minimax and Alpha-Beta pruning.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
