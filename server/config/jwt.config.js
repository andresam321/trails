const jwt = require("jsonwebtoken")
const secret="secret"
// module.exports.secret= secret
const authenticate = (req,res,next) =>{
    jwt.verify(req.cookies.userToken, secret,(err,payload)=>{
        if(err){
            res.status(401).json({verified:false})
        }else 
        next();
    })
}

// const generateToken = (id) =>{
//     return jwt.sign({id}, secret,{
//         expiresIn:"30d",
//     });
// };


module.exports = {
    authenticate,
    // generateToken
};