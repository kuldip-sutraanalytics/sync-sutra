import RefundPolicy from "@/sections/RefundPolicy";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Refund Policy", description: "Sync Sutra's refund and cancellation policy.", path: "/refund-policy" });

export default function Page() {
  return <RefundPolicy />;
}
