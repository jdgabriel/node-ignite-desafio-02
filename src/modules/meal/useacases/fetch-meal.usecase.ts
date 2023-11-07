import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";

interface Request {
  Headers: { user_id: string };
  Params: { id: string };
}

export class FetchMeal {
  static async execute(request: FastifyRequest<Request>, reply: FastifyReply) {
    const { user_id } = request.headers;
    const meals = await prisma.meal.findMany({ where: { userId: user_id } });
    return { meals };
  }
}
