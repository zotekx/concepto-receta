import { ITEMS } from "./item.ts";
import { receta } from "./main.ts";

export class Recipe {
  constructor(private readonly recipe: any) {}

  get(collections: string[]) {
    const principal = this.recipe.collections.find(
      (c: any) => c.type === "principal"
    );
    const base = principal.values.find((c: any) => c.principal);
    let items: Record<string, number> = base.base;
    let factor = 1;

    for (const collection of collections) {
      const [key, value] = collection.split(":");
      const collectionValue = this.recipe.collections.find(
        (c: any) => c.key === key
      );

      if (collectionValue.type == "mod") {
        for (const [key, value] of Object.entries(items)) {
          const mod = collectionValue.mods[key];
          if (mod) {
            const result = mod(value);
            items[key] = result;
          }
        }
        continue;
      }

      const collectionItem = collectionValue.values.find(
        (c: any) => c.key === value
      );

      const itemsCollection = { ...collectionItem.items };

      if (collectionValue.type === "principal") {
        factor = collectionItem.factor;
      } else if (collectionValue.type == "tag") {
        for (const [key, value] of Object.entries(itemsCollection)) {
          itemsCollection[key] = Number(value) * factor;
        }
      }

      items = {
        ...items,
        // ...collectionItem.items,
        ...itemsCollection,
      };
    }

    return items;
  }
}

const pizzaRecipe = new Recipe(receta);

const result = pizzaRecipe.get([
  "presentation:pequena",
  "flavior:napolitana",
  // "extrachees",
]);

const formated = [];
for (const [key, value] of Object.entries(result)) {
  const item = ITEMS[key];
  formated.push({
    id: item.id,
    itemName: item.name,
    quantity: value,
  });
}

console.log(formated);
