// Compiled using marko@4.19.1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/View/templates/public/pages/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"br\"><head><meta charset=\"utf-8\"><title>Plaicos</title><script src=\"/public/assets/vendor/jquery/jquery.min.js\"></script><script src=\"/public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js\"></script><script src=\"/public/assets/vendor/jquery.easing/jquery.easing.min.js\"></script><script src=\"/public/assets/vendor/php-email-form/validate.js\"></script><script src=\"/public/assets/vendor/isotope-layout/isotope.pkgd.min.js\"></script><script src=\"/public/assets/vendor/venobox/venobox.min.js\"></script><script src=\"/public/assets/vendor/owl.carousel/owl.carousel.min.js\"></script><script src=\"/public/assets/vendor/aos/aos.js\"></script><script src=\"/public/assets/js/main.js\"></script><link href=\"/public/assets/css/cssLogin.css\" rel=\"stylesheet\"><link href=\"/public/assets/css/style.css\" rel=\"stylesheet\"><link href=\"/public/assets/vendor/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"><link href=\"/public/assets/vendor/icofont/icofont.min.css\" rel=\"stylesheet\"><link href=\"/public/assets/vendor/boxicons/css/boxicons.min.css\" rel=\"stylesheet\"></head><body style=\"background-color: #71B2AD;\">");

  component_globals_tag({}, out);

  out.w("<header id=\"header\" class=\"fixed-top\" style=\"background-color: #71B2AD;\"><div class=\"container-fluid d-flex\"><div class=\"logo mr-auto\"><h1 class=\"text-light\"><a href=\"index.html\"><span>Plaicos</span></a></h1></div><nav class=\"nav-menu d-none d-lg-block\"><ul><li class=\"active\"><a href=\"#header\">Home</a></li><li><a href=\"#about\">Marketplace</a></li><li><a href=\"#team\">Equipe</a></li><li><a href=\"#portfolio\">Blog</a></li><li><a href=\"#contact\">Contato</a></li><li class=\"drop-down\"><a href=\"\">Conta</a><ul><li><a href=\"perfil.html\">Perfil</a></li><li><a href=\"dashboardFornecedor.html\">Dashboard</a></li><li><a href=\"#\">Sair</a></li></ul></li><li class=\"get-started\"><a href=\"login.html\">Login</a></li></ul></nav></div></header><div class=\"login-container\"><div class=\"login-form-1\"><br><h3 class=\"login-logo\" style=\"margin-top: 30px;\">Login</h3><div class=\"form-group\"><input type=\"email\" class=\"form-control\" placeholder=\"Email *\" id=\"login\" value=\"\"></div><div class=\"form-group\"><input type=\"password\" class=\"form-control\" placeholder=\"Senha *\" id=\"password\" value=\"\"></div><div class=\"form-group\"><input type=\"button\" class=\"btnSubmit1\" value=\"Login\" onclick=\"login()\"></div><div class=\"form-group\"><a href=\"#\" class=\"btnForgetPwd\">Esqueceu a senha???</a></div></div></div><script src=\"https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js\"></script><script src=\"/public/js/login/login.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "51");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/View/templates/public/pages/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
