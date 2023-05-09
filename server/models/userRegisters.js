const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
        immutable: true
    },
    profileImage: String,
    coverImage: String,
    bio: String,
    posts: [Object]

});

userSchema.pre("save", async function(next){
    // const passwordHah = await bcrypt.hash(password, 10);
    
    this.password = await bcrypt.hash(this.password, 10);
    //console.log(`the current password is ${this.password}`);
    next();
});

const Register = new mongoose.model("RegisteredUser", userSchema);
module.exports = Register;