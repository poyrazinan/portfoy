import { defineType, defineField } from "sanity";

/**
 * kwin deployment'larından gelen aylık lisans kullanım ölçümü (peak aktif danışman).
 * Doküman _id = `consultantPeak.<müşteri>.<yıl>-<ay>` (deterministik → upsert/dedup).
 */
export const consultantPeak = defineType({
  name: "consultantPeak",
  title: "Lisans Kullanımı (Aylık Peak)",
  type: "document",
  fields: [
    defineField({ name: "customerKey", title: "Müşteri (domain)", type: "string" }),
    defineField({ name: "year", title: "Yıl", type: "number" }),
    defineField({ name: "month", title: "Ay", type: "number" }),
    defineField({ name: "peak", title: "Peak aktif danışman", type: "number" }),
    defineField({ name: "computedAtUtc", title: "Hesaplanma (UTC)", type: "datetime" }),
    defineField({ name: "receivedAt", title: "Alınma", type: "datetime" }),
  ],
  orderings: [
    {
      title: "Dönem (yeni → eski)",
      name: "periodDesc",
      by: [
        { field: "year", direction: "desc" },
        { field: "month", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { customerKey: "customerKey", year: "year", month: "month", peak: "peak" },
    prepare: ({ customerKey, year, month, peak }) => ({
      title: `${customerKey ?? "?"} — ${year}-${String(month ?? 0).padStart(2, "0")}`,
      subtitle: `Peak: ${peak ?? "?"}`,
    }),
  },
});
