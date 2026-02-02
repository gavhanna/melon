import testRoutes from "./routes/test.ts";
import authRoutes from "./routes/auth.ts";

const server = Bun.serve({
  development: process.env.ENVIRONMENT === "development",
  port: process.env.PORT ?? 3000,
  routes: { ...testRoutes, ...authRoutes, "/*": () => new Response("Catch-all route") },
});

console.log(`Listening on ${server.url}`)
