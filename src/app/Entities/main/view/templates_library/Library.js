module.exports = class Library {
    constructor({ dependencies, params, cookie }) {
        this.dependencies = dependencies
        this.cookie = cookie
        this.params = params
        this.libraries = require("./libs/libraries.js.js.js")
    }

    find(data) {
        return new Promise(async (resolve, reject) => {
            let { params, cookie, dependencies } = this
            
            try {
                try {
                    var buisness_logic = this.libraries[data.lib][data.subject][data.name]

                } catch (erro) {
                    erro = {
                        message: "THIS TEMPLATE DOES NOT EXIST"+erro,
                        status: 404
                    }
                    reject(erro)
                    console.log(erro)
                    return
                }

                let response = await buisness_logic({ dependencies, params, cookie })
                resolve(response)

            } catch (erro) {
                reject(erro)
            }
        });
    }

}