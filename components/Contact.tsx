const contacts = [
  { icon: "📧", label: "Email", value: "hello@grandevent2026.com", href: "mailto:hello@grandevent2026.com" },
  { icon: "📞", label: "Phone", value: "+94 77 123 4567", href: "tel:+94771234567" },
  { icon: "📸", label: "Instagram", value: "@grandevent2026", href: "https://instagram.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fde8ea]">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          Get in <span>Touch</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-10 -mt-4">
          Have questions? We&apos;d love to hear from you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <span className="text-4xl block mb-3">{c.icon}</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                {c.label}
              </p>
              <p className="text-[var(--fg)] font-medium text-sm">{c.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
