const user = require("../controllers/user.controller")

module.exports = (app) =>{

    app.get("/api/users", user.getUser)
    app.post("/api/user", user.createUser)
    app.get("/api/user/:id", user.getUserById)
    app.put("/api/user/:id", user.updateUserById)
    app.delete("/api/user/:id", user.deleteUser)
}