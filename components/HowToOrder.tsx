const steps = [
  {
    number: "01",
    title: "Share your vision",
    description:
      "Send inspiration photos, a color palette, and theme through the form.",
  },
  {
    number: "02",
    title: "We design together",
    description:
      "We confirm your nail shape, length, and design details to finalize pricing through text, email, or Instagram.",
  },
  {
    number: "03",
    title: "Wear it for a cause",
    description:
      "Your custom set is hand-painted and shipped and 100% of the sale goes to the TDA Smiles Foundation.",
  },
];

export default function HowToOrder() {
  return (
    <section id="order" className="scroll-mt-24 bg-purple-deep py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lavender-deep">
            How to Order
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream-soft sm:text-5xl">
            Three steps to your set
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-cream-soft/15 bg-cream-soft/5 p-8"
            >
              <span className="font-display text-4xl font-semibold text-purple/70">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream-soft">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-lavender-deep/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
