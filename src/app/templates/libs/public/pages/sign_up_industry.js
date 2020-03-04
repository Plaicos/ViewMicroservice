module.exports = ({ }) => {
    return new Promise(async (resolve, reject) => {
        let template = require("../../../templates/sign_up_industry.marko")
        let render_data = null

        try {
            let html = template.renderSync(render_data)
            resolve(html);
        }
        catch (erro) {
            reject(erro)
        }
    });

}