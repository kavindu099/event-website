const details = [
  {
    icon: "📅",
    label: "Date",
    value: "Saturday, 12 July 2026",
  },
  {
    icon: "🕖",
    label: "Time",
    value: "6:30 PM – 11:00 PM",
  },
  {
    icon: "📍",
    label: "Venue",
    value: "The Grand Ballroom, 123 Celebration Ave, Colombo 03",
  },
  {
    icon: "👔",
    label: "Dress Code",
    value: "Smart Casual / Formal",
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="bg-[var(--accent-light)]">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Event <span>Details</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((d) => (
            <div
              key={d.label}
              className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow"
            >
              <span className="text-4xl block mb-3">{d.icon}</span>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                {d.label}
              </p>
              <p className="text-[var(--fg)] font-medium">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
