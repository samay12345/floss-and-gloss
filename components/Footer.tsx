import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-purple/10 bg-lavender/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/images/brand/logo-circle.png"
            alt="Floss & Gloss logo"
            width={380}
            height={380}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold text-purple-deep">
            Floss &amp; Gloss
          </span>
        </div>
        <p className="text-sm text-muted">
          100% of proceeds benefit the Texas Dental Association Smiles
          Foundation.
        </p>
        <div className="text-sm text-muted">
          <a
            href="https://instagram.com/flossandglo.ss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-deep"
          >
            @flossandglo.ss
          </a>
          <span className="mx-2">·</span>
          <a
            href="https://instagram.com/tdasmiles"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-deep"
          >
            @tdasmiles
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted/70">
        {`© ${new Date().getFullYear()} Floss & Gloss. Made with love in Texas.`}
      </p>
    </footer>
  );
}
