import { FastifyInstance } from "fastify";
import { CreateMeal } from "./useacases/create-meal.usecase";

export async function mealRoutes(app: FastifyInstance) {
  app.post("/", CreateMeal.execute);
}
