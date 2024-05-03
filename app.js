const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));

app.use("/", express.static("./node_modules/static/"))

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("pagina_principal")
});

app.get("/aula", function (req, res) {
  res.render("aula");
});

app.get("/pagina_principal", function (req, res) {
  res.render("pagina_principal");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
