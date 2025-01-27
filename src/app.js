const express = require("express");
const connectdb = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json()); //midleware for reading jason file

app.post("/signup", async (req, res) => {
  console.log(req.body);

  // const user = new User({
  //   firstName: "krishna2",
  //   lastName: "upadhyay2",
  //   emailId: "krishnaupadhyay207@gmail.com",
  //   password: "Ram@161003",
  // });
  // try {
  //   await user.save();
  //   res.send("data saved");
  // } catch (err) {
  //   res.status(400).send("data not saved");
  // }
});

connectdb()
  .then(() => {
    console.log("database is connected");
    app.listen(3000, () => {
      console.log("server is listen");
    });
  })
  .catch((err) => {
    console.error("database is not connected");
  });
