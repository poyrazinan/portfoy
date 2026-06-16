"use client";

import { useEffect, useState } from "react";

import type { HomeData, Locale } from "@/lib/types";
import { LangContext } from "./LangContext";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { ExperienceEducation } from "./ExperienceEducation";
import { Projects } from "./Projects";
import { Cv } from "./Cv";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function Portfolio({ data }: { data: HomeData }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  // Restore the saved language on mount (matches the prototype's localStorage).
  useEffect(() => {
    try {
      const saved = localStorage.getItem("pi_lang");
      if (saved === "tr" || saved === "en") setLocaleState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("pi_lang", l);
    } catch {
      /* ignore */
    }
  };

  const { settings, skills, experience, education, projects } = data;

  return (
    <LangContext.Provider value={{ locale, setLocale }}>
      <Nav />
      <a id="top" />
      <main className="wrap">
        <Hero settings={settings} />
        <About settings={settings} />
        <Skills settings={settings} skills={skills} />
        <ExperienceEducation
          settings={settings}
          experience={experience}
          education={education}
        />
        <Projects settings={settings} projects={projects} />
        <Cv settings={settings} />
        <Contact settings={settings} />
      </main>
      <Footer settings={settings} />
    </LangContext.Provider>
  );
}
