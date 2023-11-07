import { Entity } from "../../common/entity";
import { CreateMealDTO, MealSchema } from "./meal.schema";

export class Meal extends Entity<MealSchema> {
  private constructor(props: MealSchema, id?: string) {
    super(props, id);
  }

  static create(props: CreateMealDTO, id?: string) {
    const date = props.date ?? new Date();
    return new Meal({ ...props, date }, id);
  }
}
