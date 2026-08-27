'use client';

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const [globalTheme, setGlobalTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("globalTheme");
    const nextTheme = storedTheme === "dark" ? "dark" : "light";
    setGlobalTheme(nextTheme);
  }, []);

  useEffect(() => {
    if (!globalTheme) {
      return;
    }

    document.body.classList.toggle("dark", globalTheme === "dark");
    localStorage.setItem("globalTheme", globalTheme);
  }, [globalTheme]);

  const toggleDarkTheme = () => {
    setGlobalTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const isDark = globalTheme === "dark";

  return (
    <button
      type="button"
      onClick={toggleDarkTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={[
        "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]",
        isDark
          ? "border-white/10 bg-[#0b1020] text-slate-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:border-violet-400/40 hover:bg-[#111833]"
          : "border-slate-200 bg-white text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-violet-300 hover:text-violet-600",
      ].join(" ")}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}
