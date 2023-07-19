const express = require("express");
const { liteJsx } = require("../src");
const supertest = require("supertest");
const { h } = require("lite-jsx");

const app = express();
app.use(liteJsx);

// should render complex component properly
{
  const ComplexComponent = ({ message }) => {
    return h("div", null, h("h1", null, message));
  };
  app.get("/complex", (req, res) => {
    res.render(ComplexComponent, { message: "Hello world" });
  });
  supertest(app)
    .get("/complex")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200, "<!DOCTYPE html><div><h1>Hello world</h1></div>")
    .end(function (err, res) {
      if (err) throw err;
    });
}

// should render simple component properly
{
  const SimpleComponent = () => {
    return h("h1", null, "Hello world");
  };
  app.get("/simple", (req, res) => {
    res.render(SimpleComponent);
  });
  supertest(app)
    .get("/simple")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200, "<!DOCTYPE html><h1>Hello world</h1>")
    .end(function (err, res) {
      if (err) throw err;
    });
}

// should render html as string properly
{
  app.get("/html", (req, res) => {
    res.render("<h1>Hello world</h1>");
  });
  supertest(app)
    .get("/html")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200, "<h1>Hello world</h1>")
    .end(function (err, res) {
      if (err) throw err;
    });
}
