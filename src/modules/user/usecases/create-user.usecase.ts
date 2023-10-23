import { prisma } from "@/common/database";
import { FastifyReply, FastifyRequest } from "fastify";
import { UserAdapter } from "../user.adapter";
import { User } from "../user.entity";
import { CreateUserDTO, createUserSchema } from "../user.schema";

interface RequestCreateUser {
  Body: CreateUserDTO;
}

export class CreateUser {
  static async execute(request: FastifyRequest<RequestCreateUser>, reply: FastifyReply) {
    const { email, name } = createUserSchema.parse(request.body);

    const user = User.create({ name, email });
    const persist = UserAdapter.toPersist(user);

    await prisma.user.create({
      data: persist,
    });

    return { user: persist };
  }
}
