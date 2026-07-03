import { Sparkles, ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-50"
    >
      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold-light opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-brand-100 opacity-60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-12 pb-20 md:grid-cols-2 md:pt-20 md:pb-32">
        {/* ── Columna izquierda: texto ── */}
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-widest text-gold-dark shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            100% ORIGINALES GARANTIZADOS
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight text-luxury-dark md:text-6xl lg:text-7xl">
            La Esencia del <br />
            <span className="italic text-gold">Lujo y Exclusividad</span>
          </h1>

          <p className="mt-8 text-lg font-light leading-relaxed text-brand-700 md:text-xl">
            Descubre nuestra cuidada selección de perfumería de nicho y diseñador. Fragancias auténticas para quienes no se conforman con lo ordinario.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#colecciones"
              className="group flex items-center gap-3 rounded bg-luxury-dark px-8 py-4 text-sm font-semibold tracking-widest text-white shadow-xl transition hover:bg-gold-dark"
            >
              EXPLORAR COLECCIÓN
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-brand-200 bg-white px-8 py-4 text-sm font-semibold tracking-widest text-luxury-dark shadow-sm transition hover:border-gold hover:text-gold-dark"
            >
              CONTACTAR ASESOR
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex items-center gap-8 border-t border-brand-200 pt-8">
            <div>
              <p className="font-serif text-3xl font-bold text-luxury-dark">100%</p>
              <p className="mt-1 text-xs font-medium tracking-wider text-brand-600">AUTENTICIDAD</p>
            </div>
            <div className="h-10 w-px bg-brand-200" />
            <div>
              <p className="font-serif text-3xl font-bold text-luxury-dark">24h</p>
              <p className="mt-1 text-xs font-medium tracking-wider text-brand-600">ENVÍO NACIONAL</p>
            </div>
          </div>
        </div>

        {/* ── Columna derecha: imagen elegante ── */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-full border border-gold/20 scale-[0.8]" />
          <div className="absolute inset-0 -z-10 rounded-full border border-gold/10 scale-[1]" />
          
          <div
            className="relative z-10 overflow-hidden rounded-t-full shadow-2xl shadow-luxury-dark/10"
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop"
              alt="Botella de perfume de lujo"
              className="h-[600px] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
