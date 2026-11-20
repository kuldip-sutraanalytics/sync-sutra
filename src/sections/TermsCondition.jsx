"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  FileText,
  UserCheck,
  Lock,
  ShoppingCart,
  CreditCard,
  Database,
  AlertCircle,
  Scale,
  Gavel,
  Mail,
  Calendar,
  Server,
  Users,
  Key,
  BookOpen,
  Ban,
  XCircle,
} from "lucide-react";

export default function TermsConditions() {
  const effectiveDate = "15, April 2026";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    {
      id: "description",
      title: "1. DESCRIPTION OF SERVICE",
      icon: Server,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Sync Sutra is a web-based SaaS platform that enables users to
            connect their WooCommerce stores and access features including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Data synchronization of store information</li>
            <li>Analytics dashboards and performance insights</li>
            <li>Data tables for orders, products, and customers</li>
            <li>Automated alerts (e.g., low stock notifications)</li>
            <li>Scheduled reports and exports (CSV, Excel, etc.)</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            Features and functionality may vary depending on your selected
            subscription plan.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "2. ELIGIBILITY",
      icon: UserCheck,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            You must be at least 16 years old and capable of entering into a
            legally binding agreement. By using the Service, you represent and
            warrant that you meet these requirements.
          </p>
        </div>
      ),
    },
    {
      id: "account-security",
      title: "3. ACCOUNT REGISTRATION AND SECURITY",
      icon: Lock,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            To use the Service, you must create an account and provide accurate
            information. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Maintain confidentiality of login credentials</li>
            <li>Be responsible for all activities under your account</li>
            <li>Notify us immediately of any unauthorized access</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            We are not liable for any loss resulting from unauthorized use of
            your account.
          </p>
        </div>
      ),
    },
    {
      id: "authentication",
      title: "4. AUTHENTICATION AND SECURITY",
      icon: Key,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Authentication may include:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Email and password login</li>
            <li>OTP-based verification</li>
            <li>Session and token-based access</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            We reserve the right to implement additional security measures at
            any time.
          </p>
        </div>
      ),
    },
    {
      id: "woocommerce-integration",
      title: "5. WOOCOMMERCE INTEGRATION",
      icon: ShoppingCart,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            The Service allows integration with WooCommerce via API credentials.
            By connecting your store, you:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Authorize us to access and process your store data</li>
            <li>Confirm you have legal rights to share such data</li>
            <li>Accept responsibility for maintaining API security</li>
          </ul>
          <p className="text-[#524673] leading-relaxed mt-2">
            We are not responsible for issues caused by:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Incorrect configurations</li>
            <li>Revoked permissions</li>
            <li>Third-party service failures</li>
          </ul>
        </div>
      ),
    },
    {
      id: "subscriptions",
      title: "6. SUBSCRIPTIONS AND PAYMENTS",
      icon: CreditCard,
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Certain features require a paid subscription</li>
            <li>Payments are processed through Stripe</li>
            <li>Subscriptions are billed in advance on a recurring basis</li>
            <li>Plans and pricing may change with reasonable notice</li>
            <li>
              Failure to complete payment may result in suspension or restricted
              access
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "free-access",
      title: "7. FREE ACCESS AND TRIALS",
      icon: Calendar,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We may offer free trials or limited access:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Features may be restricted</li>
            <li>Availability may change at any time</li>
            <li>guarantee of continued free access</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-processing",
      title: "8. DATA PROCESSING AND ACCURACY",
      icon: Database,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Sync Sutra processes data from third-party sources (e.g.,
            WooCommerce). You acknowledge:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Data accuracy depends on external systems</li>
            <li>Delays or inconsistencies may occur</li>
            <li>Real-time accuracy is not guaranteed</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            All business decisions made using the Service are at your own risk.
          </p>
        </div>
      ),
    },
    {
      id: "user-responsibilities",
      title: "9. USER RESPONSIBILITIES",
      icon: Users,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">You agree to:</p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Use the Service only for lawful purposes</li>
            <li>Provide accurate and up-to-date information</li>
            <li>Ensure your integrations are properly configured</li>
          </ul>
        </div>
      ),
    },
    {
      id: "acceptable-use",
      title: "10. ACCEPTABLE USE",
      icon: AlertCircle,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Use the Service for illegal or unauthorized purposes</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Interfere with system integrity or performance</li>
            <li>Reverse engineer, copy, or exploit the platform</li>
            <li>
              Use the Service in a way that harms other users or the Company
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "intellectual-property",
      title: "11. INTELLECTUAL PROPERTY",
      icon: BookOpen,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            All rights, title, and interest in the Service—including software,
            design, branding, and content—remain the exclusive property of Sutra
            Analytics Private Limited. You are granted a limited, non-exclusive,
            non-transferable license to use the Service.
          </p>
        </div>
      ),
    },
    {
      id: "termination",
      title: "12. TERMINATION AND SUSPENSION",
      icon: Ban,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We may suspend or terminate your access at our sole discretion if:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>You violate these Terms</li>
            <li>Suspicious or fraudulent activity is detected</li>
            <li>Required by law</li>
          </ul>
          <p className="text-[#524673] leading-relaxed mt-2">
            Upon termination:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Access to the Service will cease</li>
            <li>Data may be deleted in accordance with our Privacy Policy</li>
          </ul>
        </div>
      ),
    },
    {
      id: "limitation-liability",
      title: "13. LIMITATION OF LIABILITY",
      icon: Scale,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            To the maximum extent permitted by law, we are not liable for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Indirect or consequential damages</li>
            <li>Loss of profits, revenue, or business</li>
            <li>Data loss or corruption</li>
            <li>Service interruptions or downtime</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            Our total liability will not exceed the amount paid by you in the 12
            months preceding the claim.
          </p>
        </div>
      ),
    },
    {
      id: "disclaimer",
      title: "14. DISCLAIMER OF WARRANTIES",
      icon: Shield,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            The Service is provided on an "as is" and "as available" basis. We
            do not guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Uninterrupted or error-free operation</li>
            <li>Accuracy or reliability of data</li>
            <li>Correction of all defects</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            Use of the Service is at your own risk.
          </p>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "15. INDEMNIFICATION",
      icon: Users,
      content: (
        <p className="text-[#524673] leading-relaxed">
          You agree to indemnify and hold harmless the Company, its directors,
          employees, and affiliates from any claims arising out of your use of
          the Service, your violation of these Terms, or misuse of third-party
          systems or data.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "16. GOVERNING LAW AND JURISDICTION",
      icon: Gavel,
      content: (
        <p className="text-[#524673] leading-relaxed">
          These Terms shall be governed by the laws of India. Any disputes shall
          be subject to the exclusive jurisdiction of the courts in Ahmedabad,
          Gujarat, India.
        </p>
      ),
    },
    {
      id: "modifications",
      title: "17. MODIFICATIONS TO TERMS",
      icon: FileText,
      content: (
        <p className="text-[#524673] leading-relaxed">
          We reserve the right to update these Terms at any time. Changes will
          be effective upon posting. Continued use of the Service constitutes
          acceptance of the updated Terms.
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
            <FileText className="h-16 w-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Terms and Conditions
            </h1>
            <p className="text-indigo-100 text-lg">
              Effective Date: {effectiveDate}
            </p>
            <p className="text-indigo-100/80 mt-4 max-w-3xl mx-auto">
              These Terms and Conditions constitute a legally binding agreement
              between you and <strong> Sutra Analytics Private Limited </strong>
              , the owner and operator of the Sync Sutra platform.
            </p>
            <p className="text-indigo-100/70 mt-3 text-sm">
              By accessing or using the Service, you agree to be bound by these
              Terms. If you do not agree, you must not use the Service.
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

          {/* Contact Section - Section 18 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-[#7955e6] rounded-2xl p-8 text-center text-white"
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-white/90" />
            <h2 className="text-2xl font-bold mb-3">18. CONTACT INFORMATION</h2>
            <p className="text-indigo-100 mb-4">
              For any questions regarding these Terms:
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
