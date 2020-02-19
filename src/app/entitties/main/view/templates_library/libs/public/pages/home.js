module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies

        try {
            let system = new actors.System()

            let data = null

            let response = {
                template: require("../../../templates/home.marko"),
                data: data
            }

            resolve(response);

        } catch (erro) {
            erro = {
                message: `ERROR GETTING THE HOME TEMPLATE, ERROR: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });

}