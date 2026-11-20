import TermsCondition from "@/sections/TermsCondition";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Terms & Conditions", description: "The terms that govern your use of Sync Sutra.", path: "/terms-conditions" });

export default function Page() {
  return <TermsCondition />;
}
