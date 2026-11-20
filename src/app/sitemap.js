import { SITE } from "@/data/site";
import { FEATURES } from "@/data/features";
import { USE_CASES } from "@/data/use-cases";
import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const now = new Date();
  const stat = ["", "/features", "/pricing", "/about", "/integrations", "/use-cases", "/roadmap", "/faq", "/security", "/contact", "/docs", "/blog"].map((p) => ({
    url: `${SITE.url}${p}`, lastModified: now, changeFrequency: p === "" || p === "/blog" ? "weekly" : "monthly", priority: p === "" ? 1 : p === "/pricing" || p === "/features" ? 0.9 : 0.7,
  }));
  const legal = ["/privacy-policy", "/terms-conditions", "/refund-policy"].map((p) => ({ url: `${SITE.url}${p}`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }));
  const feats = FEATURES.map((f) => ({ url: `${SITE.url}/features/${f.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const uses = USE_CASES.map((u) => ({ url: `${SITE.url}/use-cases/${u.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  const posts = getAllPosts().map((p) => ({ url: `${SITE.url}/blog/${p.id}`, lastModified: new Date(p.date), changeFrequency: "monthly", priority: 0.6 }));
  return [...stat, ...feats, ...uses, ...posts, ...legal];
}
