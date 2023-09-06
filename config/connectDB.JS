const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.db);
    console.log("data base is connected");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connect;
