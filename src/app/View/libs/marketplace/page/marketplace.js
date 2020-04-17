module.exports = ({ cookie, params, dependencies }) => {
    return new Promise(async (resolve, reject) => {
        let template = require("../../../templates/marketplace/marketplace.marko")
        let render_data = null;

        try {
            let html = template.renderSync(render_data);
            resolve(html);
        }
        catch (erro) {
            erro = {
                message: `ERROR GETTING THE MARKETPLACE TEMPLATE, ERROR: ${erro}`,
                status: 500
            }
            reject(erro)
        }
    });

}