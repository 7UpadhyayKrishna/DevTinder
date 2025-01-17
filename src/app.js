const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("hello f   ro   m the ser   ver");
});

app.listen(3000, () => {
  console.log("serv     er is   listen");
});
