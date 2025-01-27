const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect(
    "mongodb+srv://krishnaupadhyay207:Ram%40161003@krishnacluster.u1jly.mongodb.net/DevTinder"
  );
};

module.exports = connectdb;
