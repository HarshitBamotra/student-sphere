const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    imageName: Object,
    postUserId: String,
    timestamp: String,
    comments: [String]

});

const Post = new mongoose.model("post", postSchema);
module.exports = Post;