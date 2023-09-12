const express = require("express");
const router = express.Router();

function idValidation(req, res, next) {
  let id = req.params.id;
  if (!id) {
    res.end("Error: ID not found");
    return;
  }
  id = parseInt(id);
  if (id > 0 && id % 2 == 0) {
    req.id = id;
    next();
  } else {
    res.end("Error: Invalid ID");
  }
}

router.get("/code/:id", idValidation, (req, res) => {
  res.send("Code: " + req.id);
});

router.get("/access", (req, res) => {
  res.end("Access: " + req.access);
});

router.get("/average", (req, res) => {
  let keys = Object.keys(req.query);
  let amount = keys.length;
  let total = 0;

  if (amount > 0) {
    for (let i = 0; i < amount; i++) {
      let aux = parseFloat(req.query[keys[i]]);
      if (aux) {
        total += aux;
      }
    }
    res.end(
      `<p>Quantity of values: ${amount} </p><p> Average: ${total / amount}</p>`
    );
  } else {
    res.end("No values");
    return;
  }
});
module.exports = router;
