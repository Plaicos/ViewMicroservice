module.exports = (_dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { cookie, params, dependencies } = _dependencies
        let { actors } = dependencies

        if (!cookie) {
            let erro = {
                message: "NO COOKIE WAS PROVIDED, PLEASE LOG IN",
                status: 401
            }
            reject(erro)
        }

        try {
            let user = new actors.User({ cookie, dependencies })
            let filters = params.data.data

            let products_arr = (await user.search_rawMaterial(filters)).raw_material
            let pagination = products_arr.pop()
            let response = {
                template: require("../../../templates/dashboard/components/tables/raw_material_table.marko"),
                data: products_arr
            }

            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}