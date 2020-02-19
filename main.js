//-------- importançao de modulos nativos do node
//importando modulo http
var http = require('http');

//-------- importação de modulos customizados
//express com todas as dependencias
var { express, app, router } = require("./src/config/express/express.js")
var server_config = require("./src/config/server/server_config.js")

//urls
const links = require("./src/config/url/links.js")

//microservices
var mercado_pago = require("../payments/mercado_pago/main.js")

//tools
var decript = require("./src/app/tools/decript/decript_function.js")
var http_request = require("./src/app/tools/http_request/http_request.js")
var { base64encode, base64decode } = require("nodejs-base64")
var logger = require('tracer').colorConsole({ level: 'warn' });

//dependenceia
var dependencies = {
    router: router,
    express: express,
    decript: decript,
    mercado_pago: mercado_pago,
    base64encode: base64encode,
    base64decode: base64decode,
    http_request: http_request,
    links: links,
    debug: function (to_log, level) {
        if (!level) {
            //logger.debug(to_log)
            logger.error(to_log)
        }
        else {
            //future development
            return
        }
    },
    logger: logger
}

//middlewares
app.use(require("./src/config/middlewares/middlewares.js")(dependencies))

//roteamento
app.use(require("./src/config/rotas/router.js")(dependencies))

//criando obj server
var server = http.createServer(app)


//ligando o server
server.listen(server_config.port, server_config.callback(server_config))
