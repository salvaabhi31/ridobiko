var express             = require("express"),
    bodyParser          = require("body-parser"),
    app                 = express();
    

app.set("view engine" , "ejs");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/public"));




app.get("/",function(req,res){
  res.render("landing"); 
});































app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("Bike has started"); 
});