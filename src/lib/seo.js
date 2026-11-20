import { SITE } from "@/data/site";

/** Build per-page metadata (title, description, canonical, OG, Twitter). */
export function createMetadata({ title, description, path = "/", image, type = "website", noindex = false }) {
  const url = `${SITE.url}${path}`;
  const desc = description || SITE.description;
  const images = image ? [{ url: image.startsWith("http") ? image : `${SITE.url}${image}` }] : undefined;
  return {
    ...(title && { title }),
    description: desc,
    alternates: { canonical: url },
    openGraph: { title: title ? `${title} | ${SITE.name}` : SITE.name, description: desc, url, siteName: SITE.name, type, ...(images && { images }) },
    twitter: { card: "summary_large_image", title: title ? `${title} | ${SITE.name}` : SITE.name, description: desc, ...(images && { images }) },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path}`,
  })),
});
