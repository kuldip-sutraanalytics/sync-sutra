import { notFound } from "next/navigation";
import BlogPost from "@/components/blog/BlogPost";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getPost, getRelated } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";

export const generateStaticParams = () => getAllPosts().map((p) => ({ slug: p.id }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.id}`, image: post.image, type: "article" });
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { content, ...meta } = post;
  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${SITE.url}${post.image}` : undefined,
    datePublished: new Date(post.date).toISOString(),
    author: { "@type": "Organization", name: post.author || SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` } },
    mainEntityOfPage: `${SITE.url}/blog/${post.id}`,
  };
  return (
    <>
      <JsonLd data={ld} />
      <BlogPost post={post} relatedPosts={getRelated(post)} />
    </>
  );
}
