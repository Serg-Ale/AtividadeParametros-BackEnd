const express = require("express");
const router = express.Router();

router.get("/page", (req, res) => res.redirect("/page.html"));

router.post("/login", (req, res) => {
  let { user, password } = req.body;

  let token = user + user;
  if (token == password) {
    res.end("Access authorized");
  } else {
    res.end("Access denied");
  }
});

module.exports = router;