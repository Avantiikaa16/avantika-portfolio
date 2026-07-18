"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#E8CDD4] bg-[#FFF9F8]/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-8 py-5">
        <div>
          <div className="font-serif text-3xl italic text-[#B85F7C]">AC</div>
          <p className="text-xs text-[#B85F7C]">Software Engineer</p>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[#5B5560] transition-colors duration-300 hover:text-[#B85F7C] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#B85F7C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1qV0EekbkGTjr4c9qQUVAU8pCBbuckWOe/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block rounded-2xl border border-[#E4B9C5] bg-[#FFF0F4] px-5 py-3 text-sm font-semibold text-[#B85F7C]"
        >
          Resume ↓
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden rounded-xl border border-[#E4B9C5] bg-white p-2 text-[#B85F7C]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E8CDD4] bg-[#FFF9F8] px-8 py-6">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg text-[#5B5560] hover:text-[#B85F7C]"
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1qV0EekbkGTjr4c9qQUVAU8pCBbuckWOe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-fit rounded-2xl border border-[#E4B9C5] bg-[#FFF0F4] px-5 py-3 text-sm font-semibold text-[#B85F7C]"
            >
              Resume ↓
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
