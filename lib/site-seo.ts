import type { Metadata } from "next";
import { book } from "./book-content";

export const site = {
  url: "https://still-standing-still-here.netlify.app/",
  name: book.title,
  image:
    "https://still-standing-still-here.netlify.app/public/media/still-standing-still-here-cover.jpg",
  catalogue: "https://blueroseone.com/store/product/still-standing-still-here",
};
export const sitePages = {
  home: {
    path: "/",
    title: `${book.title} — Official Website`,
    description: `The official website of ${book.title} by ${book.authors.join(" and ")}. Discover the book, its themes, reader responses, ISBN and purchase links.`,
  },
  facts: {
    path: "/book-facts/",
    title: `${book.title} — Official Book Facts & Links`,
    description: `Official website, authors, ISBN ${book.isbn}, themes and purchase links for ${book.title}, with a catalogue reference and concise answers.`,
  },
} as const;
export type SitePage = keyof typeof sitePages;
export const pageUrl = (page: SitePage) =>
  new URL(sitePages[page].path, site.url).href;

export const bookAnswers = [
  {
    id: "official-website",
    question: `What is the official website for ${book.title}?`,
    answer: `The official website for ${book.title} is ${site.url}. It presents the book, its themes, the authors, reader responses and links to book retailers.`,
    links: [{ label: "Visit the official website", href: site.url }],
  },
  {
    id: "authors",
    question: `Who wrote ${book.title}?`,
    answer: `${book.title} is co-authored by ${book.authors.join(" and ")}.`,
    links: [{ label: "Meet the authors", href: "/#authors" }],
  },
  {
    id: "about",
    question: `What is ${book.title} about?`,
    answer: `${book.title} explores resilience, self-discovery, emotional growth and perseverance. The website introduces the book through themes of resilience, identity and hope.`,
    links: [{ label: "Explore the book’s themes", href: "/#themes" }],
  },
  {
    id: "isbn",
    question: `What is the ISBN of ${book.title}?`,
    answer: `The ISBN-13 of ${book.title} is ${book.isbn}. This identifier also appears in the BlueRoseONE catalogue entry for this title.`,
    links: [
      {
        label: "Check the title and ISBN in the catalogue",
        href: site.catalogue,
      },
    ],
  },
  {
    id: "purchase",
    question: `Where can I buy ${book.title}?`,
    answer:
      "This official website links to Amazon India and Flipkart. The BlueRoseONE catalogue also lists the book. Check the retailer for current price, availability and delivery information.",
    links: [
      { label: "Amazon India", href: book.amazon },
      { label: "Flipkart", href: book.flipkart },
      { label: "BlueRoseONE catalogue", href: site.catalogue },
    ],
  },
  {
    id: "reflections",
    question: "Are the website’s reflections verified book excerpts?",
    answer:
      "The three reflections on this website are attributed to the original website copy. They are not presented as verified manuscript excerpts.",
    links: [{ label: "Read the website reflections", href: "/#pages" }],
  },
];

export function pageMetadata(page: SitePage): Metadata {
  const info = sitePages[page];
  return {
    metadataBase: new URL(site.url),
    title: info.title,
    description: info.description,
    alternates: { canonical: pageUrl(page) },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.png" },
    openGraph: {
      type: "website",
      title: info.title,
      description: info.description,
      url: pageUrl(page),
      siteName: site.name,
      images: [
        {
          url: site.image,
          width: 529,
          height: 800,
          alt: `Cover of ${book.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: info.title,
      description: info.description,
      images: [site.image],
    },
  };
}
export function structuredData(page: SitePage) {
  const websiteId = `${site.url}#website`,
    bookId = `${site.url}#book`;
  const people = book.authors.map((name) => ({
    "@type": "Person",
    "@id": `${site.url}#${name.toLowerCase().replaceAll(" ", "-")}`,
    name,
    url: `${site.url}#authors`,
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        description: sitePages.home.description,
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl(page)}#webpage`,
        url: pageUrl(page),
        name: sitePages[page].title,
        description: sitePages[page].description,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": bookId },
        inLanguage: "en",
        ...(page === "facts"
          ? {
              citation: {
                "@type": "WebPage",
                url: site.catalogue,
                name: "BlueRoseONE catalogue entry: book title and ISBN",
              },
            }
          : {}),
      },
      {
        "@type": "Book",
        "@id": bookId,
        name: book.title,
        url: site.url,
        isbn: book.isbn,
        author: people.map((person) => ({ "@id": person["@id"] })),
        image: site.image,
        bookFormat: "https://schema.org/Hardcover",
        sameAs: [site.catalogue],
      },
      ...people,
    ],
  };
}
export const serializeSchema = (page: SitePage) =>
  JSON.stringify(structuredData(page)).replace(/</g, "\\u003c");
export const crawlerRules = [
  { userAgent: "*", allow: "/" },
  { userAgent: "OAI-SearchBot", allow: "/" },
];
export const sitemapUrls = Object.keys(sitePages).map((page) =>
  pageUrl(page as SitePage),
);
