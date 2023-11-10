import express from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/HttpStatusCodes.js";
import CustomError from "../utils/CustomError.js";

/**
 * @param {express.ErrorRequestHandler} error
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const errorHandler = (error, req, res, next) => {
  console.log(error);

  if (error instanceof CustomError === false) {
    return res
      .status(INTERNAL_SERVER_ERROR)
      .send({ message: "Internal Server Error" });
  }

  return res.status(error.statusCode).send({ message: error.message });
};

export default errorHandler;
