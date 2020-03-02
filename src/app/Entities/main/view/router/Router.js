module.exports = class Router {
    constructor(_dependencies) {
        let { dependencies, cookie, params } = _dependencies
        let { links } = dependencies

        this.dependencies = dependencies
        this.use_cases = dependencies.use_cases
        this.cookie = cookie
        this.routes = require("./routes/routes_entitites.js")
        this.library = new (require("../templates_library/Library.js"))({ dependencies, params, cookie })
        this.params = params
        this.links = links

        if (!dependencies) {
            throw new Error("Router Constructor Dependencies cant be null")
        }
    }

    find_route() {
        return new Promise(async (resolve, reject) => {
            let { use_cases, cookie, library, dependencies, params } = this
            let { route, data } = params

            try {
                //public routes
                //pages
                if (route === "/login") {
                    let response = await this.routes.public.pages.login({ library })
                    resolve(response)
                }
                else if (route === "/sign-in") {
                    let response = await this.routes.public.pages.sign_in({ library })
                    resolve(response)
                }
                else if (route === "/checkout") {
                    let response = await this.routes.public.pages.checkout({ library })
                    resolve(response)
                }
                //public marketplace
                else if (route === "/marketplace") {
                    let response = await this.routes.public.pages.marketplace({ library })
                    resolve(response)
                }
                //public get
                else if (route === "/get/template") {
                    let response = await this.routes.public.get.template({ dependencies, library, params })
                    console.log({ response })
                    resolve(response)
                }

                // ---------------------------------------------------------------------------------------------

                // "/user"
                else if (route === "/user/dashboard") {
                    let response = await this.routes.user.dashboard.dashboard({ use_cases, cookie, library, data })
                    resolve(response)
                }
                //user get
                else if (route === "/user/get/template") {
                    let response = await this.routes.user.get.template({ dependencies, library, cookie, data })
                    resolve(response)
                }

                else {
                    // this happens when the route is '/'
                    let response = await this.routes.public.pages.home({ library })
                    resolve(response)
                }

            } catch (erro) {
                reject(erro)
            }
        });
    }

    inject_internal_links(response_object) {
        let data = response_object.data
        if (data && typeof data === "object") {
            response_object.data.links = this.links
        } else {
            response_object.data = {
                links: this.links
            }
        }
        return response_object
    }

}


// // // // // // // // //    to do .... // // // // // // // // // // //

/*
if (params.route) {
    let route = params.route

    //rota checkout
    if (route === "/checkout") {
        if (!params.data)
            reject()

        var template = this.entities.view.checkout(this.dependencies)
        var data = params.data
        //data from subscription form
        data.subscription_data = this.dependencies.base64encode(JSON.stringify(params.data))
        //mercado pago required data
        data.mercado_pago = {
            public_key: await this.dependencies.mercado_pago.main().public_key()
        }
        //data required to paypal
        data.paypal = {
            public_key: "foobar"
        }
    }
    //sign in
    else if (route === "/sign-in") {
        var template = this.entities.view.sign_in(this.dependencies)
    }
    //get the plans for the given data
    else if (route === "/get/plans") {
        var template = this.entities.view.plans(this.dependencies)
        var data = await this.get_plans(params.data)
    }
    //login route
    else if (route === "/login") {
        var template = this.entities.view.login()
    }
    //self profile user access
    else if (route === "/user/dashboard") {
        try {
            //try to get data with the given cookie
            var data = {}
            data.user = await this.get_user_data(cookie)
                .catch((erro) => {
                    console.log("catched error", erro)
                    throw erro
                })

            data.user.products = await this.get_user_products(cookie, data.user.login)
            data.user.products.count = {
                raw_material: (data.user.products.raw_material.pop()).total
            }
            data.origins = await this.get_origins()
            var template = await this.entities.view.dashboard(this.dependencies)

        } catch (erro) {
            //case where the user could not get access to data
            var template = this.entities.view.login(this.dependencies)
            console.log({ erro })
        }
    }

    //---- end of routes ----
    else {
        var template = this.entities.view.home(this.dependencies)
    }

    //internal links to microservices and main server
    if (!data) {
        var data = {}
    }
    if (typeof data == "object") {
        data.links = this.dependencies.links
    }
    else {
        console.log(" ******* wrong typeof data in view use case // data: ", data)
        var data = {}
        data.links = this.dependencies.links
    }

    var response = {
        template: template,
        data: data
    }
    console.log(data.company)
    resolve(response)
}
else {
    var template = this.entities.view.home(this.dependencies)
    var data = {}
    data.links = this.dependencies.links
    var response = {
        template: template,
        data: data
    }
    resolve(response)
}
*/