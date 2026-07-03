"use client";

import { scrollToSection } from "@/lib/scrollToSection";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lavender-deep blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-purple/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lavender blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple">
          Custom press-ons, made with purpose
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-charcoal sm:text-6xl">
          Nail art you design.
          <br />
          <span className="italic text-purple-deep">A smile</span> it helps
          fund.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          Every Floss &amp; Gloss set is hand-painted and fully customized
          to you — and 100% of every sale goes directly to the Texas Dental
          Association Smiles Foundation.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#gallery"
            onClick={(e) => scrollToSection(e, "gallery")}
            className="rounded-full bg-purple-deep px-7 py-3 text-sm font-semibold text-cream-soft shadow-md shadow-purple/30 transition-transform hover:-translate-y-0.5"
          >
            View the Gallery
          </a>
          <a
            href="#order"
            onClick={(e) => scrollToSection(e, "order")}
            className="rounded-full border border-purple/40 bg-cream-soft px-7 py-3 text-sm font-semibold text-purple-deep transition-colors hover:bg-lavender"
          >
            Start Your Set
          </a>
        </div>
      </div>
    </section>
  );
}
