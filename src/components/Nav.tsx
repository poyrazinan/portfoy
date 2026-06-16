"use client";

import { useEffect, useState } from "react";

import { ui } from "@/lib/ui";
import { useLang } from "./LangContext";

export function Nav() {
  const { locale, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="dot" />
          <b>Poyraz&nbsp;İnan</b>
        </a>
        <nav className="nav-links">
          <a href="#about">{ui("nav.about", locale)}</a>
          <a href="#skills">{ui("nav.skills", locale)}</a>
          <a href="#experience">{ui("nav.exp", locale)}</a>
          <a href="#work">{ui("nav.work", locale)}</a>
          <a href="#cv">{ui("nav.cv", locale)}</a>
          <a href="#contact">{ui("nav.contact", locale)}</a>
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button
            className={locale === "tr" ? "active" : ""}
            onClick={() => setLocale("tr")}
            aria-pressed={locale === "tr"}
          >
            TR
          </button>
          <button
            className={locale === "en" ? "active" : ""}
            onClick={() => setLocale("en")}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
