module.exports = class Library {
    constructor() {

    }

    build() {
        let Library = {}

        try {
            Library = {
                config: this.config_libs(),
                render: this.render()
            }
            return Library;
        }
        catch (erro) {
            throw (erro)
        }
    }

    config_libs() {
        return function (libs) {
            if (!libs || typeof libs !== "object") {
                throw ("Lib config object must be a valid object")
            }
            
            this.libs = libs
        }
    }

    render() {
        return function (selector, params) {
            return new Promise(async (resolve, reject) => {
                let { libs } = this
               
                if (!selector || typeof selector !== "object") {
                    return reject("Library find selector must be a valid selector object")
                }

                if (!selector.lib || !selector.subject || !selector.name) {
                    return reject("Selector object is invalid")
                }

                if (!libs[selector.lib]) {
                    return reject(`Library '${selector.lib}' does not exist`)
                }
                if (!libs[selector.lib][selector.subject]) {
                    return reject(`Subject '${selector.subject}' does not exist`)
                }
                if (!libs[selector.lib][selector.subject][selector.name]) {
                    return reject(`Element '${selector.name}' does not exist`)
                }

                try {
                    let file = libs[selector.lib][selector.subject][selector.name]
                    file = await file(params);
                    resolve(file)
                }
                catch (erro) {
                    reject(erro)
                }
            })
        }
    }

}