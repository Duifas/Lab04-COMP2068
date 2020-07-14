const mongoose = require('mongoose');

//Create the user Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});
//Create, instantiate and export the schema
const Users = mongoose.model("User", UserSchema);
module.exports = Users;