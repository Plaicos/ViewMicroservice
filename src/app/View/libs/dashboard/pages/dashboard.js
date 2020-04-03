module.exports = ({ SCI, credential }) => {
    return new Promise(async (resolve, reject) => {

        let supplier_template = require("../../../templates/dashboard/supplier_dashboard.marko")
        let login_template = require("../../../templates/login.marko")
        let config = {
            level: 4,
            scope: {
                read: true,
                write: true,
                third_party: {
                    read: false,
                    write: false
                }
            }
        }
        let html = ""
        let user = {}

        try {
            if (!credential) {
                html = login_template.renderSync()
                return resolve(html)
            }
            else {
                try {
                    await SCI.Authenticator.checkCredentialClearance(config, credential)
                }
                catch (erro) {
                    html = login_template.renderSync()
                    return resolve(html)
                }
            }

            user = await SCI.User.get_user(credential.user, credential)

            if (user.type === "supplier") {
                html = supplier_template.renderSync(user)
            }

            resolve(html)
        }
        catch (erro) {
            reject(erro)
            console.log("Render Error s", erro)
        }
    });

}