module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies
        let User = new dependencies.actors.User({ dependencies, cookie })

        try {
            let data = params.data
            
            let response = {
                template: require("../../../templates/plans.marko"),
                data: await User.get_plans(data.data)
            }
            
            resolve(response);

        } catch (erro) {
            console.log(erro)
            erro = {
                message: `ERROR GETTING THE PLANS TEMPLATE, ERROR: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });

}