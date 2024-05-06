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
let fileNumber = 2;

app.post('/criar_arquivo', (req, res) => {
  let fileName = `./views/aula${fileNumber}.ejs`;

  // Verifica se o arquivo já existe
  while (fs.existsSync(fileName)) {
    console.log(`Arquivo ${fileName} já existe.`);
    fileNumber++;
    fileName = `./views/aula${fileNumber}.ejs`;
  }

  fs.writeFile(fileName, 'Conteúdo do arquivo', err => {
    if (err) throw err;
    console.log(`Arquivo ${fileName} criado com sucesso!`);
    fileNumber++;
  });
});


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
