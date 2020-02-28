module.exports = class Library {
    constructor() {
        this.libraries = require("./libs/libraries.js")
    }

    build() {
        return new Promise(async (resolve, reject) => {

        })
    }

    config_libs() {
        let { libraries } = this
        let lib_keys = Object.keys(libraries)
        let foo

        try {
            for (let lib of lib_keys) {
                
            }
        }
        catch (erro) {
            reject(erro)
        }
    }

    find(selector) {
        return new Promise(async (resolve, reject) => {
            let { libraries } = this
            try {
                let lib = libraries[selector.lib]
                var buisness_logic = this.libraries[data.lib][data.subject][data.name]

                let response = await buisness_logic({ dependencies, params, cookie })
                resolve(response)

            } catch (erro) {
                reject(erro)
            }
        });
    }

}