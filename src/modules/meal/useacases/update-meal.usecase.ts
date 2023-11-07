import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateMealDTO } from "../meal.schema";
import { updateMealSchema } from "./../meal.schema";

interface RequestCreateMeal {
  Body: UpdateMealDTO;
  Headers: { user_id: string };
  Params: { id: string };
}

export class UpdateMeal {
  static async execute(request: FastifyRequest<RequestCreateMeal>, reply: FastifyReply) {
    const { user_id } = request.headers;
    const { id } = request.params;

    const body = updateMealSchema.parse(request.body);
    await prisma.meal.findFirstOrThrow({ where: { id, userId: user_id } });

    const meal = await prisma.meal.update({
      data: body,
      where: {
        id,
      },
    });

    return { meal };
  }
}
