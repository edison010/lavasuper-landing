export default function Gallery() {
  const photos = [
    {
      src: "/local-maquinas.webp",
      alt: "Máquinas industriales Dexter de autoservicio",
      label: "Autoservicio",
    },
    {
      src: "/local-fachada.webp",
      alt: "Fachada del local LavaSuper E&E en La Florida",
      label: "Nuestro local",
    },
    {
      src: "/local-interior.webp",
      alt: "Interior de LavaSuper con mostrador y servicios",
      label: "Interior",
    },
  ];

  return (
    <section id="galeria" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Galería
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Conoce nuestras instalaciones
          </h2>
          <p className="mt-4 text-slate-600">
            Equipos industriales de última generación para un lavado profesional
            y resultados impecables.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="group relative overflow-hidden rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-800 backdrop-blur-sm">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
