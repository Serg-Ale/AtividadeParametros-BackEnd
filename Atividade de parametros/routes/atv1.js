const express = require("express");
const router = express.Router();

//////////////////////////////////////////////////
//////////////       ex 01       /////////////////
//////////////////////////////////////////////////
router.get("/a", (req, res) => {
  res.send("<a href='/atv1/b'>Go to b</a>");
});

router.get("/b", (req, res) => {
  res.send("<a href='/atv1/a'>Go to a</a>");
});

//////////////////////////////////////////////////
//////////////       ex 02       /////////////////
//////////////////////////////////////////////////
let lastRoute = "a";
router.get("/", (req, res) => {
  if (lastRoute == "a") {
    res.redirect("/atv1/b");
    lastRoute = "b";
  } else {
    res.redirect("/atv1/a");
    lastRoute = "a";
  }
});

module.exports = router;
