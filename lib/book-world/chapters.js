// Real existing sections only. Each has its own rhythm, object arrangement and path.
export const CHAPTERS = [
  {
    id: "inside",
    name: "The book",
    selectors: [".synopsis-copy", ".synopsis-purchase", ".synopsis-facts"],
    motif: "cover",
    sway: 0.12,
  },
  {
    id: "pages",
    name: "Themes and reflections",
    selectors: [".pages-intro", ".reading-preview"],
    motif: "leaves",
    sway: -0.25,
  },
  {
    id: "themes",
    name: "The meaning",
    selectors: [".meaning-heading", ".theme-row"],
    motif: "pillars",
    sway: 0.38,
  },
  {
    id: "chapters",
    name: "The chapter journey",
    selectors: [
      ".chapter-header",
      ".chapter-tabs",
      ".chapter-panels",
      ".chapter-footer",
    ],
    combine: [1, 2, 3],
    motif: "steps",
    sway: 0.24,
  },
  {
    id: "authors",
    name: "Behind the pages",
    selectors: [".authors-copy", ".author-monogram"],
    motif: "voices",
    sway: -0.3,
  },
  {
    id: "voices",
    name: "Reader responses",
    selectors: [".reviews-header", ".reader-review"],
    motif: "quotes",
    sway: 0.28,
  },
  {
    id: "buy",
    name: "Into the light",
    selectors: [".final-purchase", ".final-book-details"],
    motif: "summit",
    sway: 0,
  },
];
