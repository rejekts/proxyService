const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("../database/knex.js");

const port = process.env.PORT || 5000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.get("/getAll/:id", (req, res) => {
  console.log(req.params, "hitting endpoint");
  db.retrieveProxies(req.params)
    .then(proxies => {
      console.log(proxies, "proxies from cellar");
      res.status(200).send(proxies);
    })
    .catch(err => {
      console.log("cellar must be flooded");
      res.status(401).send(err);
    });
});

app.listen(port, () => {
  console.log(`The proxy service is available on port ${port}`);
});
