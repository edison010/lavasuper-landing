import { CalendarCheck, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    number: "1",
    title: "Agenda",
    text: "Escríbenos por WhatsApp o llámanos. Coordinamos horario.",
  },
  {
    icon: Truck,
    number: "2",
    title: "Recogemos",
    text: "Pasamos por tu ropa sin costo adicional.",
  },
  {
    icon: Package,
    number: "3",
    title: "Entregamos",
    text: "Limpia, doblada y lista para usar en tu puerta.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Cómo funciona
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Simplificamos tu vida en 3 pasos
          </h2>
          <p className="mt-4 text-slate-600">
            Sin colas, sin cargar bultos. Nosotros nos encargamos de todo.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {steps.map((s) => (
              <div key={s.number} className="flex items-start gap-5">
                <div className="relative">
                  <div className="rounded-2xl bg-brand-600 p-4 text-white shadow-lg shadow-brand-600/25">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                    {s.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <img
            src="/atencion.jpg"
            alt="Atención personalizada de LavaSuper"
            className="w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
