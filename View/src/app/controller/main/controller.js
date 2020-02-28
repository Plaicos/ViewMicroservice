module.exports = class {
    constructor(dependencies) {
        this.dependencies = dependencies

        //importando use cases 
        this.dependencies.use_cases = new (require("../../use_case/main/main_use_cases.js"))(this.dependencies)
        this.use_cases = this.dependencies.use_cases

    }

    view() {
        var self = this
        return async function (req, resp) {
            try {
                let params = req.query.params
                let cookie = req.cookie
                
                var view = await self.use_cases.view(params, cookie)
                var { template, data } = view

                resp.status(200)
                resp.marko(template, data)
                resp.end()

            } catch (erro) {
                self.handle_error(erro, resp)
            }
        }
    }

    handle_error(error_object, resp) {
        //login error handling
        if (error_object.message && error_object.status) {
            resp.status(error_object.status)
            console.log(error_object)
            resp.json(error_object.message)
        }
        else {
            resp.status(500)
            console.log(error_object)
            resp.json(error_object)
        }
        resp.end()
    }

}