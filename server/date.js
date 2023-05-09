module.exports.getDOJ = function() {
    const today = new Date();
    const options = {
        month: "long",
        year: "numeric"
    };

    const day = today.toLocaleDateString("en-US", options);
    return day;
};

module.exports.getTimestamp = function() {
    const time = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    const timestamp = time.toLocaleDateString("en-US", options);
    return timestamp;

};