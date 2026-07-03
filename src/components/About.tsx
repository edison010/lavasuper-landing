import { CheckCircle2, ShieldCheck, Gem, MapPin } from "lucide-react";

const points = [
  "Curaduría estricta de marcas nicho y diseñador",
  "Importaciones con cadena de custodia verificada",
  "Almacenamiento climatizado para preservar las notas",
  "Asesores apasionados por la perfumería",
];

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Originalidad" },
  { icon: Gem, value: "50+", label: "Marcas exclusivas" },
  { icon: MapPin, value: "24h", label: "Envíos nacionales" },
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-brand-50 py-24">
      {/* Elemento decorativo */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold-light/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        {/* ── Columna izquierda: imagen elegante ── */}
        <div className="relative flex justify-center">
          <div className="absolute -left-4 top-6 h-[88%] w-[80%] rounded bg-gold-light/60 border border-gold/10" />

          <div
            className="relative z-10 overflow-hidden rounded shadow-2xl"
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1595425970377-c9703bc48b51?q=80&w=800&auto=format&fit=crop"
              alt="Boutique Maison Olfactive"
              className="h-[520px] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent" />
          </div>

          {/* Badge exclusividad */}
          <div className="absolute -right-4 top-12 z-20 rounded bg-luxury-dark px-6 py-4 text-center text-white shadow-xl border border-gold/20">
            <p className="text-xs font-semibold tracking-widest text-gold">
              ALTA PERFUMERÍA
            </p>
            <p className="mt-1 font-serif text-2xl font-bold italic">Ecuador</p>
          </div>
        </div>

        {/* ── Columna derecha: texto ── */}
        <div className="relative z-10">
          <span className="text-xs font-semibold tracking-widest text-gold-dark">
            SOBRE MAISON OLFACTIVE
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-luxury-dark md:text-5xl">
            Redefiniendo el lujo <br />
            <span className="italic text-gold-dark">en Ecuador.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-700">
            Nacimos con un propósito claro: democratizar el acceso a la perfumería de nicho en Ecuador sin comprometer la confianza. Sabemos que el mercado está inundado de réplicas, por eso nuestro pilar fundamental es la autenticidad irrefutable.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-brand-700">{p}</span>
              </li>
            ))}
          </ul>

          {/* Mini stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-200 pt-10">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="text-center"
              >
                <Icon className="mx-auto mb-3 h-6 w-6 text-gold" strokeWidth={1.5} />
                <p className="font-serif text-2xl font-bold text-luxury-dark">{value}</p>
                <p className="mt-1 text-xs tracking-wider text-brand-600 uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
