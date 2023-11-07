import { app } from "./app";
import { mealRoutes } from "./modules/meal/meal.routes";
import { userRoutes } from "./modules/user/user.routes";

const PORT = 3000;

async function bootstrap() {
  await app.register(userRoutes, { prefix: "/user" });
  await app.register(mealRoutes, { prefix: "/meal" });

  await app.listen({
    host: "0.0.0.0",
    port: PORT,
  });

  console.log(`Server Running at http://localhost:${PORT}`);
}

bootstrap().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  throw error;
});
