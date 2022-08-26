const trailsInfo = require("../controllers/trailsInfo.controller")

module.exports = (app) =>{

    app.get("/api/trails", trailsInfo.getTrailsInfo)
    app.post("/api/trails", trailsInfo.createTrails)
    app.get("/api/trail/:id", trailsInfo.getTrailsInfoById)
    app.put("/api/trail/:id", trailsInfo.updateTrailsInfo)
    app.delete("/api/trail/:id", trailsInfo.deleteTrailsInfo)
    app.get("/api/trails-by-user/:username", trailsInfo.getTrailsInfoByUser)
}