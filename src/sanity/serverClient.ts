import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./env";

/**
 * Sunucu-tarafı yazma client'ı. SANITY_API_WRITE_TOKEN (NEXT_PUBLIC_ değil → tarayıcıya
 * sızmaz) ile mutation atar. SADECE route handler / server kodundan import edilmeli.
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
