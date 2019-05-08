const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);

app.listen(port, () => {
  console.log(`The proxy service is available on port ${port}`);
});
