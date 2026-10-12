import { serializeSchema, type SitePage } from "../../lib/site-seo";
export default function StructuredData({ page }: { page: SitePage }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeSchema(page) }}
    />
  );
}
