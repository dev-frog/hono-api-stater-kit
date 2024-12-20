import { INTERNAL_SERVER_ERROR, OK } from "../libs/http-status-codes.js";
const onError = (err, c) => {
    const currentStatus = "status" in err
        ? err.status
        : c.newResponse(null).status;
    const statusCode = currentStatus !== OK
        ? currentStatus
        : INTERNAL_SERVER_ERROR;
    // eslint-disable-next-line node/no-process-env
    const env = c.env?.NODE_ENV || process.env?.NODE_ENV;
    return c.json({
        stack: env === "production"
            ? undefined
            : err.stack,
    }, statusCode);
};
export default onError;
