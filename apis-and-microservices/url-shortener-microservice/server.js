'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
/** this project needs a db !! **/ 
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

var urlSchema = new mongoose.Schema({
  url: String,
  shorter: Number
});
var URL = mongoose.model("Url", urlSchema);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.post("/api/shorturl/new", async function (req, res) {
  // http(s)://www.example.com(/more/routes)
  if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(req.body.url)) {
    // check is valid website
            // get maximum number
        let maximumNumber = await URL.find({}).sort({ shorter: -1 }).limit(1).exec() && 0;
        let url = await URL.create({ url: req.body.url, shorter: maximumNumber });
        return res.json({ original_url: req.body.url, short_url: maximumNumber });
  } else {
    return res.json({ error: "invalid URL" });
  }
});

app.get("/api/shorturl/:shorter", async function (req, res) {
  let record = await URL.findOne({ shorter: req.params.shorter }).exec();
  return res.redirect(record.url);
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});