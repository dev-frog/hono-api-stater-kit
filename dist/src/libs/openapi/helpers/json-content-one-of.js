import oneOf from "./one-of.js";
function jsonContentOneOf(schemas, description) {
    return {
        content: {
            "application/json": {
                schema: {
                    oneOf: oneOf(schemas),
                },
            },
        },
        description,
    };
}
export default jsonContentOneOf;
