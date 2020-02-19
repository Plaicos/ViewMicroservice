module.exports = ({ cookie, params, dependencies }) => {
    return new Promise(async (resolve, reject) => {
        let { actors } = dependencies
        let user = new actors.User({ dependencies, cookie })
        let system = new actors.System(dependencies)

        try {
            let data = {
                system: {
                    origins: await system.get_origins(),
                    applications: await system.get_applications(),
                    locations: await system.get_locations(),
                    made_in: await system.get_madeIn(),
                    types: await system.get_post_types()
                }
            }
        
            let response = {
                template: require("../../../templates/marketplace/marketplace.marko"),
                data: data
            }

            resolve(response);

        } catch (erro) {
            erro = {
                message: `ERROR GETTING THE MARKETPLACE TEMPLATE, ERROR: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });

}