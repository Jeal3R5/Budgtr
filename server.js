const express = require("express");
const app = express();
const PORT = 3000;
const budgets = require("./models/budget.js");
const morgan = require("morgan");


///////////////// Middleware /////////

app.use( express.urlencoded({extended: false }))
app.use(express.static('public'));
app.use(morgan("tiny"))



/////////////// Routes ///////////////


//Index
  app.get("/budgets", (req, res) => {
    res.render("index.ejs", {
      budgets: budgets,
    });
  });
  


  //New
  app.get("/budgets/new", (req, res) => {
    res.render('new.ejs');
  });

   //Create
  app.post("/budgets", (req, res) => {
    budgets.unshift(req.body)
    res.redirect("/budgets")
  });



  
  
  
  
  
  
  
  
  
  
   //Show
  app.get("/budgets/:id", (req, res) => {
    res.render('show.ejs', {
      entry: budgets[req.params.id]
    });
  });
  
  
  
  app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
  });