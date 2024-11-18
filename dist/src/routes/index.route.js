import { createRoute } from "@hono/zod-openapi";
import { createRouter } from "../libs/create-app.js";
import * as HttpStatusCodes from "../libs/http-status-codes.js";
import { jsonContent } from "../libs/openapi/helpers/index.js";
import { createMessageObjectSchema } from "../libs/openapi/schemas/index.js";
const router = createRouter()
    .openapi(createRoute({
    tags: ["Index"],
    method: "get",
    path: "/",
    responses: {
        [HttpStatusCodes.OK]: jsonContent(createMessageObjectSchema(`API Index Route`, HttpStatusCodes.OK, true, new Date().toISOString(), {}), "API Index Route"),
    },
}), (c) => {
    return c.json({
        message: "API Index Route",
        success: true,
        statusCode: HttpStatusCodes.OK,
        timestamp: new Date().toISOString(),
        data: {},
    }, HttpStatusCodes.OK);
});
export default router;
