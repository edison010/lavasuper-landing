import {
  ArrowRight,
  Bed,
  BedDouble,
  Blinds,
  Grip,
  WashingMachine,
} from "lucide-react";
import { whatsappFor } from "../lib/constants";

const services = [
  {
    icon: WashingMachine,
    name: "Lavado, secado y doblado",
    price: "$0.50",
    unit: "por libra",
    description: "Lavamos, secamos y doblamos tu ropa con detergentes premium.",
  },
  {
    icon: BedDouble,
    name: "Edredones",
    price: "$5.00",
    unit: "por pieza",
    description: "Limpieza profunda que devuelve suavidad y frescura.",
  },
  {
    icon: Bed,
    name: "Cobijas tipo vicuña",
    price: "$4.00",
    unit: "por pieza",
    description: "Cuidado especializado para cobijas de fibra tipo vicuña y materiales delicados.",
  },
  {
    icon: Blinds,
    name: "Cortina visillo",
    price: "$2.00",
    unit: "por pieza",
    description: "Tratamiento delicado que respeta caídas y colores.",
  },
  {
    icon: Blinds,
    name: "Cortina pesada",
    price: "$4.00",
    unit: "por pieza",
    description: "Lavado profesional para telas gruesas y forradas.",
  },
  {
    icon: Grip,
    name: "Alfombras",
    price: "$8.00",
    unit: "por m²",
    description: "Extracción de polvo, manchas y ácaros. Precio por metro cuadrado. Como nuevas.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-brand-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Servicios
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Servicios de Lavandería en Quito
          </h2>
          <p className="mt-4 text-slate-600">
            Elige el servicio que necesitas. Entregas rápidas en 24 a 48 horas sin recargos por domicilio en el Norte de Quito.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100/70 text-brand-700">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {s.name}
              </h3>
              <p className="mt-3 flex-1 text-slate-600">{s.description}</p>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between gap-2">
                  <p>
                    <span className="text-3xl font-extrabold text-brand-700">
                      {s.price}
                    </span>{" "}
                    <span className="text-slate-500">{s.unit}</span>
                  </p>
                  <a
                    href={whatsappFor(s.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-brand-800 transition hover:gap-2.5 hover:text-brand-600"
                  >
                    Agendar <ArrowRight className="h-4 w-4" />
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
