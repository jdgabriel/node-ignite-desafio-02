import { app } from "./app";

const PORT = 3000;

app
  .listen({
    host: "0.0.0.0",
    port: PORT,
  })
  .then(() => {
    console.log(`Server Running at http://localhost:${PORT}`);
  });