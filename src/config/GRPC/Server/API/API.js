module.exports = class API {
    constructor(dependencies) {
        if (!dependencies) {
            console.log("GRPC API FACTORY ERROR: NO DEPENDENCIES, ABORTING PROCESS...")
            process.abort()
        }

        this.dependencies = dependencies
        this.Controller = require("../../../../../src/app/Controller/Controller.js")
    }

    async build() {
        let { dependencies, Controller } = this
        Controller = new Controller(dependencies)
        await Controller.initialize()

        let api = {
           get_template: Controller.get_template(),
           get_public_static_file: Controller.get_public_static_file()
        }
        return Object.freeze(api)
    }

}