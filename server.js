const express = require("express");
const exphbs = require("express-handlebars");


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Handlebars
app.engine("exhbs", exphbs({ defaultLayout: "main" }));
app.set("view engine", "exhbs");

//routes
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
});