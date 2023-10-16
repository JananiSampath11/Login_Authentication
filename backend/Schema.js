const mongoose = require('mongoose');
const ReactFormDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"Username is required"],
},
email: {
    type: String,
    required: [true,"Email address is required"],
    unique: true,
},
phonenumber: {
  type: String,
  required: [true,"Phonenumber is required"],
  unique: true,
},
selectedmfatype:{
  type: String,
  required: [true,"Select MFA"],
},
password: {
  type: String,
  required: [true,"Password is required"],
},
confirmpassword: {
  type: String,
  required: [true,""],
},
});
// userSchema.pre("save", async function (next) {
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
//   });
module.exports = mongoose.model('User', ReactFormDataSchema);
// const mongoose = require('mongoose');
// // const bcrypt = require("bcryptjs");
// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: [true,"Username is required"],
//     },
//     email: {
//         type: String,
//         required: [true,"Email address is required"],
//         unique: true,
//     },
//     phonenumber: {
//       type: String,
//       required: [true,"Phonenumber is required"],
//       unique: true,
//     },
//     selectedmfatype:{
//       type: String,
//       required: [true,"Select MFA"],
//     },
//     password: {
//       type: String,
//       required: [true,"Password is required"],
//     },
//     confirmpassword: {
//       type: String,
//       required: [true,""],
//     },
// });
// // userSchema.pre("save", async function () {
// //   this.password = await bcrypt.hash(this.password, 12);
// // });
// module.exports = mongoose.model('User', userSchema);