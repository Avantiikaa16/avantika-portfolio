import FadeIn from "./FadeIn";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-[#FFF9F9] px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B85F7C]">
            Achievements
          </p>
          <h2 className="mt-4 font-serif text-5xl">Recognition & Highlights</h2>
        </FadeIn>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn className="rounded-3xl border border-[#E8CDD4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl">🏆</div>
            <h3 className="mt-5 text-2xl font-bold">Technologist of the Month</h3>
            <p className="mt-4 text-[#5B5560]">
              Awarded at Ergode IT Services for delivering the Keyword Violation Automation Platform and driving engineering excellence.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="rounded-3xl border border-[#E8CDD4] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="text-4xl">🤖</div>
            <h3 className="mt-5 text-2xl font-bold">Connect4 AI Competition</h3>
            <p className="mt-4 text-[#5B5560]">
              Secured 2nd Place by building an AI agent using Minimax and Alpha-Beta pruning.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
