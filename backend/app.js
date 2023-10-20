const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const ReactFormDataSchema= require('./Schema')
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

app.get("/", (req, res) => {

  // res.send("Hello World!");

  res.status(200).json({
    status: 'success',
    message: 'Logged In User Information.',
    data: {
      user: {
          username: req.user.username,
      },
    },
  });
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, phonenumber,selectedmfatype,password,confirmpassword } = req.body;
    let exist = await ReactFormDataSchema.findOne({ email });
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
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
      password:hashedPassword,
      // confirmpassword
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
    // ======= normal if else cond checking
    // if (exist.password !== password) {
    //   return res.status(400).send("invalid credentials");
    // }
    // if(exist){
    //   return res.status(200).send("successfully logged in");
    // }
    // ============== password validate and token generation
  //    if (await bcrypt.compare( password, exist.password)) {
  //     const tokenPayload = {
  //       email: exist.email,
  //     }
  //     const accessToken = jwt.sign(tokenPayload, 'JWT_SECRET_KEY');
  //           res.status(201).json({
  //               status: 'success',
  //               message: 'User Logged In!',
  //               data: {
  //                 accessToken,
  //               },
  //             })}
    
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).send("server error");
  // }
  // ============
  if (await bcrypt.compare( password, exist.password),exist.username,exist.
  selectedmfatype
  ) {
    const accessToken = generateAccessToken ({email: exist.email,})
    const refreshToken = generateRefreshToken ({email: exist.email,})
    res.json ({accessToken: accessToken, refreshToken: refreshToken,username:exist.username,mfavalue:exist.selectedmfatype,phone:exist.phonenumber})
    } 
    else {
    res.status(401).send("Password Incorrect!")
    }
   }
   catch (err) {
      console.log(err);
      return res.status(500).send("server error");
    }
  } )
  let accessTokens = []
  const generateAccessToken=(email)=> {
    // return 
    const accessToken = 
    jwt.sign(email, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"}) 
    accessTokens.push(accessToken)
    return accessToken
    }
    let refreshTokens = []
   const generateRefreshToken=(email)=> {
    const refreshToken = 
    jwt.sign(email, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "20m"})
    refreshTokens.push(refreshToken)
    return refreshToken
    }
    const phonenumber=()=>{
      
    }
app.listen(PORT, () => {

  console.log(`Example app listening on port ${PORT}`);

});
