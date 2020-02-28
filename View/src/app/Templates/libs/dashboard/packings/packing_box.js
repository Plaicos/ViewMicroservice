module.exports = (_dependencies) => {
    return new Promise((resolve, reject) => {
        let { dependencies, params, cookie } = _dependencies

        try {
            let response = {
                template: require("../../../templates/dashboard/components/packings/packing_box.marko"),
                data: params.data.data
            }
            resolve(response)

        } catch (erro) {
            reject(erro)
        }
    });
}