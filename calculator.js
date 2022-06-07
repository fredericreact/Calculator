const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}));
// Body Parser is used to get the data from a post request
// urlencoded allows to get data posted from an htmlform




app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1+num2;
  res.send("result is "+result);
});

// body parser allows to access req.body
// which is the parsed version of HTTP request
// { num1: '2', num2: '3', submit: '' }


app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html")
})

app.post("/bmicalculator", function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var bmi = weight/Math.pow(height,2);
  res.send("bmi is "+bmi);
})

app.listen(port, function () {
  console.log('app listening on port 3000');
});
