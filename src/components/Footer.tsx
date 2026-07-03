import { Mail, MapPin, Phone } from "lucide-react";
import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_1,
} from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/lavasuper-logo.webp"
              alt="LavaSuper E&E"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-extrabold text-white">
              LavaSuper <span className="text-brand-400">E&E</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Lavado al peso y en seco. Cuidamos tu ropa, cuidamos tu estilo.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Contacto</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-400" />
              <a href={`tel:${PHONE_1}`} className="hover:text-white">
                {PHONE_1}
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-400" />
              <a href={`mailto:${EMAIL}`} className="hover:text-white">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-white">Ubicación</h3>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-start gap-2 text-sm hover:text-white"
          >
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
            {ADDRESS}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-slate-800 px-4 pt-6 text-center text-sm text-slate-500">
        <p>© 2026 LavaSuper E&E. Todos los derechos reservados.</p>
        <p className="mt-1">Hecho con cuidado en Quito, Ecuador.</p>
      </div>
    </footer>
  );
}
