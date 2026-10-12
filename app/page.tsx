import Script from "next/script";
import LiteraryExperience from "../components/experience/LiteraryExperience";
import StructuredData from "../components/experience/StructuredData";

export default function HomePage() {
  return (
    <>
      <LiteraryExperience />
      <StructuredData page="home" />
      <Script src="/experience.js" strategy="afterInteractive" />
      <Script src="/book-journey.js" strategy="afterInteractive" />
    </>
  );
}
