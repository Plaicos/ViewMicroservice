module.exports = ({ cookie, params, dependencies }) => {
    return new Promise(async (resolve, reject) => {
        let { actors } = dependencies
        let user = new actors.User({ dependencies, cookie })
        let system = new actors.System(dependencies)
        let search_filters = params.data.filters
        let fields_toggle = params.data.filters_toggle

        try {
            console.log({ search_filters })
            let data = await user.search_marketplace(search_filters)
            console.log({ data })
            let response = {
                template: require("../../../templates/marketplace/components/search_results.marko"),
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