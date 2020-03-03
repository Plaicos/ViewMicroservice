module.exports = (dep) => {
    return new Promise(async (resolve, reject) => {
        let template = require("../../../templates/404.marko")
        let render_data = null

        try {
            let html = template.renderSync(render_data)
            resolve(html)
        }
        catch (erro) {
            reject(erro)
            console.log("Render Error ", erro)
        }
    });

}