const express = require("express");
const connectdb = require("./config/database");
const User = require("./models/user");
const app = express();
const validateSignUpData = require("./utils/validation");

app.use(express.json()); //middleware for reading jason file

//API for updating user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data);
    res.send("updated");
  } catch (err) {
    res.status(400).send("somthing went wrong");
  }
});

//API for deleting user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    if (user) {
      res.send("deleted");
    } else {
      res.send("user not found");
    }
  } catch (err) {
    res.status(400).send("somthing went wrong");
  }
});

//API for geting all user on the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//API for geting user on the database by emailId
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 3) {
      res.send(user);
      // console.log(user);
    } else {
      res.status(400).send("user not found");
    }
  } catch (err) {
    res.status(400).send("somthing went wrong");
  }
});

//API for insert user on the database
app.post("/signup", async (req, res) => {
  // console.log(req.body);

  try {
    //validate
    validateSignUpData(req);

    const user = new User(req.body);
    await user.save();
    res.send("data saved");
  } catch (err) {
    res.status(400).send("data not saved : " + err.message);
  }
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
