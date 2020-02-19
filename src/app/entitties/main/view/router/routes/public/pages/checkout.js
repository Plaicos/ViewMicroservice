module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { library } = _dependencies

        try {
            let template_location = {
                lib: "public",
                subject: "page",
                name: "checkout"
            }

            let response = await library.find(template_location)
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}