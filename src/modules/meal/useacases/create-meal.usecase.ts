import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";
import { MealAdapter } from "../meal.adapter";
import { Meal } from "../meal.entity";
import { CreateMealDTO, createMealSchema } from "../meal.schema";

interface RequestCreateMeal {
  Body: CreateMealDTO;
  Headers: { user_id: string };
}

export class CreateMeal {
  static async execute(request: FastifyRequest<RequestCreateMeal>, reply: FastifyReply) {
    const { user_id } = request.headers;
    const { description, inDiet, name } = createMealSchema.parse(request.body);

    const meal = Meal.create({ description, inDiet, name });
    const persist = MealAdapter.toPersist(meal);

    await prisma.meal.create({
      data: {
        ...persist,
        userId: user_id,
      },
    });

    return { meal: persist };
  }
}
