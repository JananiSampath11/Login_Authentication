// const express = require("express");
// const mongoose = require("mongoose");
// const Registeruser = require("./model");
// const jwt = require("jsonwebtoken");
// const middleware = require("./middleware");
// const cors = require("cors");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Helloworld");
// });
// mongoose.set("strictQuery", false);
// mongoose
//   .connect("mongodb+srv://jananisampath:jananisampath11@details.wweiknr.mongodb.net/test", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected..."));
// app.use(cors({ origin: "*" }));
// app.use(express.json());






// app.listen(5000, () => {
//   console.log(`Server is running on port`);
// });


// ==========
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors({ origin: "*" }));
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
