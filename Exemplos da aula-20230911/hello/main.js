const http = require("http")

let contador = 0;
const server = http.createServer(function(req, res) {
    contador++;
    console.log(contador, req.url)
    let html = `
        <!doctype html5>
        <html>
            <head><title>Meu site</title></head>
            <body>
                <h1 style="background-color: yellow">Ola Mundo!</h1>
                <p>Acesso n. ` + contador + `</p>
                Voce acessou: ` + req.url + `
            </body>

    `
    res.end(html)
})

server.listen(3001, () => {
    console.log("Funcionando...")
})