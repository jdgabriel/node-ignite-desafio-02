import { z } from "zod";

const mealSchema = z.object({
  name: z.string(),
  description: z.string().min(1),
  date: z.date(),
  inDiet: z.boolean().default(true),
});

const mealSchemaId = z.object({
  id: z.string().uuid(),
});

const dateOptional = z.object({
  date: z.date().optional(),
});

export const createMealSchema = mealSchema.merge(dateOptional);
export const updateMealSchema = createMealSchema.merge(mealSchemaId);

export type MealSchema = z.infer<typeof mealSchema>;
export type CreateMealDTO = z.infer<typeof createMealSchema>;
export type UpdateMealDTO = z.infer<typeof updateMealSchema>;
