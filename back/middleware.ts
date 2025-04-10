import { middleware } from "./trpc";

export const logMiddleware = middleware(async ({ path, type, next }) => {
  const start = Date.now();
  const result = await next();
  const ms = Date.now() - start;
  console.log(`${type} call to ${path} took ${ms}ms`);
  return result;
});
