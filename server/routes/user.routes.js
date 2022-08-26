const user = require("../controllers/user.controller")
const { authenticate } = require('../config/jwt.config');

module.exports = (app) =>{

    app.post("/api/trails/login", user.authUser)
    app.post("/api/register", user.registerUser)
    // app.post("/api/login", user.login)
    // app.get("/api/trails/users", user.getUser)
    // app.post("/api/trails/user", user.createUser)
    app.get("/api/trails/user/:id",authenticate, user.getUserById)
    app.put("/api/trails/user/:id", user.updateUserById)
    app.delete("/api/user/:id", authenticate, user.deleteUser)
    app.get("/api/current-user", user.getLoggedInUser)
    app.post("/api/logout", user.logout)
}