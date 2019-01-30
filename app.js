var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/",function(req,res){
 res.render("landing");  
});

app.listen(process.env.PORT, process.env.IP,function(){
  console.log("meal plan has started") ;
   
})