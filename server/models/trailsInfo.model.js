const mongoose = require("mongoose")

const TrailsInfo = new mongoose.Schema(
    {
        personName:{
            type:String,
            required:[true,"A name is required"]

        }, 
        location: {
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


    }, {timestamps:true}
)




const trailsInfo  = mongoose.model("trails", TrailsInfo)
module.exports = trailsInfo