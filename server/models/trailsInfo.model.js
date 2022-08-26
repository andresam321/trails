const mongoose = require("mongoose")

const TrailsInfo = new mongoose.Schema(
    {
        // complete:{
        //     type:String,
        //     required:[true,"A name is required"]

        // }, 
        trailUser: {
            type:String,
            

        },
        trailName:{
            type:String,
            required:[true,"A trail is required"]
        },
        numOfTrails:{
            type:String
        },
        state:{
            type:String
        },
        city:{
            type:String
        },
        zipCode:{
            type:Number
        },
        complete:{
            type:String,
            enum:["yes","no"]
        },
        date:{
            type:String
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
      },  {timestamps:true}
)




const trailsInfo  = mongoose.model("trails", TrailsInfo)
module.exports = trailsInfo