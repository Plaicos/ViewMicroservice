module.exports = (dependencies) => {
    return new Promise(async (resolve, reject) => {
        let { use_cases, cookie, library } = dependencies

        try {

            let template_location = {
                lib: "dashboard",
                subject: "page",
                name: "dashboard"
            }

            let response = await library.find(template_location)
            resolve(response)

        } catch (erro) {
            let template_location = {
                lib: "public",
                subject: "page",
                name: "login"
            }
            //case where the user could not get access to data
            let response = await library.find(template_location)
            resolve(response)
            console.log({ erro })
        }
    });
}