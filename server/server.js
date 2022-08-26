const express = require("express");
const cookieParser = require("cookie-parser")
require('dotenv').config("express")

const app = express()
const PORT = 8000
const cors = require("cors");


app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(cookieParser())
// res.cookie("mycookie", 'mydata', {httpOnly:true}).json({
//     message: "This response has a cookie"
// })
// const session = require('express-session')
// const MongoDBStore = require('connect-mongodb-session')(session) 

// const MAX_AGE = 1000 * 60 * 60 * 3 // 3hrs

// setting up connect-mongodb-session store
// const mongoDBstore = new MongoDBStore({
//   uri: process.env.DATABASE_CONNECTION_STRING,
//   collection: 'mySessions',
// })

// app.use(
//   session({
//     secret: 'a1s2d3f4g5h6',
//     name: 'session-id', // cookies name to be put in "key" field in postman
//     store: mongoDBstore,
//     cookie: {
//       maxAge: MAX_AGE, // this is when our cookies will expired and the session will not be valid anymore (user will be log out)
//       sameSite: false,
//       secure: false, // to turn on just in production
//     },
//     resave: true,
//     saveUninitialized: false,
//   })
// )


require("./config/mongoose.config");
require("./routes/trailsInfo.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))