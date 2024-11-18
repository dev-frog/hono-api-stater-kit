import { serve } from "@hono/node-server";
import app from "./app.js";
import env from "./env.js";
const port = env.PORT;
// eslint-disable-next-line no-console
console.log(`Listening on http://localhost:${port}`);
serve({
    fetch: app.fetch,
    port,
});
