const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const hospRoute=require("./controllers/hospRouter")

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://nimi:nimi@cluster0.ek3ai0r.mongodb.net/hospdb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/hosp",hospRoute)
app.listen(3001,()=>{
    console.log("Server running")
})