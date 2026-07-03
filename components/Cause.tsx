import Image from "next/image";

const stats = [
  { value: "100%", label: "of every sale donated directly" },
  { value: "TDASF", label: "partnership" },
  { value: "$350", label: "raised" },
];

export default function Cause() {
  return (
    <section id="cause" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple">
            The Cause
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
            Press-ons with purpose
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Floss &amp; Gloss is a not-for-profit initiative combining
            customizable press-on nails with community impact through a
            collaboration with the{" "}
            <span className="font-semibold text-purple-deep">
              Texas Dental Association Smiles Foundation
            </span>
            . Every set purchased donates 100% directly to the foundation,
            helping support programs that improve oral health access for
            underserved communities across Texas.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            The TDA Smiles Foundation supports this mission through
            scholarships, grants, education, and outreach, while{" "}
            <span className="font-semibold text-purple-deep">
              Texas Mission of Mercy
            </span>{" "}
            brings care directly to communities in need through free mobile
            dental clinic events.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-lavender/60 p-4 text-center"
              >
                <p className="font-display text-2xl font-semibold text-purple-deep">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="flex items-center justify-center rounded-[2rem] border border-purple/10 bg-cream-soft px-8 py-12 shadow-xl shadow-purple/10">
            <div className="flex w-full items-center justify-center gap-5 sm:gap-7">
              <Image
                src="/images/brand/logo-circle.png"
                alt="Floss & Gloss logo"
                width={380}
                height={380}
                className="h-24 w-24 shrink-0 rounded-full object-cover sm:h-28 sm:w-28"
              />

              <span className="font-display text-4xl font-semibold text-purple-deep sm:text-5xl">
                X
              </span>

              <div className="shrink-0">
                <Image
                  src="/images/brand/tda-logo-purple.png"
                  alt="Texas Dental Association Smiles Foundation logo"
                  width={322}
                  height={180}
                  className="h-24 w-auto object-contain sm:h-28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
