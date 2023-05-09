const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dx6m1kdeg",
    api_key: "447572473738585",
    api_secret: "WjJwZB_NsKyxH5DH9ZqpGF3hm8M"
});

module.exports = cloudinary;