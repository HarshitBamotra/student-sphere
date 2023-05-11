const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    userProfileImage: Object,
    username: String,
    message: String,
    timestamp: String 
});

const Chat = new mongoose.model("chat", chatSchema);
module.exports = Chat;