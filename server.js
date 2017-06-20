// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;//port from environment variables, default to 3000
mongoose.Promise = Promise;//changes mongoose asynchronous protocol from bluebird to native promises
var app = express();
const http = require('http').Server(app);//instantiates node-native http server based on app
const io = require('socket.io')(http);//mounts io protocol on native server
var db = process.env.MONGODB_URI || "mongodb://localhost/frontscrape"; //sets up database from environment variable, defaults to mongodb localhost
//SSL Certificate for HTTPS
var fs = require('fs'),
    express = require('express'),
    https = require('https');

var https_options = {
  key: fs.readFileSync(__dirname +'/ssl-key.pem'),
  cert: fs.readFileSync(__dirname +'/ssl-cert.pem')
};
var HOST = "localhost";

// Connect mongoose to our database
mongoose.connect(db, err=>{
  // Log any errors connecting with mongoose
  if (err) {
    console.error(`mongoose connection error: ${err}`);
  }
  // Or log a success message
  else {
    console.log(`mongoose connection successful`);
  }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public")); //serves public folder
require("./routes/routes")(app, io); //imported function sets up routes and io logic;

// Start the server
var server = https.createServer(https_options, app)
                  .listen(PORT, HOST);

console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');
console.log('HTTPS Server listening @ https://%s:%s', HOST, PORT);
console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');