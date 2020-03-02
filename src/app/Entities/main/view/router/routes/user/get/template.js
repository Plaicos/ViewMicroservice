module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { dependencies, library, cookie, data } = _dependencies
        let { actors } = dependencies

        try {
            let response = await library.find(data.template)
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}