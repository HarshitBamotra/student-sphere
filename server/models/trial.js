const mongoose = require("mongoose");

const trialSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    imageName: Object

});

const Trial = new mongoose.model("trail", trialSchema);
module.exports = Trial;