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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public")); //serves public folder
require("./routes/routes")(app, io); //imported function sets up routes and io logic;

// Start the server
http.listen(PORT, function() {
  console.log(`Now listening on port ${PORT}`);
});
