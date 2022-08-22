const user =  require("../models/user.model")

module.exports = {

    getUser:(req,res)=>{
        user.find({})
        .then((user) =>{res.json(user)})
        .catch((err)=>{console.log("Error in finding all users")
        res.status(400).json({message:"Something went wronng in finding all users information", err})
    })
    },
    
    createUser:(req,res)=>{
        user.create(req.body)
        .then((createUser)=>{res.status(201).json(createUser)})
        .catch((err)=>{console.log("error in creating a user", err)
        res.status(400).json({message:"Something went wrong in creating user"})
    })
    },
    
    getUserById:(req,res)=>{
        user.findOne({_id:req.params.id})
        .then((user)=>{res.json(user)})
        .catch((err)=>{console.log("error in getting this id")
        res.status(400).json({message:"Something went wrong in finding this id"})
        })
    },
    
    updateUserById:(req,res)=>{
        user.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updateUser)=>res.json(updateUser))
        .catch((err)=>{console.log("error in updating values", err)
        })
    },
    
    deleteUser:(req,res)=>{
        user.findByIdAndDelete({_id:req.params.id})
        .then((deleteUser)=>res.json(deleteUser))
        .catch((err)=>{console.log("error in deleting info")})
    }



















}