import { NOT_FOUND } from "@/libs/http-status-codes";
import { NOT_FOUND as NOT_FOUND_MESSAGE } from "@/libs/http-status-phrases";
const notFound = (c) => {
    return c.json({
        message: `${NOT_FOUND_MESSAGE} - ${c.req.path}`,
    }, NOT_FOUND);
};
export default notFound;
