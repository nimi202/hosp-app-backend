const express=require("express")
const hospModel=require("../models/hospModels")

const router=express.Router()
router.post("/add",async(req,res)=>{
    let data= req.body
    let hosp=new hospModel(data)
    let result=await hosp.save()
    res.json(
        {
        status:"success"
        })
})
router.get("/view",async(req,res)=>{
    let data=await hospModel.find()
    res.json(data)
})
module.exports=router