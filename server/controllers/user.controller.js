const User =  require("../models/user.model")
// const asyncHandler = require("express-async-handler")
// const generateToken = require("../config/jwt.config")
// const bcrypt = require('bcrypt')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");




module.exports = {

    // getUser:(req,res)=>{
    //     user.find({})
    //     .then((user) =>{res.json(user)})
    //     .catch((err)=>{console.log("Error in finding all users")
    //     res.status(400).json({message:"Something went wronng in finding all users information", err})
    // })
    // },

    // login: async(req,res) =>{
    //     const user = await User.findOne({email: req.body.email})
    //     if(user === null) {
    //         return res.sendStatus(400)

    //     }
    //     const correctPassword = await bcrypt.compare(req.body.password, user.password)

    //     if(!correctPassword){
    //         return res.sendStatus(400)
    //     }
    //     const userToken = jwt.sign({
    //         id: user._id
    //     }, process.env.SECRET_KEY)

    //     res
    //         .cookie("usertoken", userToken, secret, {
    //             httpOnly: true
    //         })
    //         .json({msg:"succes"})
    // },

// registerUser: asyncHandler(async(req,res) =>{
//     const {firstName,lastName, email,password, age, confirmPassword} = req.body;
//     if(!firstName || !lastName|| !email || !password ||!age ||! confirmPassword) {
//         res.status(400);
//         throw new Error("Please enter all fields")
//     }
//     const userExists = await User.findOne({email});
//     if (userExists){
//         res.status(400)
//         throw new Error("user already exist")
//     }
//     const user = await User.create({
//         firstName,
//         lastName,
//         email,
//         password,
//         age,
//         confirmPassword
//     })
//     if(user){
//         res.status(201).json({
//             _id: user._id,
//             firstName: user.firstName,
//             lastName:user.lastName,
//             email: user.email,
//             age: user.age,
//             token: generateToken(user._id)
//         })
//     }else {
//         res.status(400)
//         throw new Error("User Not found")
//     }

// }),
registerUser: (req, res)=>{
    const newUser = new User(req.body);
    console.log(newUser);

    newUser.save()
        .then(()=>{
            console.log('successful registration');
            res.json({
                message: 'Successfully Registered',
                user: newUser,
            })
            
        }).catch((err)=>res.status(400).json(err))
},

// authUser: asyncHandler(async(req,res)=>{
//     const{ email, password, confirmPassword} = req.body;
//     const user = await User.findOne({email});
//     if (user && (await user.matchPassword(password))){
//         res.json({
//             _id: user._id,
//             firstName: user.firstName,
//             lastName:user.lastName,
//             email: user.email,
//             age: user.age,
//             token: generateToken(user._id)
//         })
//         if (matchPassword) {
//             const userSession = { email: user.email } // creating user session to keep user loggedin also on refresh
//             req.session.user = userSession // attach user session to session object from express-session
        
//             return res
//               .status(200)
//               .json({ msg: 'You have logged in successfully', userSession }) // attach user session id to the response. It will be transfer in the cookies
//           } else {
//             return res.status(400).json({ msg: 'Invalid credential' })
//           }
        
        
//     } else {
//         res.status(400)
//         throw new Error("invalid email or password")
//     }
// }),
    
    // createUser:(req,res)=>{
    //     user.create(req.body)
    //     .then((createUser)=>{res.status(201).json(createUser)})
    //     .catch((err)=>{console.log("error in creating a user", err)
    //     res.status(400).json({message:"Something went wrong in creating user"})
    // })
    // },
    
    getUserById:(req,res)=>{
        User.findOne({_id:req.params.id})
        .then((user)=>{res.json(user)})
        .catch((err)=>{console.log("error in getting this id")
        res.status(400).json({message:"Something went wrong in finding this id"})
        })
    },
    
    updateUserById:(req,res)=>{
        User.findOneAndUpdate({id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((updateUser)=>res.json(updateUser))
        .catch((err)=>{console.log("error in updating values", err)
        })
    },
    
    deleteUser:(req,res)=>{
        User.findByIdAndDelete({_id:req.params.id})
        .then((deleteUser)=>res.json(deleteUser))
        .catch((err)=>{console.log("error in deleting info")})
    },
    authUser: (req, res)=> {
        User.findOne({email: req.body.email})
        .then((user)=>{
            if(user === null){
                res.status(400).json({message:'Invalid Login'})
            } else{
                bcrypt.compare(req.body.password, user.password)
                    .then((isPasswordValid)=>{
                        if(isPasswordValid === true) {
                            console.log('Password Matches');
                            res.cookie('usertoken', 
                            jwt.sign({
                                _id: user._id,
                                // username: user.username,
                                // email: user.email,
                            },
                            process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 90000000000)
                            })
                            .json({
                                message: 'Successful Log in',
                                userLoggedIn: {
                                    username: `${user.firstName}${user.lastName}`
                                }
                            })

                        }else{
                            res.status(400).json({message:"Invalid Login"})
                        }
                    })
                    .catch((err)=>{
                        res.status(400).json({message:"Invalid Login",err})
                    })
            }
        })
        .catch((err)=>{
            res.status(400).json({message:"Invalid Login",err})
        })
    },

    getLoggedInUser(req,res){
        const decodedJWT= jwt.decode(req.cookies.usertoken, {complete:true});

        User.findById(decodedJWT.payload._id)
        .then(user=>res.json(user))
        .catch(err=>res.json(err));
    },

    logout: (req, res)=>{
        console.log('logging out!');
        res.clearCookie('usertoken');
        res.json({message:'Successful Log Out!'});
    }


















}