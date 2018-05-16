var express = require("express");
var bodyParser = require("body-parser");
//session is necessary for passport to work
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require("./config/passport");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public")); 

var db = require("./models");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//this functionality is in config
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "andirules",
    database: "hngplants_db"
});

connection.connect(function (err) {
    // if (err) {
    //     console.error("error connection: " + err.stack);
    //     return;
    // }
if (err) throw err;
    console.log("connected as id " + connection.threadID);
});

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});