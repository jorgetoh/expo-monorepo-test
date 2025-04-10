import { router, publicProcedure } from "./trpc";
import { Prisma } from "./generated/prisma";
import { prismaClient } from "./db/prisma-client";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { logMiddleware } from "./middleware";
import { z } from "zod";

const appRouter = router({
  drivers: publicProcedure.use(logMiddleware).query(async () => {
    console.log("Fetching all drivers...");
    return await prismaClient.driver.findMany({});
  }),

  // i need to find a way to pass the type directly from the prisma schema, not hardcode the validation.
  driverById: publicProcedure
    .use(logMiddleware)
    .input(z.number())
    .query(async (opts) => {
      const { input } = opts;

      return await prismaClient.client.findFirst({
        where: {
          id: input,
        },
      });
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

export type AppRouter = typeof appRouter;
