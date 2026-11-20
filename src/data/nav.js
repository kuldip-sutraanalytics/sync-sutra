import { USE_CASES } from "@/data/use-cases";
import { getFeature } from "@/data/features";

// Main features shown in the dropdown (order = display order)
const MAIN_FEATURES = [
  { slug: "multi-store", desc: "Manage Upto 10 Stores like one" },
  { slug: "dashboards", desc: "Today, Lifetime & Custom views" },
  { slug: "low-stock-alerts", desc: "Email alerts before stock runs out" },
  { slug: "google-sheets", desc: "Orders sync straight into Sheets" },
  { slug: "scheduled-exports", desc: "CSV, Excel & reports by email" },
];

export const NAV = [
  {
    label: "Features",
    children: [
      ...MAIN_FEATURES.map(({ slug, desc }) => {
        const f = getFeature(slug);
        return { label: f.title, href: `/features/${f.slug}`, desc, icon: f.icon };
      }),
      { label: "All features", href: "/features", desc: "See everything Sync Sutra can do", icon: "Layers" },
    ],
  },
  {
    label: "Made for",
    children: [
      ...USE_CASES.map((u) => ({
        label: u.title,
        href: `/use-cases/${u.slug}`,
        desc: u.short,
        icon: u.icon,
      })),
      {
        label: "See everyone it's for",
        href: "/use-cases",
        desc: "All the teams using Sync Sutra",
        icon: "Users",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog", desc: "Guides for WooCommerce teams", icon: "BookOpen" },
      { label: "Docs & tutorials", href: "/docs", desc: "Step-by-step setup guides", icon: "FileText" },
      { label: "Integrations", href: "/integrations", desc: "WooCommerce, Sheets & more", icon: "Plug" },
      { label: "Roadmap", href: "/roadmap", desc: "What we're building next", icon: "Rocket" },
      { label: "FAQ", href: "/faq", desc: "Quick answers", icon: "LifeBuoy" },
      { label: "Security", href: "/security", desc: "How we handle your data", icon: "ShieldCheck" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { l: "Features", h: "/features" },
      { l: "Dashboards", h: "/features/dashboards" },
      { l: "Integrations", h: "/integrations" },
      { l: "Pricing", h: "/pricing" },
      { l: "Roadmap", h: "/roadmap" },
    ],
  },
  {
    title: "Made for",
    links: [
      ...USE_CASES.map((u) => ({ l: u.title, h: `/use-cases/${u.slug}` })),
    ],
  },
  {
    title: "Resources",
    links: [
      { l: "Blog", h: "/blog" },
      { l: "Docs & tutorials", h: "/docs" },
      { l: "FAQ", h: "/faq" },
      { l: "Security", h: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { l: "About", h: "/about" },
      { l: "Contact", h: "/contact" },
      { l: "Privacy Policy", h: "/privacy-policy" },
      { l: "Terms & Conditions", h: "/terms-conditions" },
      { l: "Refund Policy", h: "/refund-policy" },
    ],
  },
];