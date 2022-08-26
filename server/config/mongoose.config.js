const mongoose = require("mongoose");


const mongoURI = "mongodb://localhost/trails"

mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log(`connected to the db ${mongoURI}`))
.catch((err)=> console.log("Error in connecting to DB", err))