const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');

const User = new mongoose.Schema(
    {
        // userName:{
        //     type:String,
        //     required:[true,"An a username is required"]

        // },
        firstName:{
           type:String ,
           required:[true,"dwda"]
        },
        lastName:{
            type:String,
            required:[true,"dwda"]
            
         },
        email: {
            type:String,
            required:[true,"An email is required"]

        },
        password:{
            type:String,
            required:[true,"A password is required"]
        },
        age:{
            type:Date,
            required:[true,"dwda"]
            
        },
        // confirmPassword:{
        //     type:String
        // }



    }, {timestamps:true}
)
// User.methods.matchPassword = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

// User.pre("save", async function (next){
//     if(!this.isModified){
//         next()
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password, salt)
// })
User.virtual('confirmPassword')
    .get(()=>this._confirmPassword)
    .set((value)=>this._confirmPassword=value);

User.pre('validate', function(next){
    if(this.password !== this.confirmPassword){
        this.invalidate('confirmPassword', 'Passwords did not match, Please try again');
    }
    next();
})

User.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then((hashedPassword)=>{
            console.log('password:' +this.password);
            console.log('hashed: ' +hashedPassword);
            this.password=hashedPassword;
            next();
        })
});



const user  = mongoose.model("user", User)
module.exports = user