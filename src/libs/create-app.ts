import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { secureHeaders } from "hono/secure-headers";

import { notFound, onError } from "@/middlewares";
import serveEmojiFavicon from "@/middlewares/serve-emoji-favicon";
import { pinoLogger } from "@/utils/pino-logger";

import type { AppBindings, AppOpenAPI } from "./types";

import defaultHook from "./openapi/openapi-hook";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRouter();
  app
    .use(cors())
    .use(csrf())
    .use(secureHeaders())
    .use(serveEmojiFavicon("🚀"));
  app.use(pinoLogger());

  app.notFound(notFound);
  app.onError(onError);
  return app;
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
  return createApp().route("/", router);
}
