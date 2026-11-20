export const SITE = {
  name: "Sync Sutra",
  tagline: "One Sync. Endless Insights.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://syncsutra.io",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.syncsutra.io",
  email: "support@syncsutra.io",
  company: "Sutra Analytics Private Limited",
  companyUrl: "https://sutraanalytics.com/",
  description:
    "Sync Sutra is WooCommerce analytics for multi-store teams: live dashboards, data tables, low-stock alerts, scheduled exports and Google Sheets sync in one clean workspace.",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "G-EHFJXLT139",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "wtkyoahkds",
  contactEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    "https://script.google.com/macros/s/AKfycbyMnsIgjZwQM8q8jIoZM7Y4D_G44kZUuI9PMJKo2aa8pzCYHVbRwNnJ68UDgz3m-sHM/exec",
};
SITE.loginUrl = SITE.appUrl;
SITE.signupUrl = `${SITE.appUrl}/signup`;

export const SOCIALS = [
  { label: "LinkedIn", url: "https://linkedin.com/company/sync-sutra" },
  { label: "Instagram", url: "https://www.instagram.com/sync.sutra/" },
  { label: "Facebook", url: "https://www.facebook.com/syncsutra" },
  { label: "YouTube", url: "https://www.youtube.com/@sync-sutra" },
];
