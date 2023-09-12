const express = require('express')
const app = express()

let produtos = [
    {nome:"Mouse", quantidade:23, preco:10},
    {nome:"Teclado", quantidade:300, preco:100},

]

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.redirect("form.html")
})

app.post("/save", (req, res) => {
    let {nome, quantidade, preco} = req.body
    produtos.push(req.body)
    res.end("Recebido: " + nome + ", " + 
                           quantidade + ", " +
                           preco)

})

app.get("/list", (req, res) => {
    let html = ""
    for (let i = 0; i < produtos.length; i++) {
        html += "<p><a href='/mostra/" + produtos[i].nome + "'>" + produtos[i].nome + "</a>, " + 
            produtos[i].quantidade + ", " + 
            produtos[i].preco + "</p>"
    }
    if (produtos.length == 0)
        html = "Lista vazia"
    res.end(html)
})

app.get("/mostra/:nome", (req, res) => {
    if (req.params.nome) {
        let achou = false
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome == req.params.nome) {
                achou = true
                res.end("<p>" + produtos[i].nome + ", " + 
                    produtos[i].quantidade + ", " + 
                    produtos[i].preco + "</p>")
            }
        }
        if (!achou) {
            res.end("Pruduto nao encontrado")
        }
    } else {
        res.end("Produto nao informado")
    }
})

app.listen(3000, () => {
    console.log("Working...")
})



