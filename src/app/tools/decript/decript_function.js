var { base64decode } = require("nodejs-base64")

module.exports = (decription_data) => {
    return new Promise((resolve, reject) => {
        if (!decription_data || !(typeof decription_data == "string"))
            reject()
        else {
            decription_data = JSON.parse(base64decode(decription_data))
            resolve(decription_data)
        }
    });
}