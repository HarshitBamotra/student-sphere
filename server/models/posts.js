const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    imageName: Object,
    postUsername: String,
    postUserProfile: Object,
    timestamp: String,
    comments: [String]

});

const Post = new mongoose.model("post", postSchema);
module.exports = Post;