const express = require("express");
const { liteJsx } = require("../src");
const supertest = require("supertest");
const { h } = require("lite-jsx");

const app = express();
app.use(liteJsx);

const HomeComponent = ({ message }) => {
  return h("div", null, h("h1", null, message));
};

// should render component properly
{
  app.get("/home", (req, res) => {
    res.render(HomeComponent, { message: "Hello world" });
  });
  supertest(app)
    .get("/home")
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
