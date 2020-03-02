module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies

        let user = new actors.User({ cookie, dependencies })
        try {
            let template = require("../../../templates/dashboard/components/suggestion-box/suggestion_box.marko")

            let filters = {
                text: params.data.filters.text
            }

            let inciName_array = await user.search_inciName(filters)
            let data = []
            for (let i of inciName_array) {
                data.push({
                    name: i.inci_name,
                    value: i.inci_name
                })
            }
            console.log(data);

            let response = {
                template: template,
                data: data
            }
            resolve(response)

        } catch (erro) {
            erro = {
                message: `ERROR GETING THE SUGGESTION BOX TEMPLATE: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });
}