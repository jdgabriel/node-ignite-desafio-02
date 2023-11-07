import { FastifyInstance } from "fastify";

import { CreateMeal } from "./useacases/create-meal.usecase";
import { DeleteMeal } from "./useacases/delete-meal.usecase";
import { FetchMeal } from "./useacases/fetch-meal.usecase";
import { GetMeal } from "./useacases/get-meal.usecase";
import { UpdateMeal } from "./useacases/update-meal.usecase";

export async function mealRoutes(app: FastifyInstance) {
  app.get("/", FetchMeal.execute);
  app.get("/:id", GetMeal.execute);
  app.post("/", CreateMeal.execute);
  app.put("/:id", UpdateMeal.execute);
  app.delete("/:id", DeleteMeal.execute);
}
