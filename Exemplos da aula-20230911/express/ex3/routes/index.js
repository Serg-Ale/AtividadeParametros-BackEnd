var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Ola Mundo' });
  res.end("<h1>Ola Mundo!</h1>")
});


router.get("/teste", function (req, res) {
  res.end("<h1>Pagina de teste</h1>")
})

router.get("/ola", (req, res) => {
  let nome = req.query.nome || "Anonimo"

  let html =`<h3>Ola `+ nome + `</h3>
  <a href='/teste'>Pagina de teste</a>
  
  <a href='/item1/Joao'>Link 1</a>
  <a href='/item2/Maria'>Link 2</a>
  <a href='/item3/Lucia'>Link 3</a>
  
  `
  res.end(html)
})

router.get("/redirect", (req, res) => {
    res.redirect("/ola")  
})

router.post("/save", (req, res) => {
  //salvar os dados

})

router.get("/mostrar/:nome", (req, res) => {
  res.end("2: Ola: " + req.params.nome + " " + req.query.sobrenome)
})
router.get("/:tipo/:nome", (req, res)=> {
  res.end("1: <h1>" + req.params.tipo + " = " + req.params.nome + "</h1>")
})


module.exports = router;
