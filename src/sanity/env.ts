export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// `projectId` falls back to a harmless placeholder so the app builds and runs
// before a real Sanity project is connected. When it's still the placeholder we
// skip fetching and render the built-in default content instead.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";

export const isSanityConfigured = projectId !== "placeholder";
