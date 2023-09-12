const express = require("express");
const app = express();

// Ex 09
app.contador = 0;
app.use((req, res, next) => {
  app.contador++;
  req.access = app.contador;
  next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const atv1Router = require("./routes/atv1");
app.use("/atv1", atv1Router);

const atv3Router = require("./routes/atv3");
app.use("/atv3", atv3Router);

const atv5Router = require("./routes/atv5");
app.use("/operacao", atv5Router);

const atv7Router = require("./routes/atv7");
app.use(atv7Router);

const atv8Router = require("./routes/atv8");
app.use("/atv8", atv8Router);

app.listen(8070, () => {
  console.log("listening on port 8070");
});
