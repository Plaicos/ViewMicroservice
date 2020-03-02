module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { dependencies, params, library } = _dependencies
        let { actors } = dependencies
        let system = new actors.System()

        try {
            let conditions = [
                typeof params == "object",
                params.hasOwnProperty("template"),
                typeof params.template == "object"
            ]

            for (let i of conditions) {
                if (i !== true) {
                    let erro = {
                        message: "TEMPLATE DATA IS INVALID",
                        status: 400
                    }
                }
            }

            let data = null

            let response = await library.find(params.data.template)
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}