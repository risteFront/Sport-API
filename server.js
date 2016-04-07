// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override');
    var cors  = require('cors')
    var bodyParser = require('body-parser');
    var request     =require('request');// simulate DELETE and PUT (express4)

    // configuration =================
    
    app.use(bodyParser());
    app.use(cors());
    app.get('/data', function(req, res){

    });
    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

   //alow cross origin


    // listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");