"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plug,
  Share2,
  BellRing,
  BarChart3,
  Store,
  RefreshCw,
  Users,
  MailCheck,
  Shield,
  AlertTriangle,
  Package,
  FileSpreadsheet,
  Download,
  TrendingUp,
  Settings,
  CheckCircle,
  Info,
  Table,
  AlertCircle,
  Trash2,
  Clock,
  Share2 as ShareIcon,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function HelpGuides() {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedTabId, setCopiedTabId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const copyTabLink = async (tabId) => {
    const url = `${window.location.origin}${window.location.pathname}#${tabId}`;
    console.log(navigator.clipboard);
    console.log(window.isSecureContext);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopiedTabId(tabId);

      setTimeout(() => {
        setCopiedTabId(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const tabs = [
    {
      id: "connect-store",
      title: "Connect Your Store",
      icon: Plug,
      content: {
        sections: [
          {
            title: "How to Connect Your WooCommerce Store to Sync Sutra",
            icon: Store,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  Connect your WooCommerce store in less than 5 minutes. Your
                  data will start syncing automatically.
                </p>

                <div className="bg-[#faf8ff] p-4 rounded-xl border border-[#e2dbf7]">
                  <p className="text-[#524673] text-sm">
                    Go to{" "}
                    <strong className="text-[#7955e6]">Stores page</strong> →
                    Click{" "}
                    <strong className="text-[#7955e6]">+ New Connection</strong>{" "}
                    button to begin.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#7955e6] text-white text-[10px] flex items-center justify-center">
                      1
                    </span>
                    <h4 className="font-semibold text-[#120d26]">
                      Enter Store Details
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Store Name
                      </span>
                      <p className="text-[#524673] text-xs mt-0.5">
                        Any name you prefer
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Store URL
                      </span>
                      <p className="text-[#524673] text-xs mt-0.5">
                        Your WooCommerce store URL
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Client ID
                      </span>
                      <p className="text-[#524673] text-xs mt-0.5">
                        From WooCommerce API
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Client Secret
                      </span>
                      <p className="text-[#524673] text-xs mt-0.5">
                        From WooCommerce API
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#524673] bg-amber-50 p-2 rounded-lg">
                    <AlertTriangle className="h-3 w-3 text-amber-600 shrink-0" />
                    <span>
                      Need API keys?{" "}
                      <a
                        href="https://woocommerce.com/document/woocommerce-rest-api/#generate-api-keys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7955e6] font-medium hover:underline"
                      >
                        WooCommerce REST API guide
                      </a>
                    </span>
                  </div>
                  <p className="text-[#524673] text-sm mt-1">
                    Click{" "}
                    <strong className="text-[#7955e6]">Verify Store</strong> to
                    validate credentials
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#7955e6] text-white text-[10px] flex items-center justify-center">
                      2
                    </span>
                    <h4 className="font-semibold text-[#120d26]">
                      Store Location & Timezone
                    </h4>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <div className="flex-1 bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Country
                      </span>
                      <p className="text-[#524673] text-xs">
                        Select your country
                      </p>
                    </div>
                    <div className="flex-1 bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        Timezone
                      </span>
                      <p className="text-[#524673] text-xs">
                        Select your timezone
                      </p>
                    </div>
                  </div>
                  <p className="text-[#524673] text-xs">
                    All metrics & syncs run on this timezone → Click{" "}
                    <strong>Save & Continue</strong>
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#7955e6] text-white text-[10px] flex items-center justify-center">
                      3
                    </span>
                    <h4 className="font-semibold text-[#120d26]">
                      Auto Refresh Frequency
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        📅 Daily
                      </span>
                      <p className="text-[#524673] text-xs">
                        Pick exact time (e.g., 1:00 AM → refreshes daily at
                        1:00)
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        ⏰ Every Hour
                      </span>
                      <p className="text-[#524673] text-xs">
                        Pick interval (1, 2, 3, 4, 6, 12 hours)
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26]">
                        ⚡ Every Minute
                      </span>
                      <p className="text-[#524673] text-xs">
                        Pick interval (5, 10, 15, 30 minutes)
                      </p>
                    </div>
                  </div>
                  <p className="text-[#524673] text-sm mt-1">
                    Click <strong className="text-[#7955e6]">Submit</strong> to
                    complete setup
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-200 flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-green-700 text-sm">
                    Store added! Initial sync starts automatically. Last sync
                    time shown on store card.
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      id: "share-store",
      title: "Share Your Store",
      icon: Share2,
      content: {
        sections: [
          {
            title: "How to Share Your Store with Your Team on Sync Sutra",
            icon: Users,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  Share your store data with team members, partners, or VAs
                  without giving access to your WooCommerce admin or account
                  settings.
                </p>

                <div className="bg-[#faf8ff] p-3 rounded-xl border border-[#e2dbf7]">
                  <div className="flex items-center gap-2 mb-2">
                    <Share2 className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      How to Share
                    </h4>
                  </div>
                  <p className="text-[#524673] text-sm">
                    Stores page → Click{" "}
                    <strong className="text-[#7955e6]">Share</strong> button →
                    Enter email → Send invite
                  </p>
                  <p className="text-[#524673] text-xs mt-1">
                    Member limit depends on your plan
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MailCheck className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Team Member Experience
                    </h4>
                  </div>
                  <ul className="list-disc pl-5 text-[#524673] text-sm space-y-1">
                    <li>
                      Receives email invitation (includes signup link if new
                      user)
                    </li>
                    <li>
                      Goes to <strong>Stores → Shared With Me</strong> tab
                    </li>
                    <li>
                      Accepts or declines request → Immediate access if accepted
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#120d26] text-sm">
                    Invitation Status
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                      <span className="text-[#524673]">
                        <strong>Pending</strong> — Yellow badge until user
                        responds
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <span className="text-[#524673]">
                        <strong>Accepted</strong> — Shows user name & email,
                        badge removed
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      <span className="text-[#524673]">
                        <strong>Declined</strong> — Red badge visible in share
                        dialog
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-red-600" />
                    <h4 className="font-semibold text-red-800 text-sm">
                      Revoke Access
                    </h4>
                  </div>
                  <p className="text-red-700 text-sm">
                    Click Share button → View user list → Remove instantly
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      id: "inventory-alerts",
      title: "Inventory Alerts",
      icon: BellRing,
      content: {
        sections: [
          {
            title:
              "Never Run Out of Stock Again — How to Use Inventory Alerts in Sync Sutra",
            icon: Package,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  Monitor your products and get email alerts when stock runs
                  low. Never miss a stockout again.
                </p>

                <div className="bg-[#faf8ff] p-3 rounded-xl border border-[#e2dbf7]">
                  <div className="flex items-center gap-2 mb-2">
                    <RefreshCw className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      How It Works
                    </h4>
                  </div>
                  <p className="text-[#524673] text-sm">
                    Set minimum quantity (threshold) for any product → When
                    available stock drops below → Email alert sent automatically
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Multiple Stores?
                    </h4>
                  </div>
                  <p className="text-[#524673] text-sm">
                    Use <strong>Store Selector</strong> at the top to switch
                    between stores and manage products for each store
                    individually.
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Product Table Fields
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7] text-center">
                      <span className="font-medium text-[#120d26] block">
                        📦 Available Qty
                      </span>
                      <p className="text-[#524673] text-xs">
                        Current stock level
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7] text-center">
                      <span className="font-medium text-[#120d26] block">
                        ⚠️ Min Qty
                      </span>
                      <p className="text-[#524673] text-xs">
                        Your set threshold
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7] text-center">
                      <span className="font-medium text-[#120d26] block">
                        💰 Sold Qty
                      </span>
                      <p className="text-[#524673] text-xs">
                        Units sold (for reference)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Setting Up an Alert
                    </h4>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#e2dbf7] space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-[#120d26] text-sm">
                          Min Qty Threshold
                        </p>
                        <p className="text-[#524673] text-xs">
                          Enter number (e.g., 10)
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#524673] text-xs">
                          Email Alert
                        </span>
                        <div className="w-8 h-4 rounded-full bg-[#7955e6]"></div>
                      </div>
                    </div>
                    <p className="text-[#524673] text-xs">
                      Toggle ON → Receive email when stock crosses threshold
                    </p>
                    <p className="text-[#524673] text-xs">
                      Toggle OFF → Product only shows in Low Stock dashboard
                      table
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 text-sm">
                      Low Stock Dashboard
                    </h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Products below threshold appear in{" "}
                    <strong>Low Stock Products</strong> table — even without
                    email alerts enabled.
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      id: "auto-exports",
      title: "Auto Exports (Data)",
      icon: FileSpreadsheet,
      content: {
        sections: [
          {
            title: "How to Automatically Receive Your Store Data by Email",
            icon: Download,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  Set up scheduled exports of your store data. Receive orders,
                  products, or customers directly in your inbox — CSV or Excel.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Table className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Your Auto Exports
                    </h4>
                  </div>
                  <div className="bg-white rounded-xl border border-[#e2dbf7] overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 p-2 bg-[#faf8ff] border-b border-[#e2dbf7] text-xs font-medium text-[#524673]">
                      <span>Store</span>
                      <span>Type</span>
                      <span>Frequency</span>
                      <span>Actions</span>
                    </div>
                    <div className="p-3 text-center text-[#524673] text-sm">
                      No exports configured yet. Click "Set New Auto Export" to
                      get started.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#524673] bg-[#f3f0fd] p-2 rounded-lg">
                    <Info className="h-3 w-3" />
                    <span>
                      <strong>Status Toggle:</strong> ON → Receiving emails |
                      OFF → Paused, no emails sent
                    </span>
                    <span className="ml-3">
                      <strong>Delete:</strong> Permanently removes export
                      (confirmation required)
                    </span>
                  </div>
                </div>

                <div className="bg-[#faf8ff] p-3 rounded-xl border border-[#e2dbf7]">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      How to Create
                    </h4>
                  </div>
                  <p className="text-[#524673] text-sm">
                    Click{" "}
                    <strong className="text-[#7955e6]">
                      Set New Auto Export
                    </strong>{" "}
                    → Fill form → Submit
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#120d26] text-sm">
                    Export Type: DATA
                  </h4>

                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        1. Store Selection
                      </span>
                      <p className="text-[#524673] text-xs">
                        Select store (defaults to your first store)
                      </p>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        2. Email Address
                      </span>
                      <p className="text-[#524673] text-xs">
                        Pre-filled with your profile email — can be edited
                      </p>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        3. Select Entity Export
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          All
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Orders
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Products
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Customers
                        </span>
                      </div>
                      <p className="text-[#524673] text-xs mt-1">
                        All = orders + products + customers in one export
                      </p>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        4. Receive Data As
                      </span>
                      <div className="flex gap-3 mt-1">
                        <span className="text-[#524673] text-xs">
                          📄 CSV (Default)
                        </span>
                        <span className="text-[#524673] text-xs">📊 Excel</span>
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        5. Set Export Frequency
                      </span>
                      <div className="space-y-1 mt-1">
                        <p className="text-[#524673] text-xs">
                          <strong>Daily</strong> — Between 5AM - 6AM (previous
                          day's data)
                        </p>
                        <p className="text-[#524673] text-xs">
                          <strong>Weekly</strong> — Every Monday between 5AM -
                          6AM (previous week's data)
                        </p>
                        <p className="text-[#524673] text-xs">
                          <strong>Monthly</strong> — On 1st of every month
                          between 5AM - 6AM (previous month's data)
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-2 rounded-lg">
                      <p className="text-[#524673] text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <strong>Your Timezone:</strong> Shows when you'll
                        receive the email
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 text-sm">
                      Set Auto Export
                    </h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Click <strong>Set Auto Export</strong> → Redirects to table
                    showing your scheduled configuration
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      id: "performance-reports",
      title: "Performance Reports",
      icon: TrendingUp,
      content: {
        sections: [
          {
            title:
              "How to Automatically Receive Store Performance Reports by Email",
            icon: BarChart3,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  Get automated performance reports delivered to your inbox.
                  Core metrics and dashboard insights — no logging in required.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Table className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      Your Scheduled Reports
                    </h4>
                  </div>
                  <div className="bg-white rounded-xl border border-[#e2dbf7] overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 p-2 bg-[#faf8ff] border-b border-[#e2dbf7] text-xs font-medium text-[#524673]">
                      <span>Store</span>
                      <span>Type</span>
                      <span>Frequency</span>
                      <span>Actions</span>
                    </div>
                    <div className="p-3 text-center text-[#524673] text-sm">
                      No reports configured yet. Click "Set New Auto Export" to
                      get started.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#524673] bg-[#f3f0fd] p-2 rounded-lg">
                    <Info className="h-3 w-3" />
                    <span>
                      <strong>Status Toggle:</strong> ON → Receiving reports |
                      OFF → Paused, no emails sent
                    </span>
                    <span className="ml-3">
                      <strong>Delete:</strong> Permanently removes report
                      (confirmation required)
                    </span>
                  </div>
                </div>

                <div className="bg-[#faf8ff] p-3 rounded-xl border border-[#e2dbf7]">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-[#7955e6]" />
                    <h4 className="font-semibold text-[#120d26] text-sm">
                      How to Create
                    </h4>
                  </div>
                  <p className="text-[#524673] text-sm">
                    Click{" "}
                    <strong className="text-[#7955e6]">
                      Set New Auto Export
                    </strong>{" "}
                    → Fill form → Submit
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#120d26] text-sm">
                    Export Type: METRICS (Reports)
                  </h4>

                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        1. Store Selection
                      </span>
                      <p className="text-[#524673] text-xs">
                        Select store (defaults to your first store)
                      </p>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        2. Email Address
                      </span>
                      <p className="text-[#524673] text-xs">
                        Pre-filled with your profile email — can be edited
                      </p>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        3. What You'll Receive
                      </span>
                      <p className="text-[#524673] text-xs">
                        Basic Dashboard — Core performance metrics sent to your
                        email
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Revenue
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Orders
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          AOV
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Customers
                        </span>
                        <span className="px-2 py-0.5 bg-[#f3f0fd] rounded text-xs">
                          Top Products
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-2 rounded-lg border border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        4. Set Report Frequency
                      </span>
                      <div className="space-y-1 mt-1">
                        <p className="text-[#524673] text-xs">
                          <strong>Daily</strong> — Between 5AM - 6AM (previous
                          day's performance)
                        </p>
                        <p className="text-[#524673] text-xs">
                          <strong>Weekly</strong> — Every Monday between 5AM -
                          6AM (previous week's performance)
                        </p>
                        <p className="text-[#524673] text-xs">
                          <strong>Monthly</strong> — On 1st of every month
                          between 5AM - 6AM (previous month's performance)
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-2 rounded-lg">
                      <p className="text-[#524673] text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <strong>Your Timezone:</strong> Shows when you'll
                        receive the report
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 text-sm">
                      Set Auto Export
                    </h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Click <strong>Set Auto Export</strong> → Redirects to table
                    showing your scheduled report configuration
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      id: "error-handling",
      title: "Reactive Error Store",
      icon: AlertCircle,
      content: {
        sections: [
          {
            title:
              "When Your Store Shows an Error on Sync Sutra — Causes & How to Fix It",
            icon: AlertTriangle,
            content: (
              <div className="space-y-4">
                <p className="text-[#524673] leading-relaxed">
                  If your connected store suddenly shows an{" "}
                  <strong className="text-red-600">Error</strong> status, don't
                  panic. It simply means our system tried to reach your store
                  and couldn't. We automatically mark the store as Error, pause
                  all operations, and disable further syncing until the issue is
                  resolved.
                </p>

                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Info className="h-4 w-4 text-blue-600" />
                    <h4 className="font-semibold text-blue-800 text-sm">
                      What You'll See
                    </h4>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Store card shows error message +{" "}
                    <strong>"View Details"</strong> button → Click to see causes
                    and solutions
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#120d26] text-sm flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    Possible Causes & Fixes
                  </h4>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        1. Hosting Expired
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Your store's hosting plan expired, taking the site
                        offline.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong> Renew
                        hosting plan → Site back online → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        2. Domain Expired
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Domain registration lapsed, URL stops working.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong> Renew
                        domain → Wait for propagation (few hours) → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        3. SSL Certificate Expired
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Expired SSL blocks connections to your store.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong> Renew
                        SSL certificate → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        4. Security Plugin or Firewall Blocking
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Cloudflare, firewall, or security plugin blocking Sync
                        Sutra servers.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong>{" "}
                        Whitelist our IP address → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        5. Regional Access Blocked
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Store blocks traffic from certain regions.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong>{" "}
                        Whitelist our IP or remove geo-blocking → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden bg-amber-50">
                    <div className="bg-amber-100 px-3 py-2 border-b border-amber-200">
                      <span className="font-medium text-amber-800 text-sm">
                        6. API Keys Revoked or Deleted
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-amber-700 text-sm">
                        WooCommerce API keys deleted, regenerated, or
                        permissions changed.
                      </p>
                      <p className="text-amber-700 text-sm mt-1">
                        <strong className="text-green-700">Fix:</strong> Click{" "}
                        <strong className="text-[#7955e6]">
                          Update API Keys
                        </strong>{" "}
                        on error screen → Enter new Client ID & Secret →
                        Auto-reconnect
                      </p>
                      <div className="bg-white p-2 rounded-lg mt-2">
                        <p className="text-[#524673] text-xs">
                          📌 <strong>Need new keys?</strong> WooCommerce →
                          Settings → Advanced → REST API → Add Key → Read/Write
                          permissions → Generate
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#e2dbf7] rounded-lg overflow-hidden">
                    <div className="bg-[#faf8ff] px-3 py-2 border-b border-[#e2dbf7]">
                      <span className="font-medium text-[#120d26] text-sm">
                        7. Store Temporarily Down
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-[#524673] text-sm">
                        Maintenance, server restart, or plugin conflict.
                      </p>
                      <p className="text-[#524673] text-sm mt-1">
                        <strong className="text-green-600">Fix:</strong> Wait
                        for store to recover → Click{" "}
                        <strong className="text-[#7955e6]">
                          Mark as Resolved
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#120d26] text-sm flex items-center gap-2">
                    <Trash2 className="h-4 w-4 text-red-500" />
                    When to Delete & Reconnect
                  </h4>
                  <div className="bg-red-50 p-3 rounded-xl border border-red-200">
                    <ul className="list-disc pl-4 text-red-700 text-sm space-y-1">
                      <li>
                        Store migrated to a new domain — old URL no longer
                        points to active store
                      </li>
                      <li>
                        Completely new store created — replace old with new
                        connection
                      </li>
                      <li>
                        Store permanently shut down — delete to keep account
                        clean
                      </li>
                    </ul>
                    <p className="text-red-700 text-sm mt-2">
                      <strong>Action:</strong> Delete store from Sync Sutra →
                      Add as new connection
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-[#120d26] text-sm">
                    Quick Reference
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border border-[#e2dbf7] rounded-lg">
                      <thead className="bg-[#faf8ff]">
                        <tr>
                          <th className="px-3 py-2 text-left text-[#120d26] border-b border-[#e2dbf7]">
                            Cause
                          </th>
                          <th className="px-3 py-2 text-left text-[#120d26] border-b border-[#e2dbf7]">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            Hosting expired
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Renew hosting → Mark as Resolved
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            Domain expired
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Renew domain → Mark as Resolved
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            SSL expired
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Renew SSL → Mark as Resolved
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            Security / firewall blocking
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Whitelist IP → Mark as Resolved
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            API keys revoked
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Click Update API Keys on error screen
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            Store temporarily down
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Wait → Mark as Resolved
                          </td>
                        </tr>
                        <tr className="border-b border-[#e2dbf7]">
                          <td className="px-3 py-2 text-[#524673]">
                            Store migrated to new domain
                          </td>
                          <td className="px-3 py-2 text-[#524673]">
                            Delete store → Add new store
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-green-50 p-3 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <h4 className="font-semibold text-green-800 text-sm">
                      Important
                    </h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Clicking <strong>Mark as Resolved</strong> triggers a real
                    verification check. Make sure the issue is actually fixed
                    before clicking.
                  </p>
                  <p className="text-green-700 text-sm mt-2">
                    Need help identifying the problem?{" "}
                    <strong>Contact our support team</strong> and we'll help you
                    figure it out.
                  </p>
                </div>
              </div>
            ),
          },
        ],
      },
    },
  ];

  // Get tab index from URL hash on mount and when hash changes
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const tabIndex = tabs.findIndex((tab) => tab.id === hash);
      if (tabIndex !== -1) setActiveTab(tabIndex);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL hash when tab changes
  const handleTabChange = (index) => {
    setActiveTab(index);
    const tabId = tabs[index].id;
    window.history.replaceState(null, "", `#${tabId}`);
    setIsMobileMenuOpen(false);
  };

  const activeTabData = tabs[activeTab];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-[#faf8ff]">
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile/Tablet Dropdown - Visible only on medium and small screens */}
          <div className="md:hidden w-full">
            {/* Selected tab display with dropdown toggle */}
            <div className="bg-white rounded-xl border border-[#e2dbf7] shadow-lg overflow-hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#faf8ff] transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#f3f0fd] flex items-center justify-center text-[#7955e6]">
                    {React.createElement(activeTabData.icon, {
                      className: "h-5 w-5",
                    })}
                  </div>
                  <span className="font-medium text-[#120d26]">
                    {activeTabData.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#524673] bg-[#f3f0fd] px-2 py-1 rounded-full">
                    {activeTab + 1}/{tabs.length}
                  </span>
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-[#524673]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#524673]" />
                  )}
                </div>
              </button>

              {/* Dropdown menu */}
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-[#e2dbf7] max-h-[60vh] overflow-y-auto"
                  >
                    {tabs.map((tab, index) => {
                      const Icon = tab.icon;
                      const isActive = activeTab === index;
                      return (
                        <motion.button
                          key={tab.id}
                          onClick={() => handleTabChange(index)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                          className={`
                            w-full flex items-center gap-3 px-4 py-3 transition-all duration-200
                            ${
                              isActive
                                ? "bg-[#f3f0fd] text-[#7955e6]"
                                : "hover:bg-[#faf8ff] text-[#524673]"
                            }
                            ${index !== tabs.length - 1 ? "border-b border-[#f3f0fd]" : ""}
                          `}
                        >
                          <div
                            className={`
                            h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-200
                            ${
                              isActive
                                ? "bg-[#7955e6] text-white"
                                : "bg-[#f3f0fd] text-[#7955e6]"
                            }
                          `}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-sm flex-1 text-left">
                            {tab.title}
                          </span>
                          {isActive && (
                            <div className="h-2 w-2 rounded-full bg-[#7955e6]" />
                          )}
                          <span className="text-xs text-[#524673] bg-[#f3f0fd] px-2 py-0.5 rounded-full">
                            {index + 1}
                          </span>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Sidebar - Hidden on medium and small screens */}
          <div className="hidden md:block md:w-80 lg:w-96 shrink-0">
            <div className="sticky top-24 space-y-2">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabChange(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left
                      ${
                        isActive
                          ? "bg-[#7955e6] text-white shadow-lg shadow-[#7955e6]/20"
                          : "bg-white text-[#524673] hover:bg-[#faf8ff] hover:text-[#7955e6] border border-[#e2dbf7]"
                      }
                    `}
                  >
                    <div
                      className={`
                      h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300
                      ${isActive ? "bg-white/20" : "bg-[#f3f0fd] text-[#7955e6]"}
                    `}
                    >
                      <Icon
                        className={`h-5 w-5 ${isActive ? "text-white" : "text-[#7955e6]"}`}
                      />
                    </div>
                    <span className="font-medium">{tab.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="ml-auto h-2 w-2 rounded-full bg-white"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Content Area - Right Side */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-[#f3f0fd] flex items-center justify-center text-[#7955e6]">
                  {React.createElement(activeTabData.icon, {
                    className: "h-6 w-6",
                  })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#120d26]">
                    {activeTabData.title}
                  </h2>
                  <p className="text-[#524673] text-sm">
                    Step-by-step guide to get started
                  </p>
                </div>
              </div>
              <button
                onClick={() => copyTabLink(activeTabData.id)}
                className="text-[#7955e6] hover:text-[rgb(104,68,207)] text-sm flex items-center gap-1 transition-colors"
              >
                {copiedTabId === activeTabData.id ? (
                  <>
                    <CheckCircle className="h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <ShareIcon className="h-4 w-4" /> Copy link
                  </>
                )}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeTabData.content.sections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="bg-white rounded-2xl border border-[#e2dbf7] overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="px-6 py-4 bg-[#faf8ff] border-b border-[#e2dbf7] flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#120d26]">
                          {section.title}
                        </h3>
                      </div>
                      <div className="px-6 py-5">{section.content}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
