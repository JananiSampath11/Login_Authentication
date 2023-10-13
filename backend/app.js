const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ReactFormDataSchema= require('./Schema')
// const bcrypt=require("bcryptjs");
// const jwt = require("jsonwebtoken")
// const JWT_SECRET="hdsjhcsjdghc3fdsgc()g4dhfcgdshvfcdsgb7dfxdsdbh?bhjhj";
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://jananisambath11:JwLr9eV5E3bAg5Hi@cluster0.eqzm8f8.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."));

app.get("/", (req, res) => {

  res.send("Hello World!");

});

app.post("/register", async (req, res) => {
  // const encryptedPassword=await bcrypt.hash(password,10);
  try {
    const { username, email, phonenumber,selectedmfatype,password,confirmpassword  } = req.body;
    let exist = await ReactFormDataSchema.findOne({ email });
    if (exist) {
      return res.status(400).send("user Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("passwords are not matched");
    }
    let formData = new ReactFormDataSchema({
      username,
      email,
      selectedmfatype,
      phonenumber,
      password,
      confirmpassword
    });
    await formData .save();
    res.status(200).send("Registered Successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal server error");
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await ReactFormDataSchema.findOne({ email });
    if (!exist) {
      return res.status(400).send("user not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("invalid credentials");
    }
    if(exist){
      return res.status(200).send("successfully logged in");
    }
    // let payload = {
    //   user: {
    //     id: exist.id,
    //   },
    // };
    // jwt.sign(payload, "jwtsecret", { expiresIn: 3600000 }, (err, token) => {
    //   if (err) throw err;
    //   return res.json(token);
    // });
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
   });


app.listen(port, () => {

  console.log(`Example app listening on port ${port}`);

});
