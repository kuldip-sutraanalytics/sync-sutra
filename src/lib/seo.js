import { SITE } from "@/data/site";

/** Build per-page metadata (title, description, canonical, OG, Twitter). */
export function createMetadata({ title, description, path = "/", image, type = "website", noindex = false }) {
  const url = `${SITE.url}${path}`;
  const desc = description || SITE.description;
   const imgPath = image || "/logo.png";
  const isLogo = imgPath === "/logo.png";
  const images = [
    {
      url: imgPath.startsWith("http") ? imgPath : `${SITE.url}${imgPath}`,
      ...(isLogo && { width: 376, height: 356, alt: "Sync Sutra logo" }),
    },
  ];

  // Title can be a string ("Pricing") or an object ({ absolute: "Full title" }) – the home page uses the object form.
  const socialTitle =
    title && typeof title === "object"
      ? title.absolute || title.default || SITE.name
      : title
        ? `${title} | ${SITE.name}`
        : SITE.name;

  return {
    ...(title && { title }),
    description: desc,
    alternates: { canonical: url },
    openGraph: { title: socialTitle, description: desc, url, siteName: SITE.name, type, images},
    twitter: { card: isLogo ? "summary" : "summary_large_image", title: socialTitle, description: desc, images },
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