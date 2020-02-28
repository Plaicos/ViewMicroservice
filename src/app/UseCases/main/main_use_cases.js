module.exports = class {
    constructor(dependencies) {
        this.dependencies = dependencies
        this.dependencies.actors = require("./actors/actors.js")

        //importando as entidades
        
        this.Router = require("../../entitties/main/view/router/router.js")
    }

    view(params, cookie) {
        return new Promise(async (resolve, reject) => {
            if (!params || typeof params !== "string") {
                params = {
                    route: null,
                    data: null
                }
            }
            else if (params && typeof params == "string") {
                try {
                    params = await this.dependencies.decript(params)
                    
                } catch (erro) {
                    console.log(`ERROR READING PARAMS FROM REQUEST // ERROR:${erro}`)
                    params = {
                        route: null,
                        data: null
                    }
                }
            }
            try {
                //new instance of router
                let router = new this.Router({ dependencies: this.dependencies, cookie, params })
                //returns an object with the template and data
                let response = await router.find_route()
                //injects an object with internal link in the data property
                response = router.inject_internal_links(response)

                resolve(response)

            } catch (erro) {
                console.log("rejected here")
                reject(erro)
            }
        });
    }

    // dead code */to do/* 

    get_plans(data) {
        return new Promise(async (resolve, reject) => {
            if (!data)
                reject()

            try {
                data = this.dependencies.base64encode(JSON.stringify(data))
                let json = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/get/plans?data=${data}`
                })
                console.log(json)
                resolve(json)

            } catch (erro) {
                reject(erro)
            }
        });
    }

    //public get listings


}