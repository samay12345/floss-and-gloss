"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const DONATE_URL =
  "https://secure.givelively.org/donate/texas-dental-association-smiles-foundation/floss-and-gloss";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
            Let&apos;s customize your set
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Fill out the form and we&apos;ll follow up to confirm your
            design, sizing, and pricing. You can also directly message us
            on Instagram for a faster reply.
          </p>
          <a
            href="https://instagram.com/flossandglo.ss"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lavender px-6 py-3 text-sm font-semibold text-purple-deep transition-colors hover:bg-lavender-deep"
          >
            @flossandglo.ss on Instagram
          </a>

          <div className="mt-6 flex max-w-md flex-col items-center gap-5 rounded-3xl border border-purple/10 bg-lavender/30 p-7 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left">
            <Image
              src="/images/brand/donate-qr.png"
              alt="QR code to donate to the TDA Smiles Foundation"
              width={300}
              height={300}
              className="h-36 w-36 shrink-0 rounded-2xl border-4 border-cream-soft shadow-sm shadow-purple/10"
            />
            <div>
              <p className="text-lg font-semibold text-charcoal">
                Want to join the cause?
              </p>
              <p className="mt-2 text-sm text-muted">
                Scan here to pay and donate to TDASF.
              </p>
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center whitespace-nowrap rounded-full bg-purple-deep px-6 py-3 text-sm font-semibold text-cream-soft transition-transform hover:-translate-y-0.5"
              >
                Click here to donate
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-purple/10 bg-lavender/40 p-8 shadow-sm shadow-purple/10"
        >
          <div className="grid gap-5">
            <label className="text-sm font-medium text-charcoal">
              Name
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-purple/20 bg-cream-soft px-4 py-2.5 text-charcoal outline-none focus:border-purple"
                placeholder="Your name"
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Instagram handle or email
              <input
                name="contact"
                type="text"
                required
                className="mt-1 w-full rounded-xl border border-purple/20 bg-cream-soft px-4 py-2.5 text-charcoal outline-none focus:border-purple"
                placeholder="@you or you@email.com"
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Nail shape &amp; length
              <input
                name="nailShape"
                type="text"
                className="mt-1 w-full rounded-xl border border-purple/20 bg-cream-soft px-4 py-2.5 text-charcoal outline-none focus:border-purple"
                placeholder="e.g. Almond, medium length"
              />
            </label>

            <label className="text-sm font-medium text-charcoal">
              Design details
              <textarea
                name="details"
                rows={4}
                className="mt-1 w-full resize-none rounded-xl border border-purple/20 bg-cream-soft px-4 py-2.5 text-charcoal outline-none focus:border-purple"
                placeholder="Colors, themes, or inspiration"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-purple-deep px-6 py-3 text-sm font-semibold text-cream-soft transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Request My Set"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-purple-deep">
                Thanks! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-500">
                Something went wrong — please try again or DM us directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
