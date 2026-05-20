import { readFile } from "node:fs/promises";
import path from "node:path";

const getPizzas = async () => {
  // Construimos la ruta absoluta usando process.cwd() que apunta a la raíz del proyecto en Vercel
  const filePath = path.join(process.cwd(), "db", "pizzas.json");
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};

const getPizza = async (id) => {
  const pizzas = await getPizzas();
  return pizzas.find((pizza) => pizza.id === id);
};

export const pizzaModel = {
  getPizzas,
  getPizza,
};