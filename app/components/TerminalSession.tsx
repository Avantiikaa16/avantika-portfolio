"use client";

import { useEffect, useState } from "react";

type Line =
  | { kind: "prompt" }
  | { kind: "command"; text: string }
  | { kind: "output"; text: string }
  | { kind: "status"; ms: number }
  | { kind: "gap" };

const PROMPT = "avantika@portfolio ~/portfolio (main)";

function buildScript(): Line[] {
  return [
    { kind: "prompt" },
    { kind: "command", text: "whoami" },
    { kind: "output", text: "Avantika — I build systems that have to be right, not just clever." },
    { kind: "gap" },
    { kind: "output", text: "├─ role     Backend Engineer · Data Engineer · AI Engineer" },
    { kind: "output", text: "├─ base     Bay Area, California" },
    { kind: "output", text: "└─ status   Open to full-time roles" },
    { kind: "status", ms: 310 },
    { kind: "gap" },
    { kind: "prompt" },
    { kind: "command", text: "ls ./recent-builds" },
    { kind: "output", text: "agentcourt-precedent" },
    { kind: "output", text: "  AI courtroom that judges every risky agent action" },
    { kind: "output", text: "truthlens-ai" },
    { kind: "output", text: "  Explainable fact-checking, any domain" },
    { kind: "output", text: "idempotent-payments" },
    { kind: "output", text: "  Exactly-once payments, zero duplicate charges" },
    { kind: "status", ms: 420 },
    { kind: "gap" },
  ];
}

const TYPE_SPEED = 28;
const AFTER_COMMAND_PAUSE = 250;
const AFTER_OUTPUT_PAUSE = 220;
const AFTER_STATUS_PAUSE = 300;
const GAP_PAUSE = 150;

export default function TerminalSession() {
  const script = buildScript();
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [done, setDone] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReduced);
    if (prefersReduced) {
      setLineIndex(script.length);
      setDone(true);
    }
  }, [script.length]);

  useEffect(() => {
    if (reduceMotion) return;
    if (lineIndex >= script.length) {
      setDone(true);
      return;
    }
    const line = script[lineIndex];

    if (line.kind === "prompt" || line.kind === "status") {
      const t = setTimeout(
        () => {
          setLineIndex((i) => i + 1);
          setCharCount(0);
        },
        line.kind === "status" ? AFTER_STATUS_PAUSE : 0
      );
      return () => clearTimeout(t);
    }

    if (line.kind === "gap") {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharCount(0);
      }, GAP_PAUSE);
      return () => clearTimeout(t);
    }

    if (line.kind === "command") {
      if (charCount < line.text.length) {
        const t = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharCount(0);
      }, AFTER_COMMAND_PAUSE);
      return () => clearTimeout(t);
    }

    // output: reveal instantly, pause, move on
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharCount(0);
    }, AFTER_OUTPUT_PAUSE);
    return () => clearTimeout(t);
  }, [lineIndex, charCount, script, reduceMotion]);

  const current = script[lineIndex];

  return (
    <div className="font-mono text-sm leading-7">
      {script.slice(0, lineIndex).map((line, i) => {
        if (line.kind === "gap") return <div key={i} className="h-3" />;
        if (line.kind === "prompt")
          return (
            <p key={i} className="text-[#5B6478]">
              {PROMPT}
            </p>
          );
        if (line.kind === "command")
          return (
            <p key={i} className="text-[#8FA8FF]">
              <span className="text-[#5B6478]">$</span> {line.text}
            </p>
          );
        if (line.kind === "status")
          return (
            <p key={i} className="text-xs text-[#4B7A5E]">
              ✓ done in {(line.ms / 1000).toFixed(2)}s · exit 0
            </p>
          );
        return (
          <p key={i} className="whitespace-pre-wrap pl-4 text-[#E7ECFB]">
            {line.text}
          </p>
        );
      })}

      {!done && current?.kind === "command" && (
        <p className="text-[#8FA8FF]">
          <span className="text-[#5B6478]">$</span> {current.text.slice(0, charCount)}
          <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
        </p>
      )}

      {done && (
        <>
          <p className="text-[#5B6478]">{PROMPT}</p>
          <p className="text-[#8FA8FF]">
            <span className="text-[#5B6478]">$</span>{" "}
            <span className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-current align-middle" />
            <span className="ml-3 text-xs text-[#5B6478]">scroll to explore ↓</span>
          </p>
        </>
      )}
    </div>
  );
}
