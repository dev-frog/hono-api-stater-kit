import { z } from "@hono/zod-openapi";

function createMessageObjectSchema(exampleMessage: string = "Hello World", exampleStatusCode: number = 200, exampleSuccess: boolean = true, exampleTimestamp = new Date().toISOString(), exampleData: any = {}) {
  return z.object({
    message: z.string(),
    success: z.boolean(),
    statusCode: z.number(),
    timestamp: z.string(),
    data: z.object({}),
  }).openapi({
    example: {
      success: exampleSuccess,
      message: exampleMessage,
      statusCode: exampleStatusCode,
      timestamp: exampleTimestamp,
      data: exampleData,

    },
  });
}

export default createMessageObjectSchema;
