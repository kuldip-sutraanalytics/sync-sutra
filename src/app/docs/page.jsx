import Documentation from "@/sections/Documentation";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Docs & tutorials",
  description: "Step-by-step Sync Sutra guides: connect your WooCommerce store, use dashboards, set up exports, alerts and Google Sheets sync.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <>
      <h1 className="sr-only">Sync Sutra documentation and tutorials</h1>
      <Documentation />
    </>
  );
}
