const express = require("express");
const APP = express();
const PORT = process.env.PORT || 3000;
const PATH = require("path");

APP.use(express.static("public"));
APP.use(express.static(__dirname + "/public"));
APP.use("/build", express.static("build"));
APP.use(
  "/assets",
  express.static(PATH.join(__dirname, "/node_modules/govuk-frontend/dist/govuk/assets"))
);

// APP.get("/", (req, res) => res.sendFile(__dirname + "/public/get_started.html"));
APP.get("/", (req, res) => res.sendFile(__dirname + "/public/index.html"));
APP.get("/your_chat", (req, res) => res.sendFile(__dirname + "/public/your_chat.html"));

APP.listen(PORT, () => console.warn(`Server is running on http://localhost:${PORT}`));
