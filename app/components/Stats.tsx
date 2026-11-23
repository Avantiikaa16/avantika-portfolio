"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats } from "../data";
import FadeIn from "./FadeIn";

function CountUp({ value, decimals = 0, suffix }: { value: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const final = value.toFixed(decimals) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    if (!inView) {
      el.textContent = (0).toFixed(decimals) + suffix;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, decimals, suffix]);

  // Server-rendered with the final value, so it reads correctly without JS.
  return (
    <span ref={ref} className="tabular-nums">
      {final}
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Impact" className="border-t border-white/10 px-8 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn
            key={stat.label}
            delay={i * 0.08}
            className="rounded-[1.25rem] border border-white/10 bg-[#0F1524] p-6 text-center"
          >
            <p className="text-4xl font-bold text-[#8FA8FF] md:text-5xl">
              <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm text-[#8B95AB]">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
