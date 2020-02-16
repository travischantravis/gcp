const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

// Public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

exports.helloGET = (req, res) => {
  res.send("Hello World Trav!");
};
