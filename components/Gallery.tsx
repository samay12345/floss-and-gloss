"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const sets = [
  {
    src: "/images/gallery/sweet-citrus-bloom.jpg",
    alt: "Sweet Citrus Bloom — pastel blue polka dot and lemon accent press-on set",
    name: "Sweet Citrus Bloom",
  },
  {
    src: "/images/gallery/xoxo-nails-2.jpg",
    alt: "XOXO Nails — zebra print and hand-lettered heart press-on set",
    name: "XOXO Nails",
  },
  {
    src: "/images/gallery/classic-french.jpg",
    alt: "Classic French — soft nude base with white tip press-on set",
    name: "Classic French",
  },
  {
    src: "/images/gallery/butterfly-latte.jpg",
    alt: "Butterfly Latte — monarch wing art with gold leopard accent press-on set",
    name: "Butterfly Latte",
  },
  {
    src: "/images/gallery/burgundy-gold.jpg",
    alt: "Burgundy & Gold — deep wine polish with gold star accent press-on set",
    name: "Burgundy & Gold",
  },
  {
    src: "/images/gallery/sapphire-bloom-2.jpg",
    alt: "Sapphire Bloom — cobalt blue with hand-painted floral press-on set",
    name: "Sapphire Bloom",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + sets.length) % sets.length),
    []
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % sets.length), []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const current = sets[index];

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple">
          The Gallery
        </p>
        <h2 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          Each set is one of a kind
        </h2>
        <p className="mt-4 text-muted">
          Browse past designs for inspiration or bring your own vision to
          life, customizing your color palette, theme, and nail shape!
        </p>
      </div>

      <div className="mt-14 flex items-center justify-center gap-4 sm:gap-8">
        <button
          onClick={prev}
          aria-label="Previous nail set"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple/20 bg-cream-soft text-purple-deep shadow-sm shadow-purple/10 transition-colors hover:bg-lavender"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-cream-soft bg-lavender/40 shadow-xl shadow-purple/20">
          <div className="relative aspect-[3/4] w-full">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 640px) 90vw, 448px"
              className="object-cover"
              priority
            />
          </div>
          <div className="bg-cream-soft/95 px-6 py-4 text-center">
            <p className="font-display text-xl font-semibold text-purple-deep">
              {current.name}
            </p>
            <p className="mt-1 text-xs text-muted">
              {index + 1} / {sets.length}
            </p>
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next nail set"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple/20 bg-cream-soft text-purple-deep shadow-sm shadow-purple/10 transition-colors hover:bg-lavender"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {sets.map((set, i) => (
          <button
            key={set.name}
            onClick={() => setIndex(i)}
            aria-label={`Go to ${set.name}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-purple-deep" : "w-2 bg-purple/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
