module.exports = (dependencies) => {
    let { router } = dependencies

    router.use(async function (req, resp, next) {
        if (req.cookies && req.cookies["Plaicos Session Cookie"]) {
            req.cookie = req.cookies["Plaicos Session Cookie"]
        }
        else if (req.query.cookie) {
            req.cookie = req.query.cookie
        }
        next()
    })

    return router;
}