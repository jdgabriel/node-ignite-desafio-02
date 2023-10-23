import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

const userSchemaId = z.object({
  id: z.string().uuid(),
});

export const createUserSchema = userSchema;
export const updateUserSchema = createUserSchema.merge(userSchemaId);

export type UserSchema = z.infer<typeof userSchema>;
export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
