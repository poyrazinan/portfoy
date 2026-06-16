"use client";

import { ui } from "@/lib/ui";
import { t, type SiteSettings } from "@/lib/types";
import { useLang } from "./LangContext";

export function Footer({ settings }: { settings: SiteSettings }) {
  const { locale } = useLang();

  return (
    <footer>
      <div className="wrap foot-inner">
        <span>
          © 2026 Poyraz İnan — {t(settings.footerRights, locale)}
        </span>
        <span>
          Java ☕ · {t(settings.footerMade, locale)}
        </span>
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {ui("foot.top", locale)}
        </button>
      </div>
    </footer>
  );
}
