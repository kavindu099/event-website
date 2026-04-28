"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "hello@grandevent2026.com",
    href: "mailto:hello@grandevent2026.com",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13.5 19.79 19.79 0 0 1 1.08 4.82 2 2 0 0 1 3.06 2.64h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.41a16 16 0 0 0 6.29 6.29l1.13-1.13a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 18z" />
      </svg>
    ),
    label: "Phone",
    value: "+94 77 123 4567",
    href: "tel:+94771234567",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Location",
    value: "Colombo, Sri Lanka",
    href: "https://maps.google.com/?q=Colombo,Sri+Lanka",
  },
];

const socials = [
  {
    label: "Instagram",
    handle: "@grandevent2026",
    href: "https://instagram.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Grand Event 2026",
    href: "https://facebook.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@grandevent26",
    href: "https://twitter.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    // Simulate submission — replace with real API call when backend is ready
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setResponseMsg("Thanks for reaching out! We'll get back to you shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputBase =
    "w-full border rounded-lg px-4 py-2.5 text-[var(--fg)] placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-shadow text-sm";

  return (
    <section id="contact" className="bg-[#fde8ea]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-12 -mt-4">
          Have questions about the event? We&apos;d love to hear from you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Left: info + socials ── */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#fde8ea] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] leading-none mb-1">
                      {c.label}
                    </p>
                    <p className="text-[var(--fg)] font-medium text-sm">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 text-[var(--muted)] text-xs font-semibold uppercase tracking-widest">
              <span className="flex-1 h-px bg-gray-200" />
              Follow Us
              <span className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#fde8ea] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] leading-none mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-[var(--fg)] font-medium text-sm">{s.handle}</p>
                  </div>
                  <span className="ml-auto text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M7 7h10v10M7 17 17 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: message form ── */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
                <span className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-600">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-[var(--fg)]">Message Sent!</h3>
                <p className="text-[var(--muted)] text-sm max-w-xs">{responseMsg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[var(--accent)] text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[var(--fg)] mb-1">Send us a message</h3>
                <p className="text-[var(--muted)] text-sm mb-6">
                  Fill in the form and we&apos;ll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--fg)] mb-1">
                        Full Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={`${inputBase} ${errors.name ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[var(--fg)] mb-1">
                        Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className={`${inputBase} ${errors.email ? "border-red-400" : "border-gray-200"}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--fg)] mb-1">
                      Subject <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                      className={`${inputBase} ${errors.subject ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[var(--fg)] mb-1">
                      Message <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help…"
                      className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                      {responseMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[var(--accent)] text-white py-3 rounded-lg font-semibold hover:bg-red-600 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
