import { FastifyInstance } from "fastify";
import { CreateUser } from "./usecases/create-user.usecase";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", CreateUser.execute);
}
