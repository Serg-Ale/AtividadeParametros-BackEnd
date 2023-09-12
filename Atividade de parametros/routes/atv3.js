const express = require("express");
const router = express.Router();

// This function will reverse the text
function reverseString(str) {
  return str.split("").reverse().join("");
}

// This function will return our HTML
function returnHTML(original, reversed) {
  return `<p>Original String: ${original}</p><p>Reversed String: ${reversed}</p>`;
}

// This is a middleware, that will validade the string and return the HTML
function validateAndSend(req, res) {
  let text = req.query.text || req.params.text || "";
  if (text == "") {
    res.end("Invalid text!");
    return;
  }
  res.end(returnHTML(text, reverseString(text)));
}

// This is our routes
router.get("/reverse", validateAndSend);
router.get("/reverse/:text", validateAndSend);

module.exports = router;
