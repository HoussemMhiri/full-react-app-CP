const express = require("express");
const connect = require("./config/connectDB.JS");
const User = require("./model/User");
require("dotenv").config({ path: "./config/.env" });

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

connect();

//*******************POST************************** */
app.post("/post", async (req, res) => {
  const { fullName, email, photo, phone } = req.body;
  try {
    const addUsers = await User.create({ fullName, email, photo, phone });
    res.send(addUsers);
  } catch (error) {
    console.log(error);
  }
});

//*************************GET************************* */
app.get("/get", async (req, res) => {
  try {
    const getUser = await User.find();
    res.send(getUser);
  } catch (error) {
    console.log(error);
  }
});

//************************GET ONE USER************************* */

app.get("/get/:id", async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.send(getUser);
  } catch (error) {
    console.log(error);
  }
});
//********************************PUT******************************* */

app.put("/update/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
    res.send(updateUser);
  } catch (error) {
    console.log(error);
  }
});
//*********************************DELETE************************************ */

app.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("user is deleted");
  } catch (error) {
    console.log("error");
  }
});

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is rannunig on ${PORT}`)
);
