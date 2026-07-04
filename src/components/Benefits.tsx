import {
  BadgeCheck,
  Clock,
  Home,
  Leaf,
  Tag,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Retiro y entrega",
    text: "Coordinamos el domicilio en todo el norte de Quito.",
  },
  {
    icon: Tag,
    title: "Desde $0.50 / lb",
    text: "Precios claros, sin sorpresas.",
  },
  {
    icon: Home,
    title: "Domicilio desde $2",
    text: "$2 mínimo cerca (hasta Cotocollao / La Y); $2 ida + $2 vuelta más lejos.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    text: "Cumplimos con la hora acordada, sin excusas.",
  },
  {
    icon: BadgeCheck,
    title: "Garantía total",
    text: "Si algo no queda bien, lo repetimos sin costo.",
  },
  {
    icon: Leaf,
    title: "Detergentes premium",
    text: "Cuidamos tu ropa y el medio ambiente.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
          >
            <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600">
              <b.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
