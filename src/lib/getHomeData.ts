import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { homeQuery } from "@/sanity/queries";

import { defaultData } from "./defaults";
import type { HomeData } from "./types";

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** Override wins, but empty/missing values fall back to base. */
function deepMerge<T>(base: T, override: unknown): T {
  if (override === null || override === undefined) return base;
  if (Array.isArray(override)) {
    return (override.length ? override : (base as unknown)) as T;
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const out: Record<string, unknown> = { ...base };
    for (const key of Object.keys(override)) {
      out[key] = deepMerge((base as Record<string, unknown>)[key], override[key]);
    }
    return out as T;
  }
  if (override === "") return base;
  return override as T;
}

export async function getHomeData(): Promise<HomeData> {
  if (!isSanityConfigured) return defaultData;

  try {
    const data = await client.fetch<Partial<HomeData> | null>(
      homeQuery,
      {},
      { next: { revalidate: 60, tags: ["home"] } }
    );
    if (!data) return defaultData;

    return {
      settings: deepMerge(defaultData.settings, data.settings),
      skills: data.skills?.length ? data.skills : defaultData.skills,
      experience: data.experience?.length ? data.experience : defaultData.experience,
      education: data.education?.length ? data.education : defaultData.education,
      projects: data.projects?.length ? data.projects : defaultData.projects,
    };
  } catch (e) {
    console.error("[sanity] fetch failed — falling back to default content:", e);
    return defaultData;
  }
}
