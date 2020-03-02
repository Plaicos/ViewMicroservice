module.exports = class {
    constructor(dependencies) {
        this.dependencies = dependencies
        this.UseCases = new (require("../UseCases/UseCases"))(dependencies)
    }

    initialize() {
        try {
            this.UseCases.config_library()
            return
        }
        catch (erro) {
            throw (erro)
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

    get_public_static_file() {
        var self = this
        return async function (call) {
            let { path } = call.request

            try {
                let file = await self.UseCases.get_static_file(path)
                file.on("data", (chunk)=>{
                    let packed_chunk = chunk.toJSON()
                    console.log("chunk of data :", packed_chunk)
                    call.write(packed_chunk)
                    return
                })
                file.on("end", ()=>{
                    call.end()
                    return
                })
            }
            catch (erro) {
                console.log(erro)
                call.end()
            }
        }
    }

    handle_error(erro, callback) {
        console.log({ erro })
        callback(Error(erro), null)
    }

}