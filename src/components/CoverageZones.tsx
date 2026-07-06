import { MapPin, Navigation } from "lucide-react";

const areas = [
  { name: "Norte de Quito", note: "Nuestro sector — tarifa mínima" },
  { name: "Centro de Quito", note: "Tarifa según distancia" },
  { name: "Sur de Quito", note: "Tarifa según distancia" },
];

export default function CoverageZones() {
  return (
    <section
      id="zonas-de-cobertura"
      className="bg-brand-50/60 py-20"
      aria-label="Zonas de cobertura y tarifa de domicilio"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Zonas de Cobertura
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Cobertura en todo Quito
          </h2>
          <p className="mt-4 text-slate-600">
            Retiramos y entregamos tu ropa en el <strong>norte, centro y sur
            de Quito</strong>. El domicilio tiene un <strong>valor mínimo de
            $2</strong> desde nuestro local en La Florida, y va aumentando
            según qué tan lejos esté tu sector. Escríbenos tu dirección por
            WhatsApp y te confirmamos el valor exacto al instante.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.name}
              className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-sm"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
              <div>
                <p className="font-bold text-slate-900">{area.name}</p>
                <p className="text-sm text-slate-500">{area.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-dashed border-brand-200 bg-white/70 px-6 py-4">
          <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
          <p className="text-sm text-slate-600">
            <strong className="text-slate-900">¿Cómo se calcula?</strong>{" "}
            Desde $2 en sectores cercanos a La Florida; a mayor distancia,
            el valor del domicilio aumenta proporcionalmente. Sin sorpresas:
            te confirmamos el costo exacto antes de agendar.
          </p>
        </div>

        {/* SEO paragraph — visible pero discreto */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          LavaSuper E&amp;E es la lavandería a domicilio de confianza en
          Quito. Ofrecemos lavado al peso, lavado en seco, limpieza de
          edredones, cobijas, cortinas y alfombras con retiro y entrega en el
          norte, centro y sur de la ciudad. El domicilio parte de $2 desde
          nuestro local en La Florida y aumenta según la distancia. Llámanos
          o escríbenos por WhatsApp para coordinar tu servicio hoy.
        </p>
      </div>
    </section>
  );
}
