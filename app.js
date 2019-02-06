var express    = require("express"),
    app        = express(),
    ejs        = require("ejs"),
    bodyParser = require('body-parser'),
    mongoose   = require("mongoose");

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//DataBase
mongoose.connect("mongodb://localhost/mealplann_v1")
app.use(bodyParser.urlencoded({extended: true}));
//Routes

//Required Routes
var commentRotes   = require("./routes/comments"),
    mealplanRoutes = require("./routes/mealplans"),
    indexRoutes    = require("./routes/index");
    

app.get("/",function(req,res){
 res.render("landing.ejs");  
});


app.get("/mealplans", function(req,res){
    res.render("mealplans/index.ejs")
})

app.listen(process.env.PORT, process.env.IP,function(){
  console.log("meal plan has started") ;
   
});