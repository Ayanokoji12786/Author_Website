import Script from "next/script";
import LiteraryExperience from "../components/experience/LiteraryExperience";

export default function HomePage() {
  return (
    <>
      <LiteraryExperience />
      <Script src="/experience.js" strategy="afterInteractive" />
      <Script src="/book-journey.js" strategy="afterInteractive" />
    </>
  );
}
