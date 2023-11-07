import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";

interface Request {
  Headers: { user_id: string };
}

export class MetricsDietMeal {
  static async execute(request: FastifyRequest<Request>, reply: FastifyReply) {
    const { user_id } = request.headers;

    const meals = await prisma.meal.findMany({ where: { userId: user_id } });

    const mealsInDiet = [];
    const mealsOutDiet = [];
    const bestSequel: Map<number, number> = new Map();

    let sequence = 1;
    meals.forEach((meal) => {
      if (meal.inDiet) {
        mealsInDiet.push(meal);
        const num = bestSequel.get(sequence) ?? 0;
        bestSequel.set(sequence, num + 1);
      } else {
        mealsOutDiet.push(meal);
        sequence += 1;
      }
    });

    return {
      metrics: {
        meals: meals.length,
        mealsInDiet: mealsInDiet.length,
        mealsOutDiet: mealsOutDiet.length,
        percentageOnDiet: `${((mealsInDiet.length / meals.length) * 100).toFixed(2)}%`,
        bestSequel: Array.from(bestSequel.values()).sort((a, b) => b - a)[0],
      },
    };
  }
}
