import { Phone, Star, Sparkles } from "lucide-react";
import { PHONE_1, WHATSAPP_URL } from "../lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50"
    >
      {/* Blobs decorativos de fondo */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 pt-6 pb-16 md:grid-cols-2 md:pt-10 md:pb-24">
        {/* ── Columna izquierda: texto ── */}
        <div className="relative z-10">
          {/* Pill badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-500" />
            Lavandería profesional · La Florida, Quito
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] text-slate-900 md:text-5xl lg:text-[3.4rem]">
            Lavandería a domicilio en <span className="text-brand-600">Quito Norte</span>
          </h1>

          <p className="mt-6 text-xl font-medium text-slate-700">
            La ropa sucia ya no se lava en casa. Lo hacemos por ti.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Lavado al peso y en seco, edredones, cortinas y alfombras. Cuidamos
            tu ropa con tecnología industrial y detergentes premium mientras tú
            descansas.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-green-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-600 active:scale-95"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${PHONE_1}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:border-brand-400 hover:text-brand-600"
            >
              <Phone className="h-4 w-4" />
              {PHONE_1}
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9</span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-sm text-slate-500">+10 años en Quito</span>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-sm text-slate-500">+600 clientes felices</span>
          </div>
        </div>

        {/* ── Columna derecha: imagen creativa ── */}
        <div className="relative flex items-center justify-center">
          {/* Grid de puntos decorativo (fondo) */}
          <div
            className="pointer-events-none absolute -right-6 -top-6 z-0 h-52 w-52 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-6 -left-4 z-0 h-40 w-40 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #6ee7b7 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Anillo decorativo */}
          <div className="absolute -z-10 h-[460px] w-[460px] rounded-full border-2 border-dashed border-brand-200/60" />

          {/* Imagen principal — forma hexagonal/clip diagonal */}
          <div
            className="relative z-10 overflow-hidden shadow-[0_30px_80px_-12px_rgba(59,130,246,0.25)]"
            style={{
              clipPath:
                "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
              borderRadius: "1.5rem",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            <img
              src="/local-maquinas.png"
              alt="Máquinas industriales Dexter en LavaSuper E&E"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Gradiente de color sobre la imagen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/30 via-transparent to-transparent" />
          </div>
          {/* Badge precio — arriba derecha */}
          <div className="absolute -top-4 right-6 z-20 rounded-2xl bg-brand-600 px-5 py-3 text-white shadow-xl shadow-brand-600/30">
            <p className="text-xl font-extrabold leading-none">$0.50</p>
            <p className="text-xs font-medium text-brand-200">por libra</p>
          </div>

        </div>
      </div>
    </section>
  );
}
