import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPizzas = async () => {
  const filePath = path.join(__dirname, "..", "db", "pizzas.json");
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