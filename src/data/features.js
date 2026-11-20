// Feature detail pages: /features/[slug]. All claims mirror the pricing + product docs.
export const FEATURES = [
  {
    slug: "multi-store",
    icon: "Store",
    title: "Multi-store management",
    short: "Connect every WooCommerce store and switch between them in one click.",
    headline: "Run every WooCommerce store from one workspace.",
    description:
      "Stop logging in to a different WordPress admin for each brand. Connect your stores once and move between dashboards, orders, products and customers with a single click.",
    benefits: [
      "Connect multiple WooCommerce stores into one dashboard",
      "Switch stores in one click — no new logins",
      "Same dashboards and tables for every store",
      "Per-store timezone and country settings",
      "Store limits scale with your plan: 1, 3 or 10 stores",
    ],
    steps: [
      { t: "Paste your store URL", d: "Add your WooCommerce store URL and REST API keys." },
      { t: "We import your data", d: "Orders, products and customers are imported securely in minutes." },
      { t: "Add the next store", d: "Repeat for every brand or client store you manage." },
    ],
    related: ["dashboards", "team-access", "sync-engine"],
  },
  {
    slug: "dashboards",
    icon: "LayoutDashboard",
    title: "Analytics dashboards",
    short: "Today, Lifetime and Custom date-range dashboards, already calculated.",
    headline: "Know how your store is doing the moment you open it.",
    description:
      "Three ready-made dashboards show what matters: how today is going, how the store has performed over its lifetime, and anything in between with a custom date range.",
    benefits: [
      "Today's, Lifetime and Custom date-range dashboards",
      "Core KPIs: revenue, orders, customers, AOV, shipping, discount and refunds",
      "Orders by status and revenue by location",
      "Top products and top customers",
      "Monthly and yearly trends plus revenue by category on higher plans",
    ],
    steps: [
      { t: "Connect a store", d: "Dashboards populate automatically after the first sync." },
      { t: "Pick a view", d: "Today, Lifetime or a custom date range." },
      { t: "Act on it", d: "Spot top products, slow movers, location trends and refund leaks." },
    ],
    related: ["customer-insights", "data-tables", "scheduled-exports"],
  },
  {
    slug: "data-tables",
    icon: "Table2",
    title: "Orders, products & customers tables",
    short: "Fast, filterable tables with the columns you actually care about.",
    headline: "Compact tables that feel like a spreadsheet — without the babysitting.",
    description:
      "Browse orders, products and customers in clean tables with sticky headers, sortable columns and column visibility toggles. Filter by date, search across data and switch stores instantly.",
    benefits: [
      "Sticky headers and separated scroll axes",
      "Sortable columns and column visibility toggles",
      "Date-range filters and quick search",
      "Paginated navigation for large stores",
      "Orders, products and customers in one place",
    ],
    steps: [
      { t: "Open a table", d: "Choose Orders, Products or Customers." },
      { t: "Shape the view", d: "Pick columns, sort and filter by date or keyword." },
      { t: "Export what you need", d: "Send the data to CSV/Excel or Google Sheets." },
    ],
    related: ["google-sheets", "scheduled-exports", "multi-store"],
  },
  {
    slug: "low-stock-alerts",
    icon: "Bell",
    title: "Low-stock alerts",
    short: "Email alerts when stock drops below your threshold.",
    headline: "Never lose a sale to an empty shelf.",
    description:
      "Set a quantity threshold and Sync Sutra emails you when a product runs low, so you can restock before customers hit “out of stock”.",
    benefits: [
      "Quantity-threshold email alerts",
      "Low-stock and out-of-stock lists on Growth and above",
      "Alert allowance by plan: 5, 25 or unlimited",
      "Works across every connected store",
    ],
    steps: [
      { t: "Choose a threshold", d: "Decide the stock level that should trigger a warning." },
      { t: "Get notified", d: "Receive an email as soon as a product crosses it." },
      { t: "Restock in time", d: "Use the low-stock list to prioritise what to reorder." },
    ],
    related: ["data-tables", "sync-engine", "scheduled-exports"],
  },
  {
    slug: "scheduled-exports",
    icon: "Download",
    title: "Automated Data/Report exports",
    short: "Scheduled CSV/Excel Data exports and reports delivered directly in your email.",
    headline: "Reports that send themselves.",
    description:
      "Stop spending an afternoon every week on manual exports. Schedule data exports and report exports and have them land in your inbox — or your client's.",
    benefits: [
      "Scheduled CSV and Excel data exports",
      "report exports delivered into email",
      "Daily, weekly and monthly schedules (by plan)",
      "Hand clients clean performance reports automatically",
    ],
    steps: [
      { t: "Pick a report", d: "Choose a data export or a report export." },
      { t: "Set the schedule", d: "Daily, weekly or monthly, depending on your plan." },
      { t: "Receive it by email", d: "Reports arrive on schedule, with no manual work." },
    ],
    related: ["dashboards", "google-sheets", "multi-store"],
  },
  {
    slug: "google-sheets",
    icon: "FileSpreadsheet",
    title: "Google Sheets sync",
    short: "Live order sync into Google Sheets on every changes occurred.",
    headline: "Build your own dashboards in Sheets — with live data.",
    description:
      "Sync orders straight into Google Sheets and keep working in the tool your team already knows. Available on every plan, including Free.",
    benefits: [
      "Live order sync into Google Sheets",
      "Multi-step guided setup",
      "Included on every plan",
      "No copy-paste from exports",
    ],
    steps: [
      { t: "Connect Google", d: "Authorise Sync Sutra and choose your spreadsheet." },
      { t: "Orders flow in", d: "New orders sync into your sheet automatically." },
      { t: "Build on top", d: "Use formulas, pivots and charts as you normally would." },
    ],
    related: ["data-tables", "scheduled-exports", "sync-engine"],
  },
  {
    slug: "sync-engine",
    icon: "RefreshCw",
    title: "Flexible sync",
    short: "From a nightly sync to minute-level and on-demand refreshes.",
    headline: "Fresh data, on the schedule that suits you.",
    description:
      "Choose how often your store data refreshes — from a nightly sync on Free to hourly, minutely and instant on-demand syncs on higher plans.",
    benefits: [
      "Nightly sync on Free",
      "Custom daily and hourly sync (every 3, 4, 6 or 12 hours) on Starter",
      "Daily, hourly and minutely sync plus instant on-demand sync on Growth",
      "Full sync flexibility on Scale",
    ],
    steps: [
      { t: "Pick a frequency", d: "Choose from the options available on your plan." },
      { t: "Sync runs automatically", d: "Your dashboards and tables stay up to date." },
      { t: "Need it now?", d: "Trigger an instant sync on Growth and Scale." },
    ],
    related: ["dashboards", "low-stock-alerts", "multi-store"],
  },
  {
    slug: "team-access",
    icon: "Users2",
    title: "Team sharing",
    short: "Give your team read-only access without WooCommerce admin.",
    headline: "Share insights — not admin access.",
    description:
      "Invite team members so they can see live performance without logging in to WooCommerce admin. Sharing is read-only, so your store stays safe.",
    benefits: [
      "Read-only team member sharing",
      "No WooCommerce admin access required",
      "Team size by plan: 1, 2, 5 or unlimited members",
      "Great for sales teams, managers and clients",
    ],
    steps: [
      { t: "Invite a teammate", d: "Add them by email from your workspace." },
      { t: "They see the data", d: "Dashboards and tables, read-only." },
      { t: "Stay in control", d: "Your store credentials are never shared." },
    ],
    related: ["multi-store", "dashboards", "scheduled-exports"],
  },
  {
    slug: "customer-insights",
    icon: "TrendingUp",
    title: "Customer & retention insights",
    short: "Retention, top customers and revenue by location — pre-calculated.",
    headline: "See who comes back, and who is worth the most.",
    description:
      "Cohort-style retention, top customers and revenue by location are calculated for you, so analysts and founders can skip the SQL.",
    benefits: [
      "Customer retention chart on Growth and above",
      "Top customers and top products",
      "Revenue by location and by category",
      "Spot refund leaks and slow movers",
    ],
    steps: [
      { t: "Sync your orders", d: "Customer history builds from your order data." },
      { t: "Open the insights", d: "Retention, locations and categories are ready." },
      { t: "Decide faster", d: "Double down on what works, fix what doesn't." },
    ],
    related: ["dashboards", "data-tables", "scheduled-exports"],
  },
];

export const getFeature = (slug) => FEATURES.find((f) => f.slug === slug);
