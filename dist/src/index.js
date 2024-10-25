import { serve } from "@hono/node-server";
import app from "./app";
const port = 3000;
// eslint-disable-next-line no-console
console.log(`Listening on http://localhost:${port}`);
serve({
    fetch: app.fetch,
    port,
});
