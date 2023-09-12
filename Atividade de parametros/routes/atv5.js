const express = require("express");
const router = express.Router();

router.get("/:operacao", (req, res) => {
  let { x, y } = req.query;
  if (!x || !y) {
    res.send("Pass the values of x and y");
    return;
  }
  x = parseInt(x);
  y = parseInt(y);

  let operacao = req.params.operacao;
  let result = 0;
  let sinal = "";
  switch (operacao) {
    case "soma":
      result = x + y;
      sinal = "+";
      break;
    case "subtracao":
      result = x - y;
      sinal = "-";
      break;
    case "multiplicacao":
      result = x * y;
      sinal = "*";
      break;
    case "divisao":
      result = x / y;
      sinal = "/";
      break;
    default:
      res.end("Invalid!");
      return;
  }
  res.end(`${x} ${sinal} ${y} = ${result}`);
});
module.exports = router;
