export const PHONE_1 = "0986115360";
export const PHONE_2 = "0986115360";
export const EMAIL = "lavasuperservicio@gmail.com";
export const ADDRESS = "Manuel Serrano y Av. La Florida, Quito";

export const WHATSAPP_URL = `https://wa.me/593${PHONE_1.slice(1)}?text=${encodeURIComponent(
  "Hola LavaSuper, quiero agendar un servicio de lavandería."
)}`;

export const MAPS_URL = "https://maps.app.goo.gl/HniJuxpxjh6Jx5CG8";

export const whatsappFor = (service: string) =>
  `https://wa.me/593${PHONE_1.slice(1)}?text=${encodeURIComponent(
    `Hola LavaSuper, quiero agendar el servicio de ${service}.`
  )}`;
