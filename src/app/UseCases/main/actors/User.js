module.exports = class User {
    constructor({ dependencies, cookie }) {
        this.dependencies = dependencies
        this.cookie = cookie
        if (!cookie) {
            throw new Error("COOKIE CANT BE NULL, USER USE CASE CLASS CONSTRUCTOR")
        }
    }

    get_data() {
        return new Promise(async (resolve, reject) => {
            try {
                let json = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/user`,
                    cookie: this.cookie,
                    json: true
                })
                //console.log(`response from get user data: ${Object.keys(json)}`)
                resolve(json)

            } catch (erro) {
                console.log(`** get user data error: ${erro.message}`)
                reject(erro)
            }
        });
    }

    get_products(user_login) {
        return new Promise(async (resolve, reject) => {
            if (!user_login) {
                reject("USER LOGIN CANT BE NULL")
            } else {
                let params = {
                    filters: {
                        user: {
                            login: user_login
                        }
                    }
                }

                try {
                    params = this.dependencies.base64encode(JSON.stringify(params))
                    let user_products = {
                        raw_material: await this.dependencies.http_request.get({
                            url: `${this.dependencies.links.main}/user/search/raw-material?params=${params}`,
                            cookie: this.cookie,
                            json: true
                        }),
                        mix: null
                    }

                    resolve(user_products)

                } catch (erro) {
                    console.log(erro);

                    reject(erro)
                }
            }
        });
    }

    get_plans(data) {
        return new Promise(async (resolve, reject) => {
            if (!data)
                reject("NO DATA WAS GIVEN")

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

    search_rawMaterial(filters) {
        return new Promise(async (resolve, reject) => {
            if (!filters) {
                reject("FILTERS CANT BE NULL SEARCH RAW MATERIAL")
            } else {
                let params = {
                    filters: filters
                }
                console.log("USER RAW MATERIAL SEARCH FILTERS", params.filters);

                try {
                    params = this.dependencies.base64encode(JSON.stringify(params))
                    let user_products = {
                        raw_material: await this.dependencies.http_request.get({
                            url: `${this.dependencies.links.main}/user/search/raw-material?params=${params}`,
                            cookie: this.cookie,
                            json: true
                        }),
                        mix: null
                    }

                    resolve(user_products)

                } catch (erro) {
                    console.log(erro);

                    reject(erro)
                }
            }
        });
    }

    search_inciName(filters) {
        return new Promise(async (resolve, reject) => {
            if (!filters) {
                reject("FILTERS CANT BE NULL SEARCH INCI NAME")
            } else {
                let params = {
                    filters: filters
                }

                try {
                    params = this.dependencies.base64encode(JSON.stringify(params))
                    let inci_names = await this.dependencies.http_request.get({
                        url: `${this.dependencies.links.main}/user/search/inci-name?params=${params}`,
                        cookie: this.cookie,
                        json: true
                    })

                    resolve(inci_names)

                } catch (erro) {
                    console.log(erro);
                    reject(erro)
                }
            }
        });
    }

    search_marketplace(filters) {
        return new Promise(async (resolve, reject) => {
            if (!filters) {
                reject("FILTERS CANT BE NULL")
                return
            }

            try {
                let url = `${this.dependencies.links.marketplace}/user/search`
                let config = {
                    url: url,
                    data: filters
                }
                let results = await this.dependencies.http_request.post(config)

                resolve(results)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }

        });
    }

}