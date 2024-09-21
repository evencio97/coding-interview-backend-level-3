import { Request, ResponseToolkit } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { ValidationErrorDetails } from "../interfaces/interfaces";


const handleValidationErrors = (request: Request, h: ResponseToolkit, err: any) => {
    // Check if real Joi error
    if (!(err.isJoi && Array.isArray(err.details) && err.details.length > 0))
        throw Boom.badRequest();
    // Map the errors to match the format
    const errors = (<ValidationErrorDetails[]> err.details).map(e => ({
        field: e.path.join("."),
        message: `Field ${e.message}`
    }));
    
    return h.response({ errors }).code(400).takeover();
};

export { handleValidationErrors };