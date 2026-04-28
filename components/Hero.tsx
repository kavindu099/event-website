export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white"
    >
      {/* Decorative circle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl px-6">
        <p className="text-[var(--accent)] uppercase tracking-widest text-sm font-semibold mb-4">
          You&apos;re Invited
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          The Grand Event{" "}
          <span className="text-[var(--accent)]">2026</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          An unforgettable evening of celebration, great company, and lasting
          memories. Join us for a night you&apos;ll never forget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#rsvp"
            className="bg-[var(--accent)] text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
          >
            RSVP Now
          </a>
          <a
            href="#details"
            className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[var(--fg)] transition-colors"
          >
            Event Details
          </a>
        </div>
      </div>
    </section>
  );
}
