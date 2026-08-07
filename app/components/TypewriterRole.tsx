"use client";

import { useEffect, useState } from "react";

const ROLES = ["Software Engineer", "Backend Engineer", "Data Engineer", "AI Engineer"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 300;

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const current = ROLES[roleIndex];
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
        return;
      }
      setText(current.slice(0, deleting ? text.length - 1 : text.length + 1));
    }, deleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, reduceMotion]);

  if (reduceMotion) {
    return <span>{ROLES[0]}</span>;
  }

  return (
    <span className="inline-flex items-center">
      <span className="sr-only">Software Engineer</span>
      <span aria-hidden="true">{text}</span>
      <span className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-current align-middle" />
    </span>
  );
}
