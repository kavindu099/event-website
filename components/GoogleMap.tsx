"use client";

export default function GoogleMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const venue = "The Grand Ballroom, Colombo 03, Sri Lanka";
  const encodedVenue = encodeURIComponent(venue);

  return (
    <section id="location" className="bg-white p-0">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title">
          Event <span>Location</span>
        </h2>
        <p className="text-center text-[var(--muted)] mb-8 -mt-4">
          📍 {venue}
        </p>
      </div>
      <div className="w-full h-80 md:h-[450px]">
        {apiKey ? (
          <iframe
            title="Event Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedVenue}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center text-[var(--muted)]">
              <span className="text-5xl block mb-3">🗺️</span>
              <p className="font-medium">Map not configured</p>
              <p className="text-sm mt-1">Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local</p>
              <a
                href={`https://maps.google.com/?q=${encodedVenue}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[var(--accent)] underline text-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
