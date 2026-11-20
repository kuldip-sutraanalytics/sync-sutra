import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page took a" highlight="wrong turn." description="The page you're looking for doesn't exist or has moved.">
      <Link href="/" className="btn-primary">Back home</Link>
      <Link href="/features" className="btn-secondary">Explore features</Link>
    </PageHero>
  );
}
