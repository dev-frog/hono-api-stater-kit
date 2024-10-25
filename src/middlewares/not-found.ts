import type { NotFoundHandler } from "hono";

import { NOT_FOUND } from "@/libs/http-status-codes";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "@/libs/http-status-phrases";

const notFound: NotFoundHandler = (c) => {
  return c.json({
    success: false,
    message: `${NOT_FOUND_MESSAGE}`,
    path: c.req.path,
    statusCode: NOT_FOUND,
    timestamp: new Date().toISOString(),
  }, NOT_FOUND);
};

export default notFound;
