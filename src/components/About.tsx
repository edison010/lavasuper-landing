import { CheckCircle2, Clock, Award, Users } from "lucide-react";

const points = [
  "Más de 10 años cuidando la ropa de las familias quiteñas",
  "Equipo humano capacitado y de confianza",
  "Detergentes premium y maquinaria industrial",
  "Recogida y entrega puntual en tu domicilio",
];

const stats = [
  { icon: Users, value: "+600", label: "Clientes felices" },
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Clock, value: "7am–6pm", label: "Todos los días" },
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-24">
      {/* Blob fondo */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-brand-50/60 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 md:grid-cols-2">
        {/* ── Columna izquierda: imagen creativa ── */}
        <div className="relative flex justify-center">
          {/* Bloque de color detrás */}
          <div className="absolute -left-4 top-6 h-[88%] w-[80%] rounded-3xl bg-brand-600/10" />

          {/* Imagen principal con borde inferior en ángulo */}
          <div
            className="relative z-10 overflow-hidden rounded-3xl shadow-2xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
          >
            <img
              src="/local-fachada.webp"
              alt="Fachada de la lavandería LavaSuper E&E - La Florida, Quito"
              className="h-[480px] w-full max-w-md object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

          {/* Badge horario — esquina superior derecha */}
          <div className="absolute -right-2 top-8 z-20 rounded-2xl bg-brand-600 px-4 py-3 text-center text-white shadow-xl shadow-brand-600/30">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
              Abierto
            </p>
            <p className="mt-0.5 text-lg font-extrabold leading-none">7am–6pm</p>
            <p className="mt-0.5 text-xs text-brand-200">Todos los días</p>
          </div>

          {/* Badge clientes — abajo izquierda */}
          <div className="absolute -bottom-5 left-6 z-20 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl ring-1 ring-slate-100">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              {["#3b82f6", "#10b981", "#f59e0b"].map((color, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">+600</p>
              <p className="text-xs text-slate-500">clientes felices</p>
            </div>
          </div>

          {/* Dots decoration */}
          <div
            className="pointer-events-none absolute -bottom-6 -right-6 z-0 h-36 w-36 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #93c5fd 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>

        {/* ── Columna derecha: texto ── */}
        <div className="relative z-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Sobre nosotros
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            Cuidamos tu ropa,{" "}
            <span className="text-brand-600">cuidamos tu estilo.</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Sabemos que tu tiempo en casa vale oro y que el fin de semana no se
            hizo para lavar. Nacimos aquí en Quito con un propósito simple:
            quitarte esa carga de encima para que disfrutes más de tu familia y tu
            descanso, cuidando cada una de tus prendas como si fueran nuestras.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>

          {/* Mini stats */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center"
              >
                <Icon className="mx-auto mb-2 h-5 w-5 text-brand-500" />
                <p className="text-xl font-extrabold text-slate-900">{value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
