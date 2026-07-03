import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

const links = [
  { href: "#colecciones", label: "Colecciones" },
  { href: "#hombre", label: "Hombre" },
  { href: "#mujer", label: "Mujer" },
  { href: "#nicho", label: "Nicho" },
  { href: "#garantia", label: "Garantía Original" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-widest text-luxury-dark md:text-3xl">
            MAISON OLFACTIVE
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-brand-700 transition hover:text-gold"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded bg-luxury-dark px-6 py-2.5 text-sm font-semibold tracking-wider text-white transition hover:bg-gold-dark md:inline-flex"
        >
          ASESORÍA
        </a>

        <button
          className="lg:hidden text-luxury-dark"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-100 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest text-brand-800"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-luxury-dark px-6 py-3 text-center text-sm font-semibold tracking-wider text-white"
            >
              ASESORÍA
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
