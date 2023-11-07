import { FastifyInstance } from "fastify";
import { CreateMeal } from "./useacases/create-meal.usecase";
import { UpdateMeal } from "./useacases/update-meal.usecase";

export async function mealRoutes(app: FastifyInstance) {
  app.post("/", CreateMeal.execute);
  app.put("/:id", UpdateMeal.execute);
}
