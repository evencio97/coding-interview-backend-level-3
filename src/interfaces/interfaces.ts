import { Request, ResponseToolkit } from "@hapi/hapi";
import { Types } from "mongoose";


interface ValidationErrorDetails {
  message: string,
  path: string[],
  type: string,
  context: { label: string, key: string }
}

enum RouteMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE"
}

type RouteHandler = (request: Request, h: ResponseToolkit) => Promise<any>;

interface IItem {
  _id: Types.ObjectId;
  id: number;
  name: string;
  price: number;
}

export {
  ValidationErrorDetails,
  RouteMethod,
  RouteHandler,
  IItem
}