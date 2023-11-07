import { z } from "zod";

const mealSchema = z.object({
  name: z.string(),
  description: z.string().min(1),
  date: z.date(),
  inDiet: z.boolean().default(true),
});

const mealUpdateSchema = z.object({
  name: z.string().optional(),
  description: z.string().min(1).optional(),
  date: z.date().optional(),
  inDiet: z.boolean().optional(),
});

const mealSchemaId = z.object({
  id: z.string().uuid(),
});

const dateOptional = z.object({
  date: z.date().optional(),
});

export const createMealSchema = mealSchema.merge(dateOptional);
export const updateMealSchema = mealSchema.partial();

export type MealSchema = z.infer<typeof mealSchema>;
export type CreateMealDTO = z.infer<typeof createMealSchema>;
export type UpdateMealDTO = Partial<z.infer<typeof updateMealSchema>>;
