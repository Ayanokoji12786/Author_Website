import type { Metadata } from "next";
import { book } from "../lib/book-content";
import { introBootstrap } from "../lib/intro-bootstrap";
import "./globals.css";

const title = "Still Standing, Still Here — Dhruva Nerella & Tattva Nerella";
const description =
  "A literary companion for the climb. Discover Still Standing, Still Here by Dhruva Nerella and Tattva Nerella: its themes, chapter guide, reader voices, and where to buy the book.";

export const metadata: Metadata = {
  metadataBase: new URL("https://still-standing-still-here.netlify.app"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/",
    siteName: book.title,
    images: [{ url: book.cover, alt: `Cover of ${book.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [book.cover],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootstrap }} />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              name: book.title,
              author: book.authors.map((name) => ({ "@type": "Person", name })),
              isbn: book.isbn,
              image: book.cover,
              url: "https://still-standing-still-here.netlify.app/",
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
