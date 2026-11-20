import BlogPage from "@/components/blog/BlogPage";
import { getAllPosts, summary } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog",
  description: "Guides for WooCommerce store owners: analytics tools, multi-store management, automated reports, low-stock alerts and cohort analysis.",
  path: "/blog",
});

export default function Blog() {
  return <BlogPage posts={getAllPosts().map(summary)} />;
}
