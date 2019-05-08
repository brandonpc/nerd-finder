//require express and path
// WHICH MEANS: npm i var express = require("express");
var express = require("express");
//TODO: Path: serving "public" folder??? (already in htmlroutes)
// var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});