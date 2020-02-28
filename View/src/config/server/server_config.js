module.exports = {
    port: 3010,
    hostname: "hostname",
    callback: function (configs) {
        return function () {
            console.log("Server rodando na porta:", configs.port)
        }
    }
}