const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "artist": String,
        "genre": String,
        "dateOfRelease": String,
        "production": String,
        "language": String,
        "details": String,
        "streamingSite": String
    }
)
let songModel = mongoose.model("songs", schema);
module.exports = { songModel }