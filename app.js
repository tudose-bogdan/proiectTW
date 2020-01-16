const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
  });

app.get('/location.html', function(req, res) {
    res.sendFile(__dirname + '/public/location.html');
  });  

app.get('/contact.html', function(req, res) {
    res.sendFile(__dirname + '/public/contact.html');
  });

app.get('/menu.html', function(req, res) {
    res.sendFile(__dirname + '/public/menu.html');
  });


app.get('*', function(req, res){
    res.status(404).sendFile(__dirname + '/public/404.html');
  });


app.listen(port, () => {
    console.log("Listening on port 3000");
} )