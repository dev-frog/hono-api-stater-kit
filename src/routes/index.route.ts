import { createRoute } from "@hono/zod-openapi";

import { createRouter } from "@/libs/create-app";
import * as HttpStatusCodes from "@/libs/http-status-codes";
import { jsonContent } from "@/libs/openapi/helpers";
import { createMessageObjectSchema } from "@/libs/openapi/schemas";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Index"],
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          createMessageObjectSchema("API Index Route"),
          "API Index Route",
        ),
      },
    }),
    (c) => {
      return c.json({
        message: "API Index Route",
        success: true,
        statusCode: HttpStatusCodes.OK,
        timestamp: new Date().toISOString(),
      }, HttpStatusCodes.OK);
    },
  );

export default router;