import { Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_1,
} from "../lib/constants";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Encuéntranos
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Visítanos o pide domicilio
          </h2>
          <p className="mt-4 text-slate-600">
            Estamos en el norte de Quito, listos para atenderte. También
            llevamos y traemos tu ropa a domicilio: $2 mínimo en el sector
            cercano (hasta Cotocollao y La Y), $2 de ida y $2 de vuelta en
            sectores más alejados.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Dirección</p>
                <p className="text-slate-600">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Teléfonos</p>
                <p className="text-slate-600">
                  {PHONE_1}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-brand-100 p-2.5 text-brand-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Correo</p>
                <p className="text-slate-600">{EMAIL}</p>
              </div>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            <MapPin className="h-4 w-4" />
            Ver en Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Mapa LavaSuper E&E"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d-78.494924!3d-0.1424416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5854bd2e04a73%3A0xbaea8ede3ac5f615!2sLavander%C3%ADa%20LavaSuper%20E%26E%20-%20LA%20FLORIDA!5e0!3m2!1ses!2sec!4v1720000000000!5m2!1ses!2sec"
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
