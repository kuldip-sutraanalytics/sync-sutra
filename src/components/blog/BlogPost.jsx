"use client";
// src/components/Blog/BlogPost.jsx

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";


export default function BlogPost({ post, relatedPosts = [] }) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <article className="container-x mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        {/* Back to blog link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#524673] hover:text-[#7955e6] transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="chip bg-[#7955e6]/10 text-[#7955e6]">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#524673]">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-sm text-[#524673]">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#120d26] leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-[#524673] leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#7955e6]/10 flex items-center justify-center text-[#7955e6] font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium text-[#120d26]">
                  {post.author}
                </div>
                <div className="text-xs text-[#524673]">
                  Sync Sutra Contributor
                </div>
              </div>
            </div>

            {/* <button className="text-[#524673] hover:text-[#7955e6] transition-colors">
              <Share2 className="h-5 w-5" />
            </button> */}
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="aspect-video rounded-2xl bg-linear-to-br from-[#7955e6]/10 to-[#7955e6]/5 flex items-center justify-center overflow-hidden mb-8">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span class="text-7xl opacity-30">📊</span>`;
              }}
            />
          ) : (
            <span className="text-7xl opacity-30">📊</span>
          )}
        </div>

        {/* Content */}
        <div
          className="prose prose-lg prose-headings:text-[#120d26] prose-headings:font-display prose-headings:font-bold prose-p:text-[#524673] prose-a:text-[#7955e6] prose-li:text-[#524673] max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#e2dbf7]">
            <h3 className="font-display font-bold text-2xl text-[#120d26] mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group block p-4 rounded-xl border border-[#e2dbf7] hover:border-[#7955e6] transition-colors"
                >
                  <h4 className="font-medium text-[#120d26] group-hover:text-[#7955e6] transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-[#524673] mt-1 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-linear-to-r from-[#7955e6]/5 to-[#7955e6]/10 border border-[#7955e6]/20">
          <div className="text-center">
            <h3 className="font-display font-bold text-xl text-[#120d26]">
              Ready to Simplify Your WooCommerce Analytics?
            </h3>
            <p className="mt-2 text-[#524673]">
              Connect your stores in minutes and get instant insights.
            </p>
            <a
              href="https://app.syncsutra.io"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 mt-4"
            >
              Start Your Free Trial
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </a>
          </div>
        </div>
      </article>
    </motion.div>
  );
}
