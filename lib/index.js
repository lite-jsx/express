/**
 * Middleware that uses lite-jsx to render JSX templates in an Express application.
 *
 * @param {import("express").Request} req - The Express request object.
 * @param {import("express").Response} res - The Express response object.
 * @param {import("express").NextFunction} next - The Express next function.
 * @returns {void}
 */
const liteJsx = (req, res, next) => {
  res.render = function (template, data) {
    try {
      const html =
        "<!DOCTYPE html>" + template({ ...data, $req: req, $res: res });
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.status(200).send(html);
    } catch (err) {
      this.req.next(err);
    }
  }.bind(res);
  next();
};

module.exports = { liteJsx };
