// Compiled using marko@4.18.44 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html data-wf-page=\"5dccea345095d022ede58a2d\" data-wf-site=\"5dcb535bc74abf03fdf7fcb7\"><head><meta charset=\"utf-8\"><title>LOGIN</title><meta content=\"LOGIN\" property=\"og:title\"><meta content=\"width=device-width, initial-scale=1\" name=\"viewport\"><meta content=\"Webflow\" name=\"generator\"><link href=\"/public/css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/webflow.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/plaicos.webflow.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\" type=\"text/javascript\"></script><script type=\"text/javascript\">WebFont.load({  google: {    families: [\"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic\"]  }});</script><script type=\"text/javascript\">!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);</script><link href=\"/public/images/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link href=\"/public/images/webclip.png\" rel=\"apple-touch-icon\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-adm-dashboard w-nav\"><div class=\"navigation-wrap\"><a href=\"/\" class=\"logo-link w-nav-brand\"><img src=\"/public/images/PLAICOS-LOGO.png\" width=\"108\" srcset=\"/public/images/PLAICOS-LOGO-p-500.png 500w, /public/images/PLAICOS-LOGO-p-800.png 800w, /public/images/PLAICOS-LOGO.png 1047w\" sizes=\"(max-width: 479px) 100vw, 107.99715423583984px\" alt=\"\" class=\"logo-image\"></a><div class=\"menu\"><nav role=\"navigation\" class=\"navigation-items w-nav-menu\"><a href=\"/\" class=\"navigation-item w-nav-link\">HOMe</a><a href=\"marketplace.html\" class=\"navigation-item w-nav-link\">marketplace</a><a href=\"team.html\" class=\"navigation-item w-nav-link\">equipe</a><a href=\"blog.html\" class=\"navigation-item w-nav-link\">Blog</a><a href=\"contact.html\" class=\"navigation-item w-nav-link\">contato</a><a href=\"#\" class=\"nav-link w-nav-link\">CADASTRE-SE</a><a href=\"#\" class=\"nav-link-2 w-nav-link\">LOGIN</a></nav><div class=\"menu-button w-nav-button\"><img src=\"/public/images/menu-icon_1menu-icon.png\" width=\"22\" alt=\"\" class=\"menu-icon\"></div></div></div><div data-delay=\"0\" class=\"dropdown-2 w-dropdown\"><div class=\"dropdown-toggle-3 w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>MINHA CONTA</div></div><nav class=\"dropdown-list w-dropdown-list\"><a" +
    marko_attr("href", (data.links.view + "?params=") + data.links.web.user.profile) +
    " class=\"w-dropdown-link\">MEU PERFIL</a><a" +
    marko_attr("href", (data.links.view + "?params=") + data.links.web.user.dashboard) +
    " class=\"w-dropdown-link\">DASHBOARD</a><a href=\"#\" class=\"w-dropdown-link\">SAIR</a></nav></div></div><div class=\"section-3\"></div><div class=\"section-6\"><div class=\"w-container\"><div class=\"form-block-2 w-form\"><img src=\"/public/images/PLAICOS-LOGO.png\" srcset=\"/public/images/PLAICOS-LOGO-p-500.png 500w, /public/images/PLAICOS-LOGO-p-800.png 800w, /public/images/PLAICOS-LOGO.png 1047w\" sizes=\"(max-width: 479px) 60vw, (max-width: 767px) 40vw, (max-width: 991px) 291.19317626953125px, 375.9942932128906px\" alt=\"\" class=\"image-4\"><form id=\"email-form\" name=\"email-form\" data-name=\"Email Form\" class=\"form-4\"><label for=\"login-2\" class=\"field-label-8\">login</label><input type=\"text\" class=\"text-field-8 w-input\" maxlength=\"256\" name=\"login\" data-name=\"login\" id=\"login\" required=\"\"><label for=\"password-2\" class=\"field-label-9\">senha</label><input type=\"password\" class=\"text-field-9 w-input\" maxlength=\"256\" name=\"password\" data-name=\"password\" id=\"password\" required=\"\"><div id=\"error-box\" class=\"div-block-67\"><p class=\"paragraph-59\">ERROR MESSAGE</p></div><input type=\"button\" value=\"LOGIN\" data-wait=\"Please wait...\" class=\"submit-button-2 w-button\" whenclicked=\"login()\"></form><div id=\"loading-animation\" class=\"div-block-68\"><p class=\"paragraph-60\">ENTRANDO ....</p></div><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"></div></div></div></div><script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js\" type=\"text/javascript\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script src=\"/public/js/webflow.js\" type=\"text/javascript\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.1/axios.js\" type=\"text/javascript\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\" type=\"text/javascript\"></script><script src=\"/public/js/login/login.js\" type=\"text/javascript\"></script><input id=\"main-server\" hidden" +
    marko_attr("value", "" + data.links.main) +
    "><input id=\"view-server\" hidden" +
    marko_attr("value", "" + data.links.view) +
    ">");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "56");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
