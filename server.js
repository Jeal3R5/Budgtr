const express = require("express");
const app = express();
const PORT = 3000;
const budget =
  //Index
  app.get("/budgets", (req, res) => {
    res.send("Hello World!");
  });

//Show
app.get("/budgets/:index", (req, res) => {});

//New
app.get("/budgets/new", (req, res) => {});

//Create
app.post("/budgets", (req, res) => {});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
