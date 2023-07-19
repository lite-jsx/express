import { NextFunction, Request, Response } from "express";

declare namespace LiteJSX {
  /**
   * Middleware that uses lite-jsx to render JSX templates in an Express application.
   *
   * @param req The Express request object.
   * @param res The Express response object.
   * @param next The Express next function.
   * @returns {void}
   * @example
   * const express = require("express");
   * const app = express();
   * const { liteJsx } = require("@lite-jsx/express");
   * const Home = require("./home");
   *
   * // Use the middleware to enable lite-jsx rendering in the Express app.
   * app.use(liteJsx);
   *
   * app.get("/", (req, res) => {
   *   const data = { message: "Hello, World!" };
   *   res.render(Home, data);
   * });
   *
   * app.listen(3000, () => {
   *   console.log("Example app listening on port 3000!");
   * });
   */
  export function liteJsx(
    req: Request,
    res: Response,
    next: NextFunction
  ): void;
}
