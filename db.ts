export enum PRESENTATION {
  FAMILIAR = 3,
  PEQUENA = 1,
  MEDIANA = 2,
  GRANDE = 4,
}

export const presentations = {
  [PRESENTATION.FAMILIAR]: {
    id: PRESENTATION.FAMILIAR,
    name: "FAMILIAR",
  },
  [PRESENTATION.PEQUENA]: {
    id: PRESENTATION.PEQUENA,
    name: "Pequeña",
  },
  [PRESENTATION.MEDIANA]: {
    id: PRESENTATION.MEDIANA,
    name: "Mediana",
  },
  [PRESENTATION.GRANDE]: {
    id: PRESENTATION.GRANDE,
    name: "Grande",
  },
};
