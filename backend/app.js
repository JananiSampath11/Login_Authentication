const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const ReactFormDataSchema= require('./Schema')
const auth=require("./AuthToken")
const app = express();
// const port = 5000;
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."));

app.get("/", auth, (req, res) => {

  // res.send("Hello World!");

  res.status(200).json({
    status: 'success',
    message: 'Logged In User Information.',
    data: {
      user: {
          email: req.user.email,
      },
    },
  });
});

app.post("/register", async (req, res) => {
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
      password: await bcrypt.hash(req.body.password, 12),
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
    // if (exist.password !== password) {
    //   return res.status(400).send("invalid credentials");
    // }
     if (await bcrypt.compare( password, exist.password)) {
      const tokenPayload = {
        email: exist.email,
      }
      const accessToken = jwt.sign(tokenPayload, 'SECRET');
            res.status(201).json({
                status: 'success',
                message: 'User Logged In!',
                data: {
                  accessToken,
                },
              })}
    if(exist){
      return res.status(200).send("successfully logged in");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
   });


app.listen(PORT, () => {

  console.log(`Example app listening on port ${PORT}`);

});
