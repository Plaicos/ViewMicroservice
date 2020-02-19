module.exports = (dependencies)=>{
    var { router, express } = dependencies
    var main_controller = new (require("../../app/controller/main/controller.js"))(dependencies)

    //rotas main
    router.route("/")
    .get(main_controller.view())

    router.use("/public", express.static("./src/app/static/public")) 

    return router;
}