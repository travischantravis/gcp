const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");

// Public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
