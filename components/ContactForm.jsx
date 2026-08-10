"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Phone, Mail, MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { brand, services } from "@/lib/siteData";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Kuch galat ho gaya, dobara try karein");
        setLoading(false);
        return;
      }

      // Email successfully bheji gayi — ab WhatsApp bhi khol do
    /*   const text = `Hi ${brand.name}, I'd like to enquire.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterested in: ${form.service || "Not specified"}%0AMessage: ${form.message}`;
      window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, "_blank");
 */
      setSent(true);
    } catch (err) {
      setError("Network error — dobara try karein");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-[#e7e7e7] bg-white p-6 md:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-14 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/10 text-[#10B981] mb-5">
              <CheckCircle2 size={28} />
            </span>
            <h3 className="font-display font-semibold text-xl mb-2">Inquiry Sent!</h3>
            <p className="text-sm text-[#666666] max-w-xs">
              We&apos;ve received your inquiry and opened WhatsApp for you — send the pre-filled message and we&apos;ll get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setForm({ name: "", phone: "", email: "", service: "", message: "" });
              }}
              className="mt-6 text-sm font-semibold text-[#2563EB]"
            >
              Fill the form again
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field icon={User} label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <Field icon={Phone} label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit mobile number" required />
            </div>
            <Field icon={Mail} label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@business.com" required />

            <div>
              <label className="mb-2 block text-xs font-semibold text-[#666666] uppercase tracking-wide">
                Interested In
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#e7e7e7] bg-[#FAFAFA] px-4 py-3 text-sm focus:border-[#2563EB] focus:outline-none"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#666666] uppercase tracking-wide">
                <MessageSquare size={13} /> Tell us about your business
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="What are you looking to build or improve?"
                className="w-full rounded-xl border border-[#e7e7e7] bg-[#FAFAFA] px-4 py-3 text-sm focus:border-[#2563EB] focus:outline-none resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 bg-red-50 rounded-lg px-3 py-2">{error}</p>
            )}

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:opacity-60">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending..." : "Send Inquiry"}
            </button>
            <p className="text-center text-xs text-[#999999]">
              We reply personally — no auto-responders, no sales calls you didn&apos;t ask for.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ icon: Icon, label, name, value, onChange, placeholder, type = "text", required }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#666666] uppercase tracking-wide">
        <Icon size={13} /> {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-[#e7e7e7] bg-[#FAFAFA] px-4 py-3 text-sm focus:border-[#2563EB] focus:outline-none"
      />
    </div>
  );
}