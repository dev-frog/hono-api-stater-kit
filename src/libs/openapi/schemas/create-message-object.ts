import { z } from "@hono/zod-openapi";

function createMessageObjectSchema(exampleMessage: string = "Hello World", exampleStatusCode: number = 200, exampleSuccess: boolean = true, exampleTimestamp = new Date().toISOString()) {
  return z.object({
    message: z.string(),
    success: z.boolean(),
    statusCode: z.number(),
    timestamp: z.string(),
  }).openapi({
    example: {
      success: exampleSuccess,
      message: exampleMessage,
      statusCode: exampleStatusCode,
      timestamp: exampleTimestamp,
    },
  });
}

export default createMessageObjectSchema;
