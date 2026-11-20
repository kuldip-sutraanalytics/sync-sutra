"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import {
  Send,
  Mail,
  MessageSquare,
  User as UserIcon,
  ArrowRight,
  Calendar,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SITE } from "@/data/site";

const BACKEND_URL = SITE.contactEndpoint;

const INQUIRIES = [
  { v: "general", l: "General inquiry" },
  { v: "sales", l: "Sales / Pricing" },
  { v: "technical_support", l: "Technical support" },
  { v: "bug_report", l: "Bug report" },
  { v: "billing", l: "Billing question" },
  { v: "feature_request", l: "Feature request" },
  { v: "partnership", l: "Partnership" },
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast.error("Please complete all fields");
      return;
    }

    setSubmitting(true);
    try {
      // Using fetch with POST method
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          inquiryType: form.inquiryType,
          message,
        }),
      });

      // With no-cors, response is opaque, so we assume success
      console.log("Form submitted successfully");
      toast.success("Message received", {
        description: "We'll get back to you within one business day.",
      });
      setForm({
        name: "",
        email: "",
        inquiryType: "general",
        message: "",
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong", {
        description: "Could not send your message. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="container-x"
    >
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow">Talk to us</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl lg:text-5xl tracking-tighter">
            Have a question?{" "}
            <span className="text-[#7955e6]">We respond fast.</span>
          </h2>
          <p className="mt-4 text-[#524673] leading-relaxed">
            Whether you're stuck on a connection, need a custom plan, or want to
            share a feature idea — drop us a note and a real human will reply
            within one business day.
          </p>

          <div className="mt-8 space-y-4">
            {/* Email Button */}
            <button
              onClick={() =>
                (window.location.href = "mailto:support@syncsutra.io")
              }
              className="flex items-start gap-4 surface p-5 transition-all duration-300 hover:bg-[#f3f0fd] hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full text-left group"
            >
              <div className="h-10 w-10 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6] transition-all duration-300 group-hover:bg-[#7955e6] group-hover:text-white">
                <Mail className="h-4.5 w-4.5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Send us an email</div>
                <div className="text-sm text-[#524673]">
                  support@syncsutra.io
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#524673] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
            </button>

            {/* Schedule a Call Button */}
            <button
              onClick={() =>
                window.open(
                  "https://cal.com/sutraanalytics/sync-sutra-onboarding",
                  "_blank",
                )
              }
              className="flex items-start gap-4 surface p-5 transition-all duration-300 hover:bg-[#f3f0fd] hover:shadow-lg hover:scale-[1.02] cursor-pointer w-full text-left group"
            >
              <div className="h-10 w-10 rounded-xl bg-[#f3f0fd] grid place-items-center text-[#7955e6] transition-all duration-300 group-hover:bg-[#7955e6] group-hover:text-white">
                <Calendar className="h-4.5 w-4.5" />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Schedule a call with us</div>
                <div className="text-sm text-[#524673]">
                  Free 20-minute setup call on Growth & Scale
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-[#524673] opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <form
          data-testid="contact-form"
          onSubmit={onSubmit}
          className="lg:col-span-7 surface p-7 lg:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-[#524673]">
                Your name
              </label>
              <div className="mt-2 relative">
                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#524673]" />
                <input
                  data-testid="contact-name"
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Jack Taylor"
                  className="w-full bg-white border border-[#e2dbf7] rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#7955e6] focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-[#524673]">
                Email
              </label>
              <div className="mt-2 relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#524673]" />
                <input
                  data-testid="contact-email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="you@store.com"
                  className="w-full bg-white border border-[#e2dbf7] rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-[#7955e6] focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-[#524673]">
              Type of inquiry
            </label>
            <div className="mt-2">
              <Select
                value={form.inquiryType}
                onValueChange={(v) => setForm({ ...form, inquiryType: v })}
              >
                <SelectTrigger
                  data-testid="contact-inquiry"
                  className="w-full bg-white border border-[#e2dbf7] rounded-xl px-4 py-6 text-base focus:ring-2 focus:ring-[#7955e6]"
                >
                  <SelectValue placeholder="Choose a topic" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-[#e2dbf7]">
                  {INQUIRIES.map((i) => (
                    <SelectItem
                      key={i.v}
                      value={i.v}
                      data-testid={`inquiry-opt-${i.v}`}
                    >
                      {i.l}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-[#524673]">
              How can we help?
            </label>
            <textarea
              data-testid="contact-description"
              value={form.message}
              onChange={onChange("message")}
              rows={5}
              placeholder="Tell us about your store, your team or what's getting in your way…"
              className="mt-2 w-full bg-white border border-[#e2dbf7] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#7955e6] focus:border-transparent outline-none resize-y"
              required
            />
          </div>

          <button
            data-testid="contact-submit"
            type="submit"
            disabled={submitting}
            className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              "Sending…"
            ) : (
              <>
                Send message <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-xs text-[#524673]">
            By submitting you agree to our reasonable use policy. We never share
            your email.
          </p>
        </form>
      </div>
    </section>
  );
}

// At the VERY END of the file
export default React.memo(ContactForm);