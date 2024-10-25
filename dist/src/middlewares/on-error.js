import config from "config";
import { INTERNAL_SERVER_ERROR, OK } from "@/libs/http-status-codes";
const onError = (err, c) => {
    const currentStatus = "status" in err
        ? err.status
        : c.newResponse(null).status;
    const statusCode = currentStatus !== OK
        ? currentStatus
        : INTERNAL_SERVER_ERROR;
    const env = c.env?.NODE_ENV || config.get("server.note_env");
    return c.json({
        stack: env === "production"
            ? undefined
            : err.stack,
    }, statusCode);
};
export default onError;
