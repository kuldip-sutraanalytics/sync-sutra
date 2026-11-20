"use client";
// src/components/Blog/BlogPage.jsx

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Link from "next/link";


// Categories
const categories = [
  "All",
  "Analytics",
  "Multi-Store",
  "Automation",
  "Inventory",
  "Business",
];

export default function BlogPage({ posts: sortedPosts = [] }) {
  const featuredPost =
    sortedPosts.find((post) => post.featured) || sortedPosts[0];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let filtered = sortedPosts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (post) => post.category === selectedCategory.toLowerCase(),
      );
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [sortedPosts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Blog Header */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 -z-10 grid-bg opacity-90" />
        <div className="absolute -top-32 -right-24 -z-10 h-105 w-105 rounded-full bg-[#7955e6]/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 -z-10 h-95 w-95 rounded-full bg-[#7955e6]/15 blur-3xl" />

        <div className="container-x mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="chip inline-flex items-center gap-1.5 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-[#7955e6] animate-pulse" />
              Insights for WooCommerce Store Owners
            </span>
            <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[1.02] animate-fade-up">
              The Sync Sutra
              <span className="gradient-text"> Blog</span>
            </h1>
            <p
              className="mt-4 text-lg lg:text-xl text-[#524673] max-w-2xl mx-auto leading-relaxed animate-fade-up"
              style={{ animationDelay: "60ms" }}
            >
              Practical insights, strategies, and tips to master your
              WooCommerce stores.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container-x mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-2xl overflow-hidden bg-linear-to-r from-[#f3f0fd] to-white border border-[#e2dbf7]"
          >
            <div className="grid md:grid-cols-2 gap-6 p-6 lg:p-8">
              <div className="flex flex-col justify-center space-y-4">
                <span className="chip text-xs text-[#7955e6] bg-[#7955e6]/10 w-fit">
                  Featured
                </span>
                <h2 className="font-display font-bold text-2xl lg:text-3xl text-[#120d26]">
                  {featuredPost.title}
                </h2>
                <p className="text-[#524673] leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#524673]">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="btn-primary inline-flex w-fit items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="aspect-video md:aspect-auto rounded-xl bg-linear-to-br from-[#7955e6]/10 to-[#7955e6]/5 flex items-center justify-center">
                <div className="aspect-video md:aspect-auto rounded-xl bg-linear-to-br from-[#7955e6]/10 to-[#7955e6]/5 flex items-center justify-center overflow-hidden">
                  {featuredPost.image ? (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<div class="text-[#7955e6] text-6xl lg:text-8xl opacity-30">📊</div>`;
                      }}
                    />
                  ) : (
                    <div className="text-[#7955e6] text-6xl lg:text-8xl opacity-30">
                      📊
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Content */}
      <section className="container-x mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e2dbf7]">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#7955e6] text-white shadow-[0_6px_18px_-6px_rgba(121,85,230,0.6)]"
                    : "bg-[#f3f0fd] text-[#524673] hover:bg-[#e2dbf7]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#524673]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#e2dbf7] focus:outline-none focus:ring-2 focus:ring-[#7955e6]/20 text-sm"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-[#120d26]">
              No articles found
            </h3>
            <p className="text-[#524673]">
              Try adjusting your search or filter
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

// Blog Card Component
function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl border border-[#e2dbf7] overflow-hidden hover:shadow-[0_12px_40px_-12px_rgba(121,85,230,0.15)] transition-all"
    >
      <div className="aspect-video bg-linear-to-br from-[#f3f0fd] to-[#e2dbf7] flex items-center justify-center overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if image fails to load
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `<span class="text-5xl opacity-30">📝</span>`;
            }}
          />
        ) : (
          <span className="text-5xl opacity-30">📝</span>
        )}
      </div>
      <div className="p-5 lg:p-6">
        <div className="flex items-center gap-3 text-xs text-[#524673] mb-3">
          <span className="chip bg-[#7955e6]/10 text-[#7955e6]">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display font-bold text-lg text-[#120d26] mb-2 group-hover:text-[#7955e6] transition-colors">
          <Link href={`/blog/${post.id}`} className="hover:no-underline">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm text-[#524673] leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#524673] flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <Link
            href={`/blog/${post.id}`}
            className="text-sm font-medium text-[#7955e6] hover:text-[#6a44d4] flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Read More <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
