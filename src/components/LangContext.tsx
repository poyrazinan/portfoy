"use client";

import { createContext, useContext } from "react";

import type { Locale } from "@/lib/types";

type LangCtx = { locale: Locale; setLocale: (l: Locale) => void };

export const LangContext = createContext<LangCtx>({
  locale: "tr",
  setLocale: () => {},
});

export const useLang = () => useContext(LangContext);
