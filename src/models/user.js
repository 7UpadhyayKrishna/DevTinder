const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
var validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    emailId: {
      type: String,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
