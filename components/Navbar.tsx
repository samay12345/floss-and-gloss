"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#gallery", label: "Gallery" },
  { href: "#story", label: "Our Story" },
  { href: "#cause", label: "The Cause" },
  { href: "#order", label: "How to Order" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream-soft/90 shadow-sm shadow-purple/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/brand/logo-circle.png"
            alt="Floss & Gloss logo"
            width={380}
            height={380}
            className="h-10 w-10 rounded-full object-cover"
            priority
          />
          <span className="font-display text-2xl font-semibold text-purple-deep">
            Floss &amp; Gloss
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-purple-deep"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="rounded-full bg-purple px-5 py-2 text-sm font-semibold text-cream-soft shadow-sm transition-colors hover:bg-purple-deep"
          >
            Order Now
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-purple-deep md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-purple/10 bg-cream-soft px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-3 text-base font-medium text-charcoal transition-colors hover:bg-lavender/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
