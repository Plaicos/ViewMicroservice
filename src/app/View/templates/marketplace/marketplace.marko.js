// Compiled using marko@4.19.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/View/templates/marketplace/marketplace.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"br\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Dashboard</title><link href=\"assets/css/styles.css\" rel=\"stylesheet\"><link href=\"https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css\" rel=\"stylesheet\" crossorigin=\"anonymous\"><script src=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js\" crossorigin=\"anonymous\"></script><link href=\"assets/img/favicon.png\" rel=\"icon\"><link href=\"assets/img/apple-touch-icon.png\" rel=\"apple-touch-icon\"><link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i\" rel=\"stylesheet\"><link href=\"assets/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/icofont/icofont.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/boxicons/css/boxicons.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/venobox/venobox.css\" rel=\"stylesheet\"><link href=\"assets/vendor/owl.carousel/assets/owl.carousel.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/aos/aos.css\" rel=\"stylesheet\"><link href=\"assets/css/style.css\" rel=\"stylesheet\"></head><body class=\"sb-nav-fixed\">");

  component_globals_tag({}, out);

  out.w("<header id=\"header\" class=\"fixed-top\" style=\"background-color: #71B2AD;\"><div class=\"container-fluid d-flex\"><div class=\"logo mr-auto\"><h1 class=\"text-light\"><a href=\"index.html\"><span>Plaicos</span></a></h1></div><nav class=\"nav-menu d-none d-lg-block  navbar-expand\"><ul style=\"margin-right:80px;\"><li class=\"active\"><a href=\"index.html\">Home</a></li><li><a href=\"index.html#team\">Equipe</a></li><li><a href=\"index.html#portfolio\">Blog</a></li><li><a href=\"index.html#contact\">Contato</a></li><li><a href=\"#about\">Balcão de Negócios</a></li><li class=\"drop-down\"><a href=\"\">Conta</a><ul><li><a href=\"perfil.html\">Perfil</a></li><li><a href=\"dashboardFornecedor.html\">Dashboard</a></li><li><a href=\"#\">Sair</a></li></ul></li></ul></nav></div></header><div id=\"layoutSidenav\"><main><div class=\"container-fluid\"><br><h2 style=\"margin-top: 80px;\">Balcão de Negócios</h2><br><hr><div class=\"card mb-4\"><div class=\"card-body\"><div class=\"table-responsive\"><table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\"><thead><tr style=\"color: #C05F7B;  background-color: aliceblue;\"><th>Categoria</th><th>Ação</th><th>Data do anúncio</th><th>Contato</th><th>E-mail</th><th>Produto / Serviço procurado</th><th>Produto / Serviço oferecido</th><th>Mensagem</th><th>Prazo</th><th>Observação</th><th>Cidade</th><th>Estado</th></tr></thead><tfoot><tr style=\"color: #C05F7B; background-color: aliceblue;\"><th>Categoria</th><th>Ação</th><th>Data do anúncio</th><th>Contato</th><th>E-mail</th><th>Produto / Serviço procurado</th><th>Produto / Serviço oferecido</th><th>Mensagem</th><th>Prazo</th><th>Observação</th><th>Cidade</th><th>Estado</th></tr></tfoot><tbody><tr><td>n sei</td><td>oooooo</td><td>22/02/2020</td><td>Tiger Nixon</td><td>Edinburgh@gmail.com</td><td>Não</td><td>Sim</td><td>Favor enviar urgente</td><td>22/03/2020</td><td>Finalizar hoje</td><td>Curitiba</td><td>Parana</td></tr><tr><td>n sei</td><td>oooooo</td><td>22/02/2020</td><td>Tiger Nixon</td><td>Edinburgh@gmail.com</td><td>Não</td><td>Sim</td><td>Favor enviar urgente</td><td>22/03/2020</td><td>Finalizar hoje</td><td>Curitiba</td><td>Parana</td></tr></tbody></table></div></div></div></div></main><footer class=\"py-4 bg-light mt-auto\"><div class=\"container-fluid\"></div></footer></div><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js\" crossorigin=\"anonymous\"></script><script src=\"js/scripts.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js\" crossorigin=\"anonymous\"></script><script src=\"assets/demo/chart-area-demo.js\"></script><script src=\"assets/demo/chart-area-forne.js\"></script><script src=\"assets/demo/chart-bar-demo.js\"></script><script src=\"assets/demo/chart-bar-forne.js\"></script><script src=\"https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js\" crossorigin=\"anonymous\"></script><script src=\"assets/demo/datatables-demo.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js\" crossorigin=\"anonymous\"></script><script src=\"assets/demo/chart-area-demo.js\"></script><script src=\"assets/demo/chart-bar-demo.js\"></script><script src=\"assets/demo/chart-pie-demo.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "114");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/View/templates/marketplace/marketplace.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
