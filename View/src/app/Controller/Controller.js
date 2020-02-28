module.exports = class {
    constructor(dependencies) {
        this.dependencies = dependencies
        this.UseCases = new (require("../UseCases/UseCases"))(dependencies)
    }

    initialize(){
        try {
            this.UseCases.config_library()
            return
        }
        catch(erro){
            throw(erro)
        }
    }

    get_template() {
        var self = this
        return async function (call, callback) {
            let { credential, selector, params } = call.request

            try {
                let template = await self.UseCases.get_template(params, selector, credential)
                callback(null, template)
            }
            catch (erro) {
                self.handle_error(erro, callback)
            }
        }
    }

    handle_error(erro, callback) {
        console.log({ erro })
        callback(Error(erro), null)
    }

}