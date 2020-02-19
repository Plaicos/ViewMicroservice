module.exports = class System {
    constructor(dependencies) {
        this.dependencies = dependencies
    }

    get_origins() {
        return new Promise(async (resolve, reject) => {
            try {
                let origins = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/sys/get/origins`,
                    json: true
                })

                resolve(origins)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }

        });
    }

    get_applications() {
        return new Promise(async (resolve, reject) => {
            try {
                let origins = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/sys/get/applications`,
                    json: true
                })

                resolve(origins)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }

        });
    }

    get_madeIn() {
        return new Promise(async (resolve, reject) => {
            try {
                let madeIn_list = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/sys/get/made-in`,
                    json: true
                })

                resolve(madeIn_list)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }

        });
    }

    get_locations() {
        return new Promise(async (resolve, reject) => {
            try {
                let locations_list = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.main}/sys/get/locations`,
                    json: true
                })

                resolve(locations_list)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }

        });
    }

    get_post_types() {
        return new Promise(async (resolve, reject) => {
            try {
                let post_types_list = await this.dependencies.http_request.get({
                    url: `${this.dependencies.links.marketplace}/sys/get/post-types`,
                    json: true
                })

                resolve(post_types_list)

            } catch (erro) {
                console.log(erro);
                reject(erro)
            }
        });
    }

}