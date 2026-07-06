export interface ServiceItem {
  category: string;
  name: string;
  price: number;
}

export const CATEGORIES = [
  "Promociones",
  "Edredones y Hogar",
  "Zapatos y Otros",
  "Máquinas y Peso",
  "Lavado en Seco",
] as const;

export const SERVICES: ServiceItem[] = [
  // Edredones y Hogar
  { category: "Edredones y Hogar", name: "Lavado alfombra pelo alto (m²)", price: 10.0 },
  { category: "Edredones y Hogar", name: "Lavado alfombra pelo corto (m²)", price: 8.0 },
  { category: "Edredones y Hogar", name: "Lavado almohada ortopédica", price: 3.0 },
  { category: "Edredones y Hogar", name: "Lavado cobija delgada", price: 2.0 },
  { category: "Edredones y Hogar", name: "Lavado cobija grande", price: 5.0 },
  { category: "Edredones y Hogar", name: "Lavado cobija térmica", price: 3.0 },
  { category: "Edredones y Hogar", name: "Lavado cobija tipo vicuña", price: 4.0 },
  { category: "Edredones y Hogar", name: "Lavado cojín normal", price: 2.0 },
  { category: "Edredones y Hogar", name: "Lavado cojín pequeño", price: 1.0 },
  { category: "Edredones y Hogar", name: "Lavado cortina pesada (metro)", price: 3.0 },
  { category: "Edredones y Hogar", name: "Lavado edredón gigante", price: 6.0 },
  { category: "Edredones y Hogar", name: "Lavado edredón grande", price: 5.0 },
  { category: "Edredones y Hogar", name: "Lavado edredón pequeño", price: 4.0 },
  { category: "Edredones y Hogar", name: "Lavado juego de sábanas", price: 2.0 },
  { category: "Edredones y Hogar", name: "Lavado protector de colchón", price: 4.0 },
  { category: "Edredones y Hogar", name: "Lavado toalla grande", price: 1.0 },
  { category: "Edredones y Hogar", name: "Lavado toalla mediana", price: 0.5 },
  { category: "Edredones y Hogar", name: "Lavado y planchado mantelería (libra)", price: 0.75 },

  // Zapatos y Otros
  { category: "Zapatos y Otros", name: "Lavado chaleco de seguridad", price: 4.0 },
  { category: "Zapatos y Otros", name: "Lavado de mochila escolar", price: 3.0 },
  { category: "Zapatos y Otros", name: "Lavado par de zapatos", price: 2.5 },
  { category: "Zapatos y Otros", name: "Lavado par de zapatos de gamuza", price: 4.0 },
  { category: "Zapatos y Otros", name: "Lavado zapatos de niño", price: 1.75 },
  { category: "Zapatos y Otros", name: "Prenda planchada", price: 1.0 },
  { category: "Zapatos y Otros", name: "Prenda tinturada", price: 6.0 },
  { category: "Zapatos y Otros", name: "Servicio a domicilio", price: 2.0 },
  { category: "Zapatos y Otros", name: "Servicio de costura (prenda)", price: 1.25 },

  // Máquinas y Peso
  { category: "Máquinas y Peso", name: "Lavado de ropa por kilo", price: 1.0 },
  { category: "Máquinas y Peso", name: "Lavado de ropa por libra", price: 0.5 },
  { category: "Máquinas y Peso", name: "Lavado máquina extra grande 50 lbs", price: 12.0 },
  { category: "Máquinas y Peso", name: "Lavado máquina grande 40 lbs", price: 10.0 },
  { category: "Máquinas y Peso", name: "Lavado máquina mediana 30 lbs", price: 8.0 },
  { category: "Máquinas y Peso", name: "Lavado máquina mínima", price: 4.0 },
  { category: "Máquinas y Peso", name: "Lavado máquina mínima ropa de trabajo", price: 5.0 },
  { category: "Máquinas y Peso", name: "Lavado máquina pequeña 20 lbs", price: 6.0 },
  { category: "Máquinas y Peso", name: "Secado máquina grande carga full", price: 5.0 },
  { category: "Máquinas y Peso", name: "Secado máquina grande carga normal", price: 4.0 },
  { category: "Máquinas y Peso", name: "Secado máquina mínima", price: 2.0 },
  { category: "Máquinas y Peso", name: "Secado máquina pequeña", price: 2.5 },
  { category: "Máquinas y Peso", name: "Secado tambor torre", price: 3.0 },
  { category: "Máquinas y Peso", name: "Solo lavado máquina extra grande 50 lbs", price: 6.0 },
  { category: "Máquinas y Peso", name: "Solo lavado máquina grande 40 lbs", price: 5.0 },
  { category: "Máquinas y Peso", name: "Solo lavado máquina mediana 30 lbs", price: 4.0 },
  { category: "Máquinas y Peso", name: "Solo lavado máquina pequeña 20 lbs", price: 3.0 },

  // Lavado en Seco
  { category: "Lavado en Seco", name: "Abrigo 3/4 (hombre)", price: 6.0 },
  { category: "Lavado en Seco", name: "Abrigo largo (hombre/mujer)", price: 8.0 },
  { category: "Lavado en Seco", name: "Camisa o blusa", price: 3.0 },
  { category: "Lavado en Seco", name: "Capa y muceta", price: 10.0 },
  { category: "Lavado en Seco", name: "Chompa liviana", price: 5.0 },
  { category: "Lavado en Seco", name: "Chompa pesada forro lana", price: 6.0 },
  { category: "Lavado en Seco", name: "Chompa pesada motorizado", price: 10.0 },
  { category: "Lavado en Seco", name: "Desmanchado", price: 2.0 },
  { category: "Lavado en Seco", name: "Disfraz delicado", price: 25.0 },
  { category: "Lavado en Seco", name: "Leva (hombre/mujer)", price: 4.0 },
  { category: "Lavado en Seco", name: "Pantalón (hombre/mujer)", price: 4.0 },
  { category: "Lavado en Seco", name: "Pantalón motorizado", price: 10.0 },
  { category: "Lavado en Seco", name: "Terno 2 piezas (hombre)", price: 8.0 },
  { category: "Lavado en Seco", name: "Toga de grado y muceta", price: 10.0 },
  { category: "Lavado en Seco", name: "Traje 2 piezas con pedrería o lentejuelas", price: 10.0 },
  { category: "Lavado en Seco", name: "Vestido sencillo corto", price: 6.0 },
  { category: "Lavado en Seco", name: "Vestido sencillo largo", price: 7.0 },

  // Promociones
  { category: "Promociones", name: "Promo 3 cobijas delgadas", price: 5.0 },
  { category: "Promociones", name: "Promo 3 cobijas gruesas", price: 12.5 },
  { category: "Promociones", name: "Promo 3 cobijas vicuña", price: 10.0 },
  { category: "Promociones", name: "Promo 3 edredones gigantes", price: 15.0 },
  { category: "Promociones", name: "Promo 3 edredones grandes", price: 12.5 },
  { category: "Promociones", name: "Promo 3 edredones pequeños", price: 10.0 },
  { category: "Promociones", name: "Promo 3 ternos dos piezas", price: 21.0 },
];
