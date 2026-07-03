import { Search, ShieldCheck, PackageOpen } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Asesoría Olfativa",
    text: "Nuestros expertos analizan tus preferencias para encontrar la fragancia que se adapte a tu firma personal.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    title: "Garantía de Origen",
    text: "Seleccionamos y verificamos la pureza y autenticidad de cada frasco directamente desde las casas perfumeras.",
  },
  {
    icon: PackageOpen,
    number: "3",
    title: "Unboxing de Lujo",
    text: "Recibe tu perfume en un empaque cuidado hasta el último detalle, en cualquier ciudad del Ecuador.",
  },
];

export default function HowItWorks() {
  return (
    <section id="garantia" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold tracking-widest text-gold-dark">
            NUESTRO PROCESO
          </span>
          <h2 className="mt-4 font-serif text-4xl font-bold text-luxury-dark md:text-5xl">
            La Experiencia Maison
          </h2>
          <p className="mt-6 text-lg text-brand-700">
            Comprar un perfume de lujo no es solo una transacción, es un viaje sensorial. Te acompañamos en cada paso para asegurar una experiencia impecable.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-10">
            {steps.map((s) => (
              <div key={s.number} className="flex items-start gap-6">
                <div className="relative shrink-0">
                  <div className="rounded-full bg-luxury-dark p-5 text-gold">
                    <s.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-bold text-white shadow-sm">
                    {s.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-luxury-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-700">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1615486171448-4fdcbab343e0?q=80&w=800&auto=format&fit=crop"
            alt="Empaque premium de perfume"
            className="w-full rounded border border-brand-100 object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
