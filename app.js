const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const {songModel} = require("./models/songs")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aswinkrishnam16:aswinkrishnam@cluster0.2iu51vz.mongodb.net/songapp?retryWrites=true&w=majority&appName=Cluster0")



app.post("/", (req, res) => {
    let input=req.body
    let song = new songModel(input)
    song.save()
    console.log(song)
    res.json({"status":"success"})
})

app.post("/viewall", (req, res) => {
    songModel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/search", (req, res) => {
    let input=req.body
    songModel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/delete",(req,res)=>{
    let input=req.body
    songModel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        ()=>{
            res.json({"status":"failure"})
        }
    )
})

app.listen(8080, () => {
    console.log("server started")
})