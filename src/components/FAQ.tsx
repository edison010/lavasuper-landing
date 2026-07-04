import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Hacen lavandería a domicilio en Quito Norte?",
    a: "Sí. LavaSuper E&E ofrece servicio de lavandería a domicilio en todo el norte de Quito: La Florida, La Concepción, El Condado, Cotocollao, Ofelia, Ponceano, Carcelén, El Bosque, Ponciano, Kennedy, Los Rosales y sectores aledaños. El domicilio tiene un valor mínimo de $2 en el sector cercano (hasta Cotocollao y La Y); en sectores más alejados es $2 de ida más $2 de vuelta.",
  },
  {
    q: "¿Cuánto cuesta el servicio de lavado?",
    a: "El lavado al peso cuesta $0.50 por libra e incluye lavado, secado y doblado. Los edredones tienen un precio fijo de $5.00 por pieza, cobijas tipo vicuña $4.00, cortinas visillo $2.00, cortinas pesadas $4.00 y alfombras $8.00 por metro cuadrado. El retiro y entrega a domicilio tiene un valor mínimo de $2 en el sector cercano (hasta Cotocollao y La Y); en sectores más alejados es $2 de ida y $2 de vuelta.",
  },
  {
    q: "¿En cuánto tiempo entregan la ropa lavada?",
    a: "El tiempo de entrega es de 24 a 48 horas. En la mayoría de los casos entregamos al día siguiente. Puedes coordinar el horario de retiro y entrega directamente por WhatsApp.",
  },
  {
    q: "¿También lavan edredones y cobijas?",
    a: "Sí, lavamos edredones ($5.00/pieza), cobijas tipo vicuña ($4.00/pieza), cortinas y alfombras con maquinaria industrial Dexter. También retiramos y entregamos estas prendas de gran tamaño a domicilio con la misma tarifa: $2 mínimo en el sector cercano, o $2 de ida y $2 de vuelta más lejos.",
  },
  {
    q: "¿Cómo agendo el servicio?",
    a: "Puedes agendar directamente por WhatsApp al +593 986 115 360 o llamando al mismo número. También puedes escribirnos a lavasuperservicio@gmail.com. Respondemos en minutos.",
  },
  {
    q: "¿Tienen lavado en seco?",
    a: "Sí, ofrecemos lavado en seco para prendas delicadas que no soportan el agua. Contáctanos por WhatsApp para consultar disponibilidad y precio según la prenda.",
  },
  {
    q: "¿En qué horario trabajan?",
    a: "Atendemos de lunes a domingo de 7:00 a 18:00. Puedes dejar tu ropa directamente en nuestro local ubicado en Manuel Serrano y Av. La Florida, Quito, o coordinar el retiro a domicilio.",
  },
  {
    q: "¿Dónde está ubicada la lavandería?",
    a: "Estamos en Teniente Manuel Serrano N52-75 y Av. La Florida, sector La Florida, Quito Norte. También vamos a buscar tu ropa a domicilio en los barrios del norte de la ciudad.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  // Schema.org FAQ structured data for Google rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section id="preguntas-frecuentes" className="bg-white py-20">
      {/* Schema.org FAQPage markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            ¿Tienes dudas sobre nuestra lavandería?
          </h2>
          <p className="mt-4 text-slate-600">
            Resolvemos las consultas más comunes sobre nuestro servicio de
            lavandería a domicilio en Quito Norte.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                id={`faq-btn-${i}`}
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-slate-800">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="border-t border-slate-200 px-6 pb-5 pt-4 text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
