import { Phone } from "lucide-react";
import { PHONE_1, WHATSAPP_URL } from "../lib/constants";

export default function FinalCTA() {
  return (
    <section className="bg-brand-700 py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          ¿Listo para descansar mientras nosotros lavamos?
        </h2>
        <p className="mt-4 text-lg text-brand-100">
          Agenda tu servicio hoy y disfruta de retiro y entrega sin recargo.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-green-500 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:bg-green-600"
          >
            Escribir ahora
          </a>
          <a
            href={`tel:${PHONE_1}`}
            className="flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Llamar
          </a>
        </div>
      </div>
    </section>
  );
}
