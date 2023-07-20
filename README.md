# Lite JSX - Express Middleware

[![License][license-image]][license-url]
[![Build Actions][build-image]][build-url]
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]

Lite JSX is a lightweight JavaScript library that allows you to create and manipulate JSX elements using only vanilla JavaScript.

---

## Installation

You can install Lite JSX via npm:

```bash
npm install @lite-jsx/core @lite-jsx/express
```

---

## Using Lite JSX with Express

To use Lite JSX with Express, you can create a middleware that overrides the default `res.render` function to add support for JSX templates. Here's an example:

```js
const express = require("express");
const { liteJsx } = require("@lite-jsx/express");
const Home = require("./home");

const app = express();

// Use the middleware to enable Lite JSX rendering in the Express app.
app.use(liteJsx);

// Render the component using Express.
app.get("/", (req, res) => {
  const data = { message: "Hello, world!" };
  // the render method now is override to use jsx components
  res.render(Home, data);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
```

To enable Lite JSX in our Express app, we're using the `liteJsx` middleware, which overrides the default `res.render` function to add support for JSX templates.

This way, we can pass a JSX component to `res.render` and it will be rendered as HTML.

And that's it! With these few lines of code, you can start using Lite JSX with Express to create powerful, dynamic web applications.

---

## Contributing

If you'd like to contribute to Lite JSX, please feel free to submit a pull request or open an issue on GitHub:

https://github.com/lite-jsx/express

## License

Lite JSX is licensed under the [MIT License](https://github.com/danprates/lite-jsx/blob/master/LICENSE).

[npm-url]: https://npmjs.org/package/@lite-jsx/express
[npm-image]: https://img.shields.io/npm/v/lite-jsx.svg?style=for-the-badge
[downloads-image]: https://img.shields.io/npm/dm/@lite-jsx/express.svg?style=for-the-badge
[build-image]: https://img.shields.io/github/actions/workflow/status/lite-jsx/express/publish.yml?style=for-the-badge
[build-url]: https://github.com/lite-jsx/express/actions/workflows/publish.yml
[license-image]: https://img.shields.io/github/license/lite-jsx/express?style=for-the-badge
[license-url]: https://github.com/lite-jsx/express/blob/master/LICENSE
