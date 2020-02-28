var axios = require("axios").default

class Http_Request {
    constructor(axios) {
        this.axios = axios
    }
    get(config) {
        return new Promise((resolve, reject) => {
            //configures get request
            let axios_config = {
                url: config.url,
                method: 'GET',
                headers: {
                    //sets cookies
                    Cookie: `Plaicos Session Cookie=${config.cookie}`
                },
            }

            this.axios.request(axios_config)
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error_response) => {
                    let error = {
                        status: error_response.response.status,
                        message: error_response.response.data
                    }
                    reject(error)
                })
        });
    }

    post(config) {
        return new Promise((resolve, reject) => {
            if (!config.cookie) {
                config.cookie = "null"
            }
            if (!config.url) {
                reject("HTTP REQUESTER NEEDS A URL")
            }

            this.axios.post(config.url, config.data) 
                .then((response) => {
                    resolve(response.data)
                })
                .catch((error_response) => {
                    let error = {
                        status: error_response.response.status,
                        message: error_response.response.data
                    }
                    reject(error)
                })
        });
    }
}

var Http_request = new Http_Request(axios)

module.exports = Http_request