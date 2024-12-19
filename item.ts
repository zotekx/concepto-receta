import { PRESENTATION } from "./db.ts";

export interface Item {
  id: number;
  name: string;
  price: number;
  presentationId: number;
  measureId: number;
}

export const ITEMS = {
  1: {
    id: 1,
    name: "Caja",
    price: 100,
    presentationId: PRESENTATION.FAMILIAR,
    measureId: 1,
  },
  2: {
    id: 2,
    name: "Caja",
    price: 100,
    presentationId: PRESENTATION.GRANDE,
    measureId: 1,
  },
  3: {
    id: 3,
    name: "Caja",
    price: 200,
    presentationId: PRESENTATION.MEDIANA,
    measureId: 3,
  },
  4: {
    id: 4,
    name: "Caja",
    price: 200,
    presentationId: PRESENTATION.PEQUENA,
    measureId: 3,
  },
  6: {
    id: 6,
    name: "Queso",
    price: 100,
    presentationId: 1000,
    measureId: 1,
  },
  5: {
    id: 5,
    name: "Jamon",
    price: 100,
    presentationId: 1000,
    measureId: 1,
  },
  7: {
    id: 7,
    name: "Tomate",
    price: 100,
    presentationId: 1000,
    measureId: 1,
  },
  8: {
    id: 8,
    name: "Cebolla",
    price: 100,
    presentationId: 1000,
    measureId: 1,
  },
};
