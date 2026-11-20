"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Globe,
  UserCheck,
  FileText,
  ExternalLink,
  Server,
  Cookie,
  Calendar,
  Info,
  Share2,
  Clock,
} from "lucide-react";

export default function PrivacyPolicy() {
  const effectiveDate = "15, April 2026";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    {
      id: "information-collection",
      title: "1. INFORMATION WE COLLECT",
      icon: Database,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We collect different types of information to provide and improve our
            Service.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#120d26] mb-2">
                1.1 Personal Information
              </h4>
              <p className="text-[#524673] leading-relaxed mb-2">
                When you register for an account or use our Service, we may
                collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#524673]">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Profile image (If uploaded)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#120d26] mb-2">
                1.2 Account and Authentication Data
              </h4>
              <p className="text-[#524673] leading-relaxed">
                To provide secure access, we collect login credentials (email
                and password) - Encrypted, One-Time Password (OTP) verification
                data, authentication tokens, and session data. Authentication
                and user management are handled via Supabase.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#120d26] mb-2">
                1.3 WooCommerce Store Data
              </h4>
              <p className="text-[#524673] leading-relaxed mb-2">
                When you connect your WooCommerce store to Sync Sutra, we
                collect:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#524673]">
                <li>Store URL</li>
                <li>
                  API credentials (Client ID and Client Secret) - Encrypted
                </li>
                <li>Store configuration data (timezone, country, etc.)</li>
              </ul>
              <p className="text-[#524673] leading-relaxed mt-2">
                We also retrieve and process operational store data including
                orders, products, and customers. This data is used strictly for
                analytics, reporting, and automation features within the
                Service.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "how-we-use",
      title: "2. HOW WE USE YOUR INFORMATION",
      icon: Eye,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Create and manage user accounts</li>
            <li>Authenticate users and maintain secure access</li>
            <li>Connect and sync WooCommerce store data</li>
            <li>Provide dashboards, analytics, and insights</li>
            <li>Enable features such as filtering, reporting, and exports</li>
            <li>Send transactional emails (alerts, reports, updates)</li>
            <li>Provide customer support</li>
            <li>Improve performance, reliability, and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>
      ),
    },
    {
      id: "third-party",
      title: "3. THIRD-PARTY SERVICES",
      icon: Server,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We use trusted third-party providers, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>
              <strong>Supabase</strong> (authentication & database)
            </li>
            <li>
              <strong>Stripe</strong> (payment processing)
            </li>
            <li>
              <strong>Postmark / MailerSend</strong> (email delivery)
            </li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            These providers process data on our behalf and are obligated to
            protect it under their own privacy policies.
          </p>
        </div>
      ),
    },
    {
      id: "data-security",
      title: "4. DATA STORAGE AND SECURITY",
      icon: Lock,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We implement industry-standard measures including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Encryption of sensitive data (e.g., API credentials)</li>
            <li>Secure authentication systems</li>
            <li>Role-based access controls</li>
            <li>Continuous monitoring and vulnerability checks</li>
          </ul>
          {/* <p className="text-[#524673] leading-relaxed">
            However, no system is completely secure, and we cannot guarantee
            absolute security.
          </p> */}
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "5. DATA RETENTION",
      icon: Clock,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We retain data only as long as necessary to provide the Service,
            maintain your account, and meet legal and compliance requirements.
            Upon account deletion, data will be deleted or anonymized within a
            reasonable timeframe unless legally required otherwise.
          </p>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "6. DATA SHARING AND DISCLOSURE",
      icon: Share2,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed font-semibold">
            We do not sell your personal data.
          </p>
          <p className="text-[#524673] leading-relaxed mt-2">
            We may share data:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>With service providers helping operate the platform</li>
            <li>To comply with legal obligations or government requests</li>
            <li>To enforce our Terms</li>
            <li>To protect rights, safety, or property</li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "7. YOUR RIGHTS",
      icon: UserCheck,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Depending on your jurisdiction, you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>Restrict or object to processing</li>
          </ul>
          <p className="text-[#524673] leading-relaxed pt-2">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:support@syncsutra.io"
              className="text-[#7955e6] hover:underline"
            >
              support@syncsutra.io
            </a>
          </p>
        </div>
      ),
    },
    {
      id: "cookies",
      title: "8. COOKIES AND TRACKING",
      icon: Cookie,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">We use cookies to:</p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Maintain sessions</li>
            <li>Improve user experience</li>
            <li>Analyze usage</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            You can manage cookies through your browser settings.
          </p>
        </div>
      ),
    },
    {
      id: "policy-updates",
      title: "9. CHANGES TO THIS POLICY",
      icon: Calendar,
      content: (
        <p className="text-[#524673] leading-relaxed">
          We may update this Privacy Policy periodically. Updates will be posted
          here with a revised effective date. Continued use of the Service means
          acceptance of changes.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-[#faf8ff]">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-[#7955e6] to-[#5a3db3] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Shield className="h-16 w-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Privacy Policy
            </h1>
            <p className="text-indigo-100 text-lg">
              Effective Date: {effectiveDate}
            </p>
            <p className="text-indigo-100/80 mt-4 max-w-3xl mx-auto">
              This Privacy Policy applies to Sync Sutra, a product owned and
              operated by <strong>Sutra Analytics Private Limited. </strong> It
              describes how we collect, use, disclose, and protect your
              information when you access or use our website and web-based
              software platform.
            </p>
            <p className="text-indigo-100/70 mt-3 text-sm">
              By accessing or using Sync Sutra, you agree to the collection and
              use of information in accordance with this Privacy Policy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-[#e2dbf7] overflow-hidden hover:shadow-lg transition-shadow duration-300 scroll-mt-24"
              >
                <div className="px-6 py-4 bg-[#faf8ff] border-b border-[#e2dbf7] flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#120d26]">
                    {section.title}
                  </h2>
                </div>
                <div className="px-6 py-5">{section.content}</div>
              </motion.div>
            );
          })}

          {/* Contact Section - Section 10 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-[#7955e6] rounded-2xl p-8 text-center text-white"
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-white/90" />
            <h2 className="text-2xl font-bold mb-3">10. CONTACT INFORMATION</h2>
            <p className="text-indigo-100 mb-4">
              If you have questions regarding this Privacy Policy:
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Sutra Analytics Private Limited</p>
              <p>Product: Sync Sutra</p>
              <a
                href="mailto:support@syncsutra.io"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7955e6] rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mt-3"
              >
                <Mail className="h-4 w-4" />
                support@syncsutra.io
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
