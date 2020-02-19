module.exports = ({ library }) => {
    return new Promise(async (resolve, reject) => {
        try {
            let template_location = {
                lib: "marketplace",
                subject: "page",
                name: "marketplace"
            }

            let response = await library.find(template_location)
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}