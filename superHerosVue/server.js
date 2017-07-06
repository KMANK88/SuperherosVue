var express = require('express');
var bodyParser = require('body-parser');
var Superhero = require('./models/Superhero');
var mongoose = require('mongoose');
var app = express();
var port = 3000;


mongoose.connect('mongodb://localhost/superheroes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));

 app.get('/', function(req, res) {
  Superhero.find(function(err, superheroes) {
    if (err) throw err;
    res.json({ data : superheroes, message : "Heroes successfully retrieved!" })
  })
});


app.get("/:_id", function(req,res){
  Superhero.findById(req.params._id,function(err,superhero){
    if(err) throw err;
    res.json({data: superhero,message: "Hero recieved good"});
  });
});

app.post('/', function(req, res) {
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.superpower = req.body.superpower;

  superhero.save().then(function(superhero) {
    res.send(superhero);
  }, function(err) {
    res.send(err)
  })
});



var server = app.listen(port,function(){
  console.log("Listening on port", port)
})
