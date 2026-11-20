export const USE_CASES = [
  {
    slug: "multi-brand-owners",
    icon: "Boxes",
    title: "Multi-brand store owners",
    short: "Run upto 10 stores like one.",
    headline: "Run every brand like one business.",
    description:
      "Jump across brands in seconds, see what's working and optimise instantly — without juggling WordPress admins.",
    pains: ["Logging in to each store separately", "No side-by-side view of performance", "Reports built by hand every month"],
    wins: ["One workspace for every store", "Same dashboards across brands", "Scheduled reports straight to your inbox"],
    features: ["multi-store", "dashboards", "scheduled-exports"],
    plan: "Growth (3 stores) or Scale (10 stores)",
  },
  {
    slug: "woocommerce-developers",
    icon: "Code2",
    title: "WooCommerce developers",
    short: "Scale your client roster.",
    headline: "Look like a hero, every Monday.",
    description:
      "Plug every client store into one workspace and auto-deliver weekly performance reports with no spreadsheet wrangling.",
    pains: ["Clients asking for “last month's numbers”", "Manual CSV exports", "Admin access shared around"],
    wins: ["Automatic weekly and monthly reports", "Read-only sharing for clients", "All client stores in one place"],
    features: ["scheduled-exports", "team-access", "multi-store"],
    plan: "Growth or Scale",
  },
  {
    slug: "agencies",
    icon: "Building2",
    title: "Agencies",
    short: "Scale your clients without the chaos.",
    headline: "Scale your clients without the chaos.",
    description:
      "Bring every client store into one dashboard. Monitor performance, spot opportunities and optimise campaigns faster with data you can trust.",
    pains: ["Dozens of logins", "Inconsistent reporting", "Slow answers to client questions"],
    wins: ["Consistent dashboards for every client", "Unlimited team members on Scale", "A dedicated account manager on Scale"],
    features: ["multi-store", "team-access", "customer-insights"],
    plan: "Scale",
  },
  {
    slug: "ecommerce-teams",
    icon: "Briefcase",
    title: "Store managers & analysts",
    short: "Live numbers without touching WooCommerce admin.",
    headline: "Everyone sees the numbers they need.",
    description:
      "Store managers ship reports faster, sales teams get live order feeds and analysts get retention and revenue breakdowns that are already calculated.",
    pains: ["Waiting for someone to export data", "Too many admin permissions", "No SQL skills in the team"],
    wins: ["Live dashboards for the whole team", "Read-only access", "Retention and location insights ready to use"],
    features: ["dashboards", "customer-insights", "low-stock-alerts"],
    plan: "Starter, Growth or Scale",
  },
];
export const getUseCase = (slug) => USE_CASES.find((u) => u.slug === slug);
