"use client";

import Image from "next/image";

const items = [
  { type: "image", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", alt: "Event celebration" },
  { type: "image", src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80", alt: "Party decorations" },
  { type: "image", src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", alt: "Wedding ceremony" },
  { type: "image", src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", alt: "Formal dinner" },
  { type: "image", src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", alt: "Crowd celebrating" },
  { type: "image", src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80", alt: "Live music" },
];

export default function Gallery() {
  const openLightbox = (src: string) => {
    const lb = document.getElementById("lightbox");
    const img = document.getElementById("lb-img") as HTMLImageElement;
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add("open");
  };

  return (
    <section id="gallery" className="bg-[var(--accent-light)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          Photo <span>Gallery</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => openLightbox(item.src)}
              className="overflow-hidden rounded-xl aspect-square focus:outline-none focus:ring-2 focus:ring-[var(--accent)] group"
              aria-label={`View ${item.alt}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <div
        id="lightbox"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === "lightbox")
            document.getElementById("lightbox")?.classList.remove("open");
        }}
      >
        <button
          id="lightbox-close"
          onClick={() => document.getElementById("lightbox")?.classList.remove("open")}
        >
          &times;
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img id="lb-img" alt="Gallery preview" />
      </div>
    </section>
  );
}
