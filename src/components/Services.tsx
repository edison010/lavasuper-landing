import {
  ArrowRight,
  Droplets,
  Crown,
  Briefcase
} from "lucide-react";
import { whatsappFor } from "../lib/constants";

const collections = [
  {
    icon: Droplets,
    name: "Perfumería de Nicho",
    brands: "Creed, Parfums de Marly, Xerjoff...",
    description: "Para los conocedores que buscan aromas únicos, complejos y de producción limitada.",
    price: "Desde $180"
  },
  {
    icon: Crown,
    name: "Diseñador Alta Gama",
    brands: "Tom Ford, Dior Privée, Chanel...",
    description: "Las líneas exclusivas de las casas de moda más prestigiosas del mundo.",
    price: "Desde $120"
  },
  {
    icon: Briefcase,
    name: "Decants & Travel Size",
    brands: "Muestras extraídas del frasco original",
    description: "Explora múltiples fragancias con atomizadores de viaje de 5ml y 10ml.",
    price: "Desde $15"
  },
];

export default function Services() {
  return (
    <section id="colecciones" className="bg-brand-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-dark">
            NUESTRO CATÁLOGO
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-luxury-dark md:text-5xl">
            Colecciones Exclusivas
          </h2>
          <p className="mt-6 text-lg text-brand-700">
            Maison Olfactive alberga una selección rigurosa de las casas perfumeras más respetadas. Cada frasco cuenta una historia.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {collections.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded border border-brand-100 bg-white p-10 shadow-sm transition hover:shadow-xl hover:border-gold/30"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-gold-dark">
                <c.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-luxury-dark">
                {c.name}
              </h3>
              <p className="mt-2 text-xs font-medium tracking-wider text-brand-600 uppercase">
                {c.brands}
              </p>
              
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-700">{c.description}</p>

              <div className="mt-8 border-t border-brand-100 pt-8">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold italic text-gold-dark">
                    {c.price}
                  </span>
                  <a
                    href={whatsappFor(`Consulta por la colección: ${c.name}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest text-luxury-dark transition hover:text-gold-dark"
                  >
                    VER CATÁLOGO <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
