const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.use("/", express.static("./node_modules/static/"))

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("tela_inicio")
});

app.get("/aula", function (req, res) {
  res.render("aula");
});

app.get("/pagina_principal", function (req, res) {
  res.render("pagina_principal");
});

app.get("/aula1", function (req, res) {
  res.render("aula1");
});

app.get("/pagina_principal_professor", function (req, res) {
  res.render("pagina_principal_professor");
});

app.get("/aula_professor", function (req, res) {
  res.render("aula_professor");
});

app.get("/aula1_professor", function (req, res) {
  res.render("aula1_professor");
});

app.use("/", express.static("./views"))
app.post('/criar_arquivo', (req, res) => {
  fs.writeFile('./views/novo_arquivo.txt', 'Conteúdo do arquivo', err => {
      if (err) throw err;
      console.log('Arquivo criado com sucesso!');
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
