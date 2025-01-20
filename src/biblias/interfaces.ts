export interface Biblia {
  // Define aquí las propiedades de la Biblia según la estructura del JSON de la API
  // Ejemplo:
  id: number;
  nombre: string;
  // ...otras propiedades...
}

export interface BibliaResponse {
  // Define aquí la estructura de la respuesta de la API
  // Ejemplo:
  biblias: Biblia[];
}
