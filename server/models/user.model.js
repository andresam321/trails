const mongoose = require("mongoose")

const User = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true,"An a username is required"]

        },
        name:{
           type:String 
        },
        lastName:{
            type:String 
         },
        email: {
            type:String,
            required:[true,"An email is required"]

        },
        password:{
            type:String,
            required:[true,"A password is required"]
        }


    }, {timestamps:true}
)




const user  = mongoose.model("user", User)
module.exports = user