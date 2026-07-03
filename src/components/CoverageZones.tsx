import { MapPin } from "lucide-react";

const zones = [
  "La Florida",
  "La Concepción",
  "El Condado",
  "Cotocollao",
  "La Ofelia",
  "Ponceano",
  "Carcelén",
  "El Bosque",
  "Kennedy",
  "Los Rosales",
  "Ponciano",
  "Miraflores",
  "Rumiurco",
  "El Inca",
  "Comité del Pueblo",
  "Calderón",
];

export default function CoverageZones() {
  return (
    <section
      id="zonas-de-cobertura"
      className="bg-brand-50/60 py-20"
      aria-label="Zonas de cobertura lavandería a domicilio Quito Norte"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Zonas de Cobertura
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Lavandería a domicilio en estos sectores de Quito Norte
          </h2>
          <p className="mt-4 text-slate-600">
            Recogemos y entregamos tu ropa <strong>sin costo adicional</strong>{" "}
            en los principales barrios del norte de Quito. Si no ves tu sector,
            escríbenos — es probable que también lleguemos.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {zones.map((zone) => (
            <div
              key={zone}
              className="flex items-center gap-2.5 rounded-2xl border border-brand-100 bg-white px-4 py-3.5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <MapPin className="h-4 w-4 shrink-0 text-brand-500" />
              <span className="text-sm font-medium text-slate-700">{zone}</span>
            </div>
          ))}
        </div>

        {/* SEO paragraph — visible pero discreto */}
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-500">
          LavaSuper E&amp;E es la lavandería a domicilio de confianza en el
          norte de Quito. Ofrecemos lavado al peso, lavado en seco, limpieza de
          edredones, cobijas, cortinas y alfombras con retiro y entrega gratis
          en La Florida, La Concepción, Cotocollao, El Condado, Ofelia,
          Ponceano, Carcelén, Kennedy, Ponciano, El Bosque y sectores cercanos.
          Llámanos o escríbenos por WhatsApp para coordinar tu servicio hoy.
        </p>
      </div>
    </section>
  );
}
