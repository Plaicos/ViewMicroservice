module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies

        try {

            let data = null

            let response = {
                template: require("../../../templates/sign_in.marko"),
                data: data
            }

            resolve(response);

        } catch (erro) {
            erro = {
                message: `ERROR GETTING THE SIGN IN TEMPLATE, ERROR: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });

}