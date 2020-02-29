module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies

        try {
            let user = new actors.User({ dependencies, cookie })
            let system = new actors.System(dependencies)

            let data = {
                user: await user.get_data(),
                system: {
                    origins: await system.get_origins(),
                    applications: await system.get_applications(),
                    locations: await system.get_locations(),
                    made_in: await system.get_madeIn()
                }
            }

            data.user.products = await user.get_products(data.user.login)
            let raw_material_pagination = data.user.products.raw_material.pop()
            let mixes_pagination = null

            data.user.products.count = {
                raw_material: raw_material_pagination.total
            }
            
            //data.user.products.mixes.count = null

            let response = {
                template: require("../../../templates/dashboard/dashboard.marko"),
                data: data
            }

            resolve(response);

        } catch (erro) {
            console.log(erro);
            let response = {
                template: require("../../../templates/login.marko"),
                data: null
            }
            resolve(response)
        }
    });

}