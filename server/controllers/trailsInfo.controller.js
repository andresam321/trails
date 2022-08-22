const trailsInfo =  require("../models/trailsInfo.model")


module.exports = {

getTrailsInfo:(req,res)=>{
    trailsInfo.find({})
    .then((trailsInfo) =>{res.json(trailsInfo)})
    .catch((err)=>{console.log("Error in finding all inputs")
    res.status(400).json({message:"Something went wronng in finding all users information", err})
})
},

createTrailsInfo:(req,res)=>{
    trailsInfo.create(req.body)
    .then((createTrailInfo)=>{res.status(201).json(createTrailInfo)})
    .catch((err)=>{console.log("error in creating all info", err)
    res.status(400).json({message:"Something went wrong in creating trail info"})
})
},

getTrailsInfoById:(req,res)=>{
    trailsInfo.findOne({_id:req.params.id})
    .then((trailInfo)=>{res.json(trailInfo)})
    .catch((err)=>{console.log("error in getting this id")
    res.status(400).json({message:"Something went wrong in finding this id"})
    })
},

updateTrailsInfo:(req,res)=>{
    trailsInfo.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((updateTrailsInfo)=>res.json(updateTrailsInfo))
    .catch((err)=>{console.log("error in updating values", err)
    })
},

deleteTrailsInfo:(req,res)=>{
    trailsInfo.findByIdAndDelete({_id:req.params.id})
    .then((deleteTrailsInfo)=>res.json(deleteTrailsInfo))
    .catch((err)=>{console.log("error in deleting info")})
}







}