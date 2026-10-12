import BookFacts from "../../components/experience/BookFacts";
import StructuredData from "../../components/experience/StructuredData";
import { pageMetadata } from "../../lib/site-seo";
export const metadata = pageMetadata("facts");
export default function BookFactsPage() {
  return (
    <>
      <BookFacts />
      <StructuredData page="facts" />
    </>
  );
}
