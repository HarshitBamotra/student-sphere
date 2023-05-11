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
    profileImage: Object,
    coverImage: Object,
    bio: String,
    posts: [Object]

});

userSchema.pre("save", async function(next){
    
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const Register = new mongoose.model("RegisteredUser", userSchema);
module.exports = Register;