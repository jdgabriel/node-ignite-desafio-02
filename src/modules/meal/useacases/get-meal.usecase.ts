import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";

interface Request {
  Headers: { user_id: string };
  Params: { id: string };
}

export class GetMeal {
  static async execute(request: FastifyRequest<Request>, reply: FastifyReply) {
    const { user_id } = request.headers;
    const { id } = request.params;
    const meal = await prisma.meal.findFirstOrThrow({ where: { id, userId: user_id } });
    return { meal };
  }
}
