"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function RSVPForm() {
  const [form, setForm] = useState({ name: "", email: "", attending: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email is required";
    if (!form.attending) e.attending = "Please select an option";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          attending: form.attending === "yes",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setForm({ name: "", email: "", attending: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        if (data.errors) setErrors(data.errors);
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section id="rsvp" className="bg-[#1a1a2e] text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="section-title text-white">
          RSVP <span>Now</span>
        </h2>
        <p className="text-center text-gray-400 mb-8 -mt-4">
          Let us know if you&apos;ll be joining us by <strong className="text-white">30 June 2026</strong>.
        </p>

        {status === "success" ? (
          <div className="bg-green-900/40 border border-green-500 rounded-2xl p-8 text-center">
            <span className="text-4xl block mb-3">🎉</span>
            <p className="text-lg font-semibold text-green-300">{message}</p>
            <p className="text-sm text-gray-400 mt-2">Check your email for confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur rounded-2xl p-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Full Name <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                className={`w-full bg-white/10 border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                  errors.name ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email Address <span className="text-[var(--accent)]">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className={`w-full bg-white/10 border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                  errors.email ? "border-red-500" : "border-white/20"
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Attending */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Will you attend? <span className="text-[var(--accent)]">*</span>
              </label>
              <div className="flex gap-4">
                {["yes", "no"].map((val) => (
                  <label key={val} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value={val}
                      checked={form.attending === val}
                      onChange={(e) => setForm({ ...form, attending: e.target.value })}
                      className="accent-[var(--accent)]"
                    />
                    <span className="text-sm text-gray-300 capitalize">
                      {val === "yes" ? "Yes, I'll be there! 🎉" : "No, I can't make it"}
                    </span>
                  </label>
                ))}
              </div>
              {errors.attending && <p className="text-red-400 text-xs mt-1">{errors.attending}</p>}
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm bg-red-900/20 border border-red-800 rounded-lg px-4 py-2">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[var(--accent)] text-white py-3 rounded-lg font-semibold hover:bg-red-600 disabled:opacity-60 transition-colors"
            >
              {status === "loading" ? "Submitting…" : "Submit RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
