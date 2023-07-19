/**
 * Middleware that uses lite-jsx to render JSX templates in an Express application.
 *
 * @param {import("express").Request} req - The Express request object.
 * @param {import("express").Response} res - The Express response object.
 * @param {import("express").NextFunction} next - The Express next function.
 * @returns {void}
 */
const liteJsx = (req, res, next) => {
  res.view = function (template, data) {
    if (typeof template === "string") {
      res.status(200).send(template);
      return;
    }
    try {
      const html =
        "<!DOCTYPE html>" + template({ ...data, $req: req, $res: res });
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(html);
      return;
    } catch (err) {
      this.req.next(err);
      return;
    }
  }.bind(res);

  next();
};

module.exports = { liteJsx };
