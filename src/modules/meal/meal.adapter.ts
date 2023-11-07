import { Meal } from "./meal.entity";

export class MealAdapter {
  static toPersist(meal: Meal) {
    return {
      id: meal.id,
      name: meal.props.name,
      description: meal.props.description,
      date: meal.props.date,
      inDiet: meal.props.inDiet,
    };
  }
}
