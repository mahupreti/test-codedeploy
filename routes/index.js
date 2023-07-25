const controllers = require("../modules/index") 

//routes
module.exports =(app) => {
    app.post("/create", controllers.create);
    app.get("/list", controllers.list);
}
