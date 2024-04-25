const express = require("express");
const nunjucks = require("nunjucks");

const APP = express();
const PORT = process.env.PORT || 3000;
const PATH = require("path");

APP.set("view engine", "njk");

nunjucks.configure("views", {
  autoescape: true,
  express: APP,
});

// APP.use(express.static("views"));

APP.get("/", (req, res) => res.render("index"));
APP.get("/js/get_started", (req, res) => res.render("js/get_started"));
APP.get("/js/your_chat", (req, res) => res.render("js/your_chat"));
APP.get("/no-js/get_started", (req, res) => res.render("no-js/get_started"));
APP.get("/no-js/your_chat-1", (req, res) => res.render("no-js/your_chat-1"));
APP.get("/no-js/your_chat-2", (req, res) => res.render("no-js/your_chat-2"));
APP.get("/no-js/your_chat-3", (req, res) => res.render("no-js/your_chat-3"));

APP.use(express.static("public"));
APP.use(express.static(__dirname + "/public"));
APP.use("/build", express.static("build"));
APP.use(
  "/assets",
  express.static(PATH.join(__dirname, "/node_modules/govuk-frontend/dist/govuk/assets"))
);

// APP.get("/", (req, res) => res.sendFile(__dirname + "/public/get_started.html"));
// APP.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
// APP.get("/your_chat", (req, res) => res.sendFile(__dirname + "/public/your_chat.html"));

APP.listen(PORT, () => console.warn(`Server is running on http://localhost:${PORT}`));
