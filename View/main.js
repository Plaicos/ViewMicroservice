async function initialize() {
    //dependencies
    var dependencies = await new (require("./src/config/dependencies/Dependencies"))().build()
    var { initialize } = require("./src/config/GRPC/GRPC")
    require("marko/node-require");
    await initialize(dependencies)
}

initialize()