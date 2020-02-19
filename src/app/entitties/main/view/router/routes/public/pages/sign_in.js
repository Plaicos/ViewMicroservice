module.exports = (dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { library } = dependencies

        try {
            let template_location = {
                lib: "public",
                subject: "page",
                name: "sign_in"
            }

            let response = await library.find(template_location)
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}