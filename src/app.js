const express = require("express");

const app = express();

app.post("/test", (req, res) => {
  res.send({ firstname: "krishna", lastname: "upadhyay" });
});

app.delete("/test", (req, res) => {
  res.send("deleted tulshi");
});

app.use("/test", (req, res) => {
  res.send("hello from the server test");
});
app.use("/gf", (req, res) => {
  res.send("hello from the server");
});
// app.get("/test", (req, res) => {
//   res.send({ firstname: "krishna", lastname: "upadhyay" });
// });
app.listen(3000, () => {
  console.log("serv     er is   listen");
});
