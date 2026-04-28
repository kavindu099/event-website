const agenda = [
  { time: "6:30 PM", title: "Doors Open & Welcome Drinks", desc: "Arrive, mix, and enjoy welcome cocktails." },
  { time: "7:00 PM", title: "Opening Ceremony", desc: "Welcome remarks and official opening of the event." },
  { time: "7:30 PM", title: "Dinner Service", desc: "3-course dinner with live background music." },
  { time: "8:30 PM", title: "Live Entertainment", desc: "Live band performance and special acts." },
  { time: "9:30 PM", title: "Awards & Speeches", desc: "Recognition of special guests and moments." },
  { time: "10:00 PM", title: "Dancing & Celebration", desc: "DJ set, open dance floor, and celebrations." },
  { time: "11:00 PM", title: "Farewell", desc: "Event closes — thank you for joining us!" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">
          Event <span>Schedule</span>
        </h2>
        <ol className="relative border-l-2 border-[var(--accent)] ml-4">
          {agenda.map((item, i) => (
            <li key={i} className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold">
                {i + 1}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1">
                <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                  {item.time}
                </span>
                <h3 className="sm:ml-3 font-semibold text-[var(--fg)]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[var(--muted)]">{item.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
