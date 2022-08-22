const express = require("express");

const app = express()
const PORT = 8000
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:"http://localhost:3000"}));

require("./config/mongoose.config");
require("./routes/trailsInfo.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT,()=> console.log(`Server is up and running on ${PORT}`))