const trailsInfo =  require("../models/trailsInfo.model")
const User = require("../models/user.model")
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.JWT_SECRET


module.exports = {

getTrailsInfo:(req,res)=>{
    trailsInfo.find({}).populate('createdBy', 'firstName')
    .then((trailsInfo) =>{res.json(trailsInfo)})
    .catch((err)=>{console.log("Error in finding all inputs")
    res.status(400).json({message:"Something went wronng in finding all users information", err})
})
},

// createTrails: (req, res) => {
//     const user = jwt.verify(req.cookies.userToken, SECRET);
//     trailsInfo.create({ ...req.body, createdBy: user._id })
//       .then((newTrail) => {
//         res.status(201).json(newTrail);
//       })
//       .catch((err) => {
//         console.log('ERROR IN create trails', err);
//         res
//           .status(400)
//           .json({ message: 'something went wrong in create trails', errors: err.errors });
//       });
//   },
createTrails:(req,res)=>{
    trailsInfo.create(req.body)
    .then((newTrail)=>{res.status(201).json(newTrail)})
    .catch((err)=>{console.log("error in creating trails", err)
    res.status(400).json({message:"Something went wrong in creating all trail inputs"})
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
    .catch((err)=>{console.log("error in deleting info",err)})
},
getTrailsInfoByUser:(req,res)=>{
    User.findOne({username:req.params.username}).then((user)=>{
    trailsInfo.find({createdBy:user._id})
    .populate('createdBy', "firstName")
    .then((trailInfo)=>{res.json(trailInfo)
    })
    .catch((err)=>{console.log("error in getting this id",err)
    res.status(400).json({message:"Something went wrong in finding this id"})
    })
    .catch((err)=>{console.log("error in getting this id",err)
    res.status(400).json({message:"Something went wrong in finding this id"})
    })
})
},







}