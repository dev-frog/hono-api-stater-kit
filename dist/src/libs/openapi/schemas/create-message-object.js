import { z } from "@hono/zod-openapi";
function createMessageObjectSchema(exampleMessage = "Hello World", exampleStatusCode = 200, exampleSuccess = true, exampleTimestamp = new Date().toISOString(), exampleData = {}) {
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
