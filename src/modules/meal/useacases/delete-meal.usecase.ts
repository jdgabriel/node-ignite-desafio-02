import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";

interface Request {
  Headers: { user_id: string };
  Params: { id: string };
}

export class DeleteMeal {
  static async execute(request: FastifyRequest<Request>, reply: FastifyReply) {
    const { user_id } = request.headers;
    const { id } = request.params;

    await prisma.meal.findFirstOrThrow({ where: { id, userId: user_id } });

    const meal = await prisma.meal.delete({
      where: {
        id,
      },
    });

    return { meal };
  }
}
