var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = require("./models");

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultlayour: "main"
}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: ""
});

connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadID);
});

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});