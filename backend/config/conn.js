const mongoose = require("mongoose");

// connect to DB

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://raed:raed@cluster0.hglwenf.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected To the database ✅");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect;
