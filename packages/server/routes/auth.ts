const prefix = "/auth";

export default {
  [prefix]: {
    GET: () => {
      return new Response("Hello via Bun! /auth");
    },
  },
  [`${prefix}/login`]: {
    GET: () => {
      return new Response("Hello via Bun! /auth/login");
    },
    POST: () => {
      return new Response("Hello via Bun! /auth/login");
    }
  },
}
