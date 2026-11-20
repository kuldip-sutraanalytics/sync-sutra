import PrivacyPolicy from "@/sections/PrivacyPolicy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Privacy Policy", description: "How Sync Sutra collects, uses and protects your information.", path: "/privacy-policy" });

export default function Page() {
  return <PrivacyPolicy />;
}
