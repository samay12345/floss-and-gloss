import Image from "next/image";

export default function About() {
  return (
    <section id="story" className="scroll-mt-24 bg-lavender/50 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple">
            Meet the Founder
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
            Shritha Ramaraju
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A Biology student at UT Austin from Houston, Shritha became
            interested in dentistry in high school after her own experience
            with braces, realizing how much teeth and oral health
            contribute to a person&apos;s confidence and overall
            well-being.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Loving creative outlets such as painting, baking, scrapbooking,
            she started Floss &amp; Gloss to combine those passions with
            healthcare, turning nail art into an initiative that gives back
            to her community.
          </p>
        </div>
        <div className="order-1 mx-auto w-full max-w-sm md:order-2">
          <div className="overflow-hidden rounded-[2rem] border-4 border-cream-soft shadow-xl shadow-purple/20">
            <Image
              src="/images/brand/founder-photo.jpg"
              alt="Shritha Ramaraju, founder of Floss & Gloss"
              width={1656}
              height={2208}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
