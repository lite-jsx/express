import type { Request, Response, NextFunction } from "express";

// newer versions of `@types/express`
declare module "express-serve-static-core" {
  interface Response {
    /**
     * Renders a template or JSX component as a view.
     *
     * @param template - The template or JSX component to render.
     * @param data - Optional data to pass to the template or JSX component.
     * @returns void
     *
     * @example
     * // Render a JSX component
     * res.view(Home, { message: "Hello, World!" });
     *
     * // Render a raw template
     * res.view(h("div", null, h("h1", null, message)), { message: "Hello, World!" });
     */
    view(template: string | Function, data?: object): void;
  }
}

// older versions of `@types/express`
declare module "express" {
  interface Response {
    /**
     * Renders a template or JSX component as a view.
     *
     * @param template - The template or JSX component to render.
     * @param data - Optional data to pass to the template or JSX component.
     * @returns void
     *
     * @example
     * // Render a JSX component
     * res.view(Home, { message: "Hello, World!" });
     *
     * // Render a raw template
     * res.view(h("div", null, h("h1", null, message)), { message: "Hello, World!" });
     */
    view(template: string | Function, data?: object): void;
  }
}

declare namespace LiteJSX {
  /**
   * Middleware that uses lite-jsx to render JSX templates in an Express application.
   *
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
   *   res.view(Home, data);
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

export = LiteJSX;
