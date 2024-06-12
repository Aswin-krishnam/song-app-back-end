const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const {songModel} = require("./models/songs")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aswinkrishnam16:aswinkrishnam@cluster0.2iu51vz.mongodb.net/songapp?retryWrites=true&w=majority&appName=Cluster0")



