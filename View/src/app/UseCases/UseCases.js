module.exports = class UseCases {
    constructor(dependencies) {
        this.dependencies = dependencies
        let { DAO, SCI, Library } = dependencies

        this.SCI = SCI
        this.DAO = DAO
        this.Library = Library
        this.entities = require("../Entities/entities")
    }

    config_library() {
        let { Library } = this
        let libs = require("../templates/libs/libraries")

        try {
            Library.config(libs)
            return
        }
        catch (erro) {
            throw (erro)
        }
    }

    get_template(params, selector, credential) {
        return new Promise(async (resolve, reject) => {

            let { DAO, SCI, Library, entities } = this

            try {
                let html = await Library.render(selector, { SCI, DAO, credential, params })
                let Template = new entities.Template(html)
                Template.pack()

                resolve(Template)
            }
            catch (erro) {
                reject(erro)
            }
        })
    }

    get_static_file(path) {
        return new Promise(async (resolve, reject) => {
            if (!path || typeof path !== "string") {
                return reject("Path must be a valid string")
            }

            let { entities } = this
            let root = ""
            let file = new entities.File({ root, path })

            try {
                //buffer
                file = file.load()
                console.log("File in binary, array of bytes", file)
                file.pack()
                console.log("File has packed itself into a json", file)
                resolve(file)
            }
            catch (erro) {
                reject(erro)
            }
        })
    }
}