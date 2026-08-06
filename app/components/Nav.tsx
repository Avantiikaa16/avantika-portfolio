"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0E17]/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-8 py-5">
        <div>
          <div className="text-3xl font-bold text-[#8FA8FF]">
            <span className="text-[#5B6478]">&gt;</span>AC
          </div>
          <p className="text-xs text-[#8B95AB]">Software Engineer</p>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[#8B95AB] transition-colors duration-300 hover:text-[#8FA8FF] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#8FA8FF] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1jJ20eKaz2W2QHLRxRbDI-KzZOddaHYcv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#8FA8FF]"
        >
          Resume ↓
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden rounded-xl border border-white/15 bg-white/[0.03] p-2 text-[#8FA8FF]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0E17] px-8 py-6">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg text-[#8B95AB] hover:text-[#8FA8FF]"
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1jJ20eKaz2W2QHLRxRbDI-KzZOddaHYcv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-fit rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-[#8FA8FF]"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
