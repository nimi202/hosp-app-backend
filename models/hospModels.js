
const mongoose = require("mongoose")
const hospSchema=new mongoose.Schema(
    {
        hospitalname:String,
        doctorname:String,
        appointmenttime:String,
        appointmetdate:String
    }
)
module.exports=mongoose.model("hosp",hospSchema)