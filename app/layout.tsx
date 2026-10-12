import type { Metadata } from "next";
import { pageMetadata } from "../lib/site-seo";
import { introBootstrap } from "../lib/intro-bootstrap";
import "./globals.css";

export const metadata: Metadata = pageMetadata("home");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
