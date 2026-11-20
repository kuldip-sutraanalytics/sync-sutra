"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import {
  Shield,
  CreditCard,
  RefreshCw,
  AlertCircle,
  Clock,
  Ban,
  Calendar,
  Mail,
  FileText,
  DollarSign,
  XCircle,
  HelpCircle,
} from "lucide-react";

export default function RefundPolicy() {
  const effectiveDate = "15, April 2026";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const sections = [
    {
      id: "general-policy",
      title: "1. GENERAL POLICY",
      icon: FileText,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            All subscription payments made to Sync Sutra are non-refundable,
            except as expressly stated in this policy. Once a subscription is
            purchased (monthly, annual, or otherwise), the payment is considered
            final and non-reversible. This applies regardless of usage, partial
            usage, or non-usage during the billing period.
          </p>
        </div>
      ),
    },
    {
      id: "free-access",
      title: "2. FREE ACCESS / TRIAL RESPONSIBILITY",
      icon: Shield,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We may offer a free trial or limited access period to help users
            evaluate the Service. It is your responsibility to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Test the features</li>
            <li>Evaluate suitability for your needs</li>
            <li>Clarify any questions before upgrading</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            By purchasing a subscription, you acknowledge that you have
            evaluated the Service to your satisfaction.
          </p>
        </div>
      ),
    },
    {
      id: "no-refunds",
      title: "3. NO REFUNDS FOR USER-DRIVEN REASONS",
      icon: Ban,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            We do not provide refunds for:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Change of mind after purchase</li>
            <li>Lack of usage or under-utilization</li>
            <li>Failure to cancel before renewal</li>
            <li>Misunderstanding of features that are clearly described</li>
            <li>Business decisions or changes in requirements</li>
          </ul>
        </div>
      ),
    },
    {
      id: "subscription-billing",
      title: "4. SUBSCRIPTION BILLING AND RENEWALS",
      icon: CreditCard,
      content: (
        <div className="space-y-3">
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>
              Subscriptions are billed in advance on a recurring basis (monthly,
              yearly, etc.)
            </li>
            <li>Payments are processed via Stripe</li>
            <li>
              Subscriptions automatically renew unless cancelled before the
              renewal date
            </li>
            <li>Renewal charges are non-refundable</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            You are responsible for managing your subscription and cancelling it
            before the next billing cycle if you do not wish to continue.
          </p>
        </div>
      ),
    },
    {
      id: "cancellation",
      title: "5. CANCELLATION POLICY",
      icon: XCircle,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            You may cancel your subscription at any time via your account
            settings. Upon cancellation:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>
              Your plan remains active until the end of the current billing
              cycle
            </li>
            <li>No further charges will be applied</li>
            <li>No refunds will be issued for unused time</li>
          </ul>
        </div>
      ),
    },
    {
      id: "exceptional-refunds",
      title: "6. EXCEPTIONAL REFUND CASES",
      icon: RefreshCw,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Refunds may be considered only under limited circumstances,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>Duplicate or accidental charges</li>
            <li>Verified billing errors caused by our system</li>
            <li>Unauthorized transactions (subject to investigation)</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            All refund requests are reviewed on a case-by-case basis and are
            granted at the sole discretion of the Company.
          </p>
        </div>
      ),
    },
    {
      id: "technical-limitations",
      title: "7. TECHNICAL LIMITATIONS",
      icon: AlertCircle,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            Temporary issues such as:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>System downtime</li>
            <li>Delays in data synchronization</li>
            <li>Third-party service interruptions (e.g., WooCommerce APIs)</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            do not qualify for refunds. We continuously work to maintain high
            reliability but cannot guarantee uninterrupted service at all times.
          </p>
        </div>
      ),
    },
    {
      id: "payment-processing",
      title: "8. PAYMENT PROCESSING",
      icon: DollarSign,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            All payments are securely handled by Stripe. We do not store full
            payment details. Payment disputes may also be governed by Stripe's
            terms and policies.
          </p>
        </div>
      ),
    },
    {
      id: "chargebacks",
      title: "9. CHARGEBACKS AND DISPUTES",
      icon: HelpCircle,
      content: (
        <div className="space-y-3">
          <p className="text-[#524673] leading-relaxed">
            If a chargeback or dispute is initiated without first contacting us:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[#524673]">
            <li>We may suspend or terminate your account</li>
            <li>Access to the Service may be revoked</li>
            <li>Associated data may be removed</li>
          </ul>
          <p className="text-[#524673] leading-relaxed">
            We strongly recommend contacting us first to resolve any billing
            concerns.
          </p>
        </div>
      ),
    },
    {
      id: "policy-updates",
      title: "10. POLICY UPDATES",
      icon: Calendar,
      content: (
        <p className="text-[#524673] leading-relaxed">
          We reserve the right to update this Refund Policy at any time. Any
          changes will be posted on our website with an updated effective date.
          Continued use of the Service indicates acceptance of the updated
          policy.
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
            <RefreshCw className="h-16 w-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Refund Policy
            </h1>
            <p className="text-indigo-100 text-lg">
              Effective Date: {effectiveDate}
            </p>
            <p className="text-indigo-100/80 mt-4 max-w-3xl mx-auto">
              This Refund Policy applies to Sync Sutra, a product
              owned and operated by <strong> Sutra Analytics Private Limited. </strong> It outlines the terms governing
              subscription payments, cancellations, and refund requests for our
              web-based software platform <strong>Sync Sutra</strong>
            </p>
            <p className="text-indigo-100/70 mt-3 text-sm">
              By purchasing any paid subscription plan, you agree to this Refund
              Policy.
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

          {/* Contact Section - Section 11 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="bg-[#7955e6] rounded-2xl p-8 text-center text-white"
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-white/90" />
            <h2 className="text-2xl font-bold mb-3">11. CONTACT INFORMATION</h2>
            <p className="text-indigo-100 mb-4">
              For any billing or refund-related queries:
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
