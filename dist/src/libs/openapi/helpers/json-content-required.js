import jsonContent from "./json-content.js";
function jsonContentRequired(schema, description) {
    return {
        ...jsonContent(schema, description),
        required: true,
    };
}
export default jsonContentRequired;
