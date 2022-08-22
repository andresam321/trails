const trailsInfo = require("../controllers/trailsInfo.controller")

module.exports = (app) =>{

    app.get("/api/trailsInputs", trailsInfo.getTrailsInfo)
    app.post("/api/trailsInputs", trailsInfo.createTrailsInfo)
    app.get("/api/trailInputs/:id", trailsInfo.getTrailsInfoById)
    app.put("/api/trailInputs/:id", trailsInfo.updateTrailsInfo)
    app.delete("/api/trailInputs/:id", trailsInfo.deleteTrailsInfo)
}