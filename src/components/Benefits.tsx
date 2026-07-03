import {
  ShieldCheck,
  Package,
  Truck,
  Sparkles,
  Gift,
  Gem,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "100% Originales",
    text: "Garantía de autenticidad en cada gota. Importación directa de distribuidores autorizados.",
  },
  {
    icon: Sparkles,
    title: "Perfumería de Nicho",
    text: "Fragancias exclusivas que no encontrarás en tiendas departamentales comunes.",
  },
  {
    icon: Truck,
    title: "Envíos a todo Ecuador",
    text: "Envíos seguros y discretos a nivel nacional en 24-48 horas hábiles.",
  },
  {
    icon: Gem,
    title: "Asesoría Olfativa",
    text: "Te ayudamos a encontrar tu fragancia firma según tu personalidad y tipo de piel.",
  },
  {
    icon: Gift,
    title: "Empaque de Lujo",
    text: "Cada pedido incluye un empaque premium, ideal para regalos inolvidables.",
  },
  {
    icon: Package,
    title: "Decants & Muestras",
    text: "Prueba antes de comprometerte con opciones de decants de 5ml y 10ml.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="group flex flex-col items-center text-center rounded-sm border border-brand-100 bg-brand-50/50 p-8 transition hover:border-gold/30 hover:bg-white hover:shadow-xl"
          >
            <div className="mb-6 rounded-full bg-luxury-dark p-4 text-gold transition group-hover:bg-gold group-hover:text-white">
              <b.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl font-bold text-luxury-dark">{b.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
