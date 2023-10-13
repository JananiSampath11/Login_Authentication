const mongoose = require('mongoose');
const ReactFormDataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
      type: String,
      required: true
    },
    selectedmfatype:{
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    confirmpassword: {
      type: String,
      required: true
    },
});
// const User = mongoose.model('User', ReactFormDataSchema);
// module.exports = User;
module.exports = mongoose.model('User', ReactFormDataSchema);