// Compiled using marko@4.19.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/View/templates/dashboard/third_party_dashboard.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"br\"><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><title>Dashboard</title><link href=\"assets/css/styles.css\" rel=\"stylesheet\"><link href=\"https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css\" rel=\"stylesheet\" crossorigin=\"anonymous\"><script src=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js\" crossorigin=\"anonymous\"></script><link href=\"assets/img/favicon.png\" rel=\"icon\"><link href=\"assets/img/apple-touch-icon.png\" rel=\"apple-touch-icon\"><link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,600,600i,700,700i\" rel=\"stylesheet\"><link href=\"assets/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/icofont/icofont.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/boxicons/css/boxicons.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/venobox/venobox.css\" rel=\"stylesheet\"><link href=\"assets/vendor/owl.carousel/assets/owl.carousel.min.css\" rel=\"stylesheet\"><link href=\"assets/vendor/aos/aos.css\" rel=\"stylesheet\"><link href=\"assets/css/style.css\" rel=\"stylesheet\"></head><body class=\"sb-nav-fixed\">");

  component_globals_tag({}, out);

  out.w("<header id=\"header\" class=\"fixed-top\" style=\"background-color: #71B2AD;\"><div class=\"container-fluid d-flex\"><div class=\"logo mr-auto\"><h1 class=\"text-light\"><a href=\"index.html\"><span>Plaicos</span></a></h1></div><nav class=\"nav-menu d-none d-lg-block  navbar-expand\"><ul><li class=\"active\"><a href=\"index.html\">Home</a></li><li><a href=\"#about\">Marketplace</a></li><li><a href=\"index.html#team\">Equipe</a></li><li><a href=\"index.html#portfolio\">Blog</a></li><li><a href=\"index.html#contact\">Contato</a></li><form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\"><div class=\"input-group\"><input class=\"form-control\" type=\"text\" placeholder=\"Pesquise...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\" style=\"border-radius: 20px;\"><div class=\"input-group-append\"><button class=\"btn\" style=\"background-color: #C05F7B; color: aliceblue; margin-right: 15px; border-radius: 20px; width: 40px;\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div></form></ul></nav></div></header><div id=\"layoutSidenav\"><div id=\"layoutSidenav_nav\"><nav class=\"sb-sidenav accordion sb-sidenav-dark\" id=\"sidenavAccordion\" style=\"margin-top: 72px; background-color: #8AC0BB;\"><div class=\"sb-sidenav-menu\"><div class=\"nav\"><a class=\"nav-link\" href=\"dashboardUsuario.html\"><div class=\"sb-nav-link-icon\"><i class=\"fas fa-columns\"></i></div> Dashboard</a><div class=\"sb-sidenav-menu-heading\">Análises</div><a class=\"nav-link\" href=\"leadsUsu.html\" aria-expanded=\"false\"><div class=\"sb-nav-link-icon\"><i class=\"fas fa-table\"></i></div> Meus Leads</a><a class=\"nav-link \" href=\"GraficosUsu.html\" aria-expanded=\"false\"><div class=\"sb-nav-link-icon\"><i class=\"fas fa-chart-area\"></i></div> Meus Gráficos</a><a class=\"nav-link \" href=\"CotacaoUsu.html\" aria-expanded=\"false\"><div class=\"sb-nav-link-icon\"><i class=\"fa fa-th-list\"></i></div> Cotação Geral</a><a class=\"nav-link \" href=\"BuscaUsu.html\" aria-expanded=\"false\"><div class=\"sb-nav-link-icon\"><i class=\"fa fa-search\"></i></div> Minha busca</a></div></div></nav></div><div id=\"layoutSidenav_content\"><main><div class=\"container-fluid\"><br><h2 class=\"mt-4\">Dashboard</h2><br><hr><div class=\"row\"><div class=\"col-xl-6 col-md-6\"><div class=\"card text-white mb-4\" style=\"background-color: #C05F7B;\"><div class=\"card-body\">Perfil</div><div class=\"card-footer d-flex align-items-center justify-content-between\"><a class=\"small text-white stretched-link\" href=\"perfilUsu.html\">Mais detalhes</a><div class=\"small text-white\"><i class=\"fas fa-angle-right\"></i></div></div></div></div><div class=\"col-xl-6 col-md-6\"><div class=\"card  text-white mb-4\" style=\"background-color: #CB7C93;\"><div class=\"card-body\">Mensagens</div><div class=\"card-footer d-flex align-items-center justify-content-between\"><a class=\"small text-white stretched-link\" href=\"mensagensUsu.html\">Mais detalhes</a><div class=\"small text-white\"><i class=\"fas fa-angle-right\"></i></div></div></div></div></div><div class=\"row\"><div class=\"col-xl-6\"><div class=\"card mb-4\"><div class=\"card-header\" style=\"font-size: 20px;\"><i class=\"fas fa-chart-area mr-1\"></i>Matérias primas mais acessadas</div><div class=\"card-body\"><canvas id=\"myAreaChart\" width=\"100%\" height=\"40\"></canvas></div></div></div><div class=\"col-xl-6\"><div class=\"card mb-4\"><div class=\"card-header\" style=\"font-size: 20px;\"><i class=\"fas fa-chart-bar mr-1\"></i>Cidades que mais nos procuraram</div><div class=\"card-body\"><canvas id=\"myBarChart\" width=\"100%\" height=\"40\"></canvas></div></div></div></div></div></main><footer class=\"py-4 bg-light mt-auto\"><div class=\"container-fluid\"></div></footer></div></div><script src=\"https://code.jquery.com/jquery-3.4.1.min.js\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js\" crossorigin=\"anonymous\"></script><script src=\"js/scripts.js\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js\" crossorigin=\"anonymous\"></script><script src=\"assets/demo/chart-area-demo.js\"></script><script src=\"assets/demo/chart-bar-demo.js\"></script><script src=\"https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js\" crossorigin=\"anonymous\"></script><script src=\"assets/demo/datatables-demo.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "101");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/View/templates/dashboard/third_party_dashboard.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
