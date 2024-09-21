import { Request, ResponseToolkit } from "@hapi/hapi";


const postResponse = (request: Request, h: ResponseToolkit) => {
    const data = [
        `[${(new Date()).toUTCString()}]`,
        request.method.toUpperCase(),
        request.path
    ];
    const response = <any>request.response;
    if (response.statusCode)
        data.push(response.statusCode);
    else if (response.isBoom && response.output.statusCode)
        data.push(response.output.statusCode);

    console.log(data.join(" "));
    
    return h.continue;
}

export { postResponse };