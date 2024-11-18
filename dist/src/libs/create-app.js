import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { secureHeaders } from "hono/secure-headers";
import { notFound, onError } from "../middlewares/index.js";
import serveEmojiFavicon from "../middlewares/serve-emoji-favicon.js";
import { pinoLogger } from "../utils/pino-logger.js";
import defaultHook from "./openapi/openapi-hook.js";
export function createRouter() {
    return new OpenAPIHono({
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
export function createTestApp(router) {
    return createApp().route("/", router);
}
