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
        let libs = require("../Templates/libs/libraries")

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
            if (!credential) {
                console.log(Error("CREDENTIAL IS MISSING"))
                return reject("INTERNAL SERVER ERROR")
            }

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
}