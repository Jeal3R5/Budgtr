const express = require("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;
const budgets = "models/budget.js";



///////////////// Middleware /////////

app.use(express.static('public'))








/////////////// Routes ///////////////


//Index
  app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
      budgets: budgets,
    });
  });



 //Show
app.get("/budgets/:index", (req, res) => {
  res.render('show.ejs');
});


//New
app.get("/budgets/new", (req, res) => {
  res.render('new.ejs');
});





// //Create
// app.POST("/budgets", (req, res) => {});

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
