import { PRESENTATION, presentations } from "./db.ts";

export const receta = {
  name: "Pizza",
  collections: [
    {
      key: "presentation",
      name: "Tamaño",
      type: "principal",
      values: [
        {
          id: PRESENTATION.FAMILIAR,
          key: "familiar",
          title: presentations[PRESENTATION.FAMILIAR].name,
          principal: true,
          base: {
            6: 4,
          },
          items: {
            1: 1,
          },
        },
        {
          id: PRESENTATION.PEQUENA,
          key: "pequena",
          factor: 0.5,
          items: {
            4: 1,
          },
        },
        {
          label: PRESENTATION.GRANDE,
          key: "grande",
          factor: 1.5,
          items: {
            2: 1,
          },
        },
      ],
    },
    {
      key: "flavior",
      type: "tag",
      name: "Sabor",
      values: [
        {
          label: "Americana",
          key: "americana",
          items: {
            5: 3,
          },
        },
        {
          label: "Napolitana",
          key: "napolitana",
          items: {
            7: 3,
          },
        },
      ],
    },
    {
      key: "extrachees",
      type: "mod",
      name: "Extra queso",
      mods: {
        6: (item: number) => item + 1,
      },
    },
  ],
};

// armar una pizza
// [tamaño][sabor][extra queso][extra tomate]
// [pequeña][napolitana]
