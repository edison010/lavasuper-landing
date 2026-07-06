import { useMemo, useState } from "react";
import {
  BedDouble,
  Footprints,
  MessageCircle,
  Search,
  Shirt,
  Sparkles,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";
import { whatsappFor } from "../lib/constants";
import { CATEGORIES, SERVICES, type ServiceItem } from "../data/services";
import PaymentBadges from "./PaymentBadges";

const ALL = "Todos";

const CATEGORY_STYLE: Record<string, { icon: LucideIcon; badge: string; text: string }> = {
  Promociones: { icon: Sparkles, badge: "bg-amber-100", text: "text-amber-600" },
  "Edredones y Hogar": { icon: BedDouble, badge: "bg-violet-100", text: "text-violet-600" },
  "Zapatos y Otros": { icon: Footprints, badge: "bg-teal-100", text: "text-teal-600" },
  "Máquinas y Peso": { icon: WashingMachine, badge: "bg-brand-100", text: "text-brand-700" },
  "Lavado en Seco": { icon: Shirt, badge: "bg-rose-100", text: "text-rose-600" },
};

function CategoryIcon({ category, className }: { category: string; className?: string }) {
  const style = CATEGORY_STYLE[category];
  if (!style) return null;
  const Icon = style.icon;
  return <Icon className={className} />;
}

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function ServiceCard({ service, compact }: { service: ServiceItem; compact?: boolean }) {
  const isPromo = service.category === "Promociones";
  const style = CATEGORY_STYLE[service.category];
  return (
    <div
      className={`flex shrink-0 flex-col justify-between rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        compact ? "w-44 snap-start" : ""
      } ${isPromo ? "border-amber-200" : "border-slate-100 hover:border-brand-200"}`}
    >
      <div>
        <div className="mb-2 flex items-center justify-between">
          {style && (
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${style.badge} ${style.text}`}
            >
              <CategoryIcon category={service.category} className="h-3.5 w-3.5" />
            </span>
          )}
          {isPromo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">
              <Sparkles className="h-3 w-3" /> Promo
            </span>
          )}
        </div>
        <p className="text-sm font-semibold leading-snug text-slate-800">
          {service.name}
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-lg font-extrabold text-brand-700">
          ${service.price.toFixed(2)}
        </span>
        <a
          href={whatsappFor(service.name)}
          target="_blank"
          rel="noreferrer"
          title={`Agendar ${service.name}`}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 transition hover:bg-green-500 hover:text-white"
        >
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);

  const isFiltering = query.trim() !== "" || category !== ALL;

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return SERVICES.filter((s) => {
      const matchesQuery = q === "" || normalize(s.name).includes(q);
      const matchesCategory = category === ALL || s.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="servicios" className="bg-brand-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Servicios
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Precios claros. Cuidado profesional.
          </h2>
          <p className="mt-4 text-slate-600">
            Más de 60 servicios de lavado al peso, en seco, edredones,
            alfombras y más. Busca el tuyo o explora por categoría.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Aceptamos tarjeta de crédito (+ comisión bancaria)
          </p>
          <PaymentBadges />
        </div>

        {/* Buscador */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busca un servicio (ej. edredón, zapatos, seco...)"
              className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>
        </div>

        {/* Chips de categoría */}
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[ALL, ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === cat
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
              }`}
            >
              <CategoryIcon category={cat} className="h-4 w-4" />
              {cat}
            </button>
          ))}
        </div>

        {/* Resultados */}
        <div className="mt-8">
          {isFiltering ? (
            filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((s) => (
                  <ServiceCard key={s.name} service={s} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 py-12 text-center">
                <p className="text-slate-600">
                  No encontramos ese servicio en la lista.
                </p>
                <a
                  href={whatsappFor("un servicio que no encontré en la página")}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pregúntanos por WhatsApp
                </a>
              </div>
            )
          ) : (
            <div className="flex flex-col gap-8">
              {CATEGORIES.map((cat) => {
                const items = SERVICES.filter((s) => s.category === cat);
                const style = CATEGORY_STYLE[cat];
                return (
                  <div key={cat}>
                    <div className="mb-3 flex items-center gap-2.5">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${style.badge} ${style.text}`}
                      >
                        <CategoryIcon category={cat} className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{cat}</h3>
                      <span className="text-sm text-slate-400">
                        ({items.length})
                      </span>
                    </div>
                    <div className="flex snap-x gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {items.map((s) => (
                        <ServiceCard key={s.name} service={s} compact />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
