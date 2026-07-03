import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Llevo más de un año con LavaSuper. Nunca han fallado con la entrega y mi ropa siempre queda impecable.",
    name: "María P.",
    role: "Cliente frecuente · La Florida",
  },
  {
    quote:
      "El servicio a domicilio me salva la semana. Precios justos y la atención es súper amable.",
    name: "Andrés R.",
    role: "Cliente · Cotocollao",
  },
  {
    quote:
      "Mandé un edredón que ya daba por perdido y lo devolvieron como nuevo. Recomendadísimos.",
    name: "Lucía M.",
    role: "Cliente · Ponceano",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Testimonios
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-slate-100 bg-slate-50/60 p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
