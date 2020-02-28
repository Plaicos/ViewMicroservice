// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates/profile.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html data-wf-page=\"5e1481b3775c4964971e64ff\" data-wf-site=\"5dcb535bc74abf03fdf7fcb7\"><head><meta charset=\"utf-8\"><title>user profile</title><meta content=\"user profile\" property=\"og:title\"><meta content=\"width=device-width, initial-scale=1\" name=\"viewport\"><meta content=\"Webflow\" name=\"generator\"><link href=\"/public/css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/webflow.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/plaicos.webflow.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\" type=\"text/javascript\"></script><script type=\"text/javascript\">WebFont.load({  google: {    families: [\"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic\"]  }});</script><script type=\"text/javascript\">!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);</script><link href=\"/public/images/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link href=\"/public/images/webclip.png\" rel=\"apple-touch-icon\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-adm-dashboard w-nav\"><div class=\"navigation-wrap\"><a href=\"/\" class=\"logo-link w-nav-brand\"><img src=\"/public/images/PLAICOS-LOGO.png\" width=\"108\" srcset=\"../images/PLAICOS-LOGO-p-500.png 500w, ../images/PLAICOS-LOGO-p-800.png 800w, ../images/PLAICOS-LOGO.png 1047w\" sizes=\"(max-width: 479px) 100vw, 107.99715423583984px\" alt=\"\" class=\"logo-image\"></a><div class=\"menu\"><nav role=\"navigation\" class=\"navigation-items w-nav-menu\"><a href=\"../index.html\" class=\"navigation-item w-nav-link\">HOMe</a><a href=\"../marketplace.html\" class=\"navigation-item w-nav-link\">marketplace</a><a href=\"../team.html\" class=\"navigation-item w-nav-link\">equipe</a><a href=\"../blog.html\" class=\"navigation-item w-nav-link\">Blog</a><a href=\"../contact.html\" class=\"navigation-item w-nav-link\">contato</a><a href=\"#\" class=\"nav-link w-nav-link\">CADASTRE-SE</a><a href=\"#\" class=\"nav-link-2 w-nav-link\">LOGIN</a></nav><div class=\"menu-button w-nav-button\"><img src=\"/public/images/menu-icon_1menu-icon.png\" width=\"22\" alt=\"\" class=\"menu-icon\"></div></div></div><div data-delay=\"0\" class=\"dropdown-2 w-dropdown\"><div class=\"dropdown-toggle-3 w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>MINHA CONTA</div></div><nav class=\"dropdown-list w-dropdown-list\"><a href=\"#\" class=\"w-dropdown-link\">MEU PERFIL</a><a href=\"../dashboard/dashboard.html\" class=\"w-dropdown-link\">DASHBOARD</a><a href=\"#\" class=\"w-dropdown-link\">SAIR</a></nav></div></div><div class=\"section-3\"></div><div><div class=\"container-7 w-container\"><div class=\"w-row\"><div class=\"w-col w-col-3\"><div><div class=\"div-block-59\"><img src=\"/public/images/user_profile_placeholder.svg\" alt=\"\"><p class=\"paragraph-48\">" +
    marko_escapeXml(data.company.company_name) +
    "</p><p class=\"paragraph-49\">" +
    marko_escapeXml(data.type) +
    "</p></div></div><ul class=\"list-10\"><li><p>- " +
    marko_escapeXml(data.login) +
    "</p></li><li><p>- RANK</p></li><li><p>- FANTASY NAME</p></li><li><a href=\"#\" class=\"button-20 w-button\">MUDAR FOTO</a></li></ul></div><div class=\"w-col w-col-6\"><div data-duration-in=\"300\" data-duration-out=\"100\" class=\"tabs-3 w-tabs\"><div class=\"w-tab-menu\"><a data-w-tab=\"Tab 1\" class=\"w-inline-block w-tab-link w--current\"><div>PRODUTOS</div></a><a data-w-tab=\"Tab 2\" class=\"w-inline-block w-tab-link\"><div>DADOS</div></a><a data-w-tab=\"Tab 3\" class=\"w-inline-block w-tab-link\"><div>FINANCEIRO</div></a></div><div class=\"w-tab-content\"><div data-w-tab=\"Tab 1\" class=\"tab-pane-tab-1-2 w-tab-pane w--tab-active\"><p class=\"paragraph-51\">PRODUTOS DO USUARIO</p><div class=\"div-block-65\"><div class=\"w-form\"><form id=\"email-form\" name=\"email-form\" data-name=\"Email Form\" class=\"form-8\"><label for=\"name\" class=\"field-label-14\">BUSCAR</label><input type=\"text\" class=\"text-field-11 w-input\" maxlength=\"256\" name=\"name\" data-name=\"Name\" id=\"name\"><a href=\"#\" class=\"button-18 w-button\">BUSCAR</a></form><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div><div class=\"div-block-66\"></div><div class=\"w-layout-grid\"><div class=\"div-block-61\"><p class=\"paragraph-52\">TITLE PRODUCT FOOBAR</p><p class=\"paragraph-53\">Função: Abrasivo Ardente</p><a href=\"#\" class=\"button-19 w-button\">VER</a></div><div class=\"div-block-61\"><p class=\"paragraph-52\">TITLE PRODUCT FOOBAR</p><p class=\"paragraph-53\">Função: Abrasivo Ardente</p><a href=\"#\" class=\"button-19 w-button\">VER</a></div></div></div><div data-w-tab=\"Tab 2\" class=\"w-tab-pane\"><div class=\"w-form\"><form id=\"email-form-2\" name=\"email-form-2\" data-name=\"Email Form 2\" class=\"form-9\"><label for=\"name-2\" class=\"field-label-17\">RAZÃO SOCIAL</label><div class=\"div-block-62\"><p class=\"paragraph-54\">" +
    marko_escapeXml(data.company.company_name) +
    "</p></div><label for=\"email\" class=\"field-label-21\">NOME FANTASIA</label><div class=\"div-block-62\"><p class=\"paragraph-55\">" +
    marko_escapeXml(data.company.fantasy_name) +
    "</p></div><label class=\"field-label-16\">cnpj</label><div class=\"div-block-62\"><p class=\"paragraph-55\">" +
    marko_escapeXml(data.company.cnpj) +
    "</p></div><label class=\"field-label-16\">porte</label><div class=\"div-block-62\"><p class=\"paragraph-55\">" +
    marko_escapeXml(data.company.size) +
    "</p></div><label class=\"field-label-18\">nome</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"field-2\" data-name=\"Field 2\" placeholder=\"Teu Nome\" id=\"field-2\" required=\"\"><label class=\"field-label-15\">EMAIL</label><label class=\"field-label-15\">EMAIL de recuperação</label><input type=\"email\" class=\"text-field-12 w-input\" maxlength=\"256\" name=\"email\" data-name=\"email\" placeholder=\"Email\" id=\"email-2\"" +
    marko_attr("value", "" + data.email) +
    " required=\"\"><input type=\"email\" class=\"text-field-12 w-input\" maxlength=\"256\" name=\"email-3\" data-name=\"Email 3\" placeholder=\"Email\" id=\"email-3\"" +
    marko_attr("value", "" + data.recovery_email) +
    " required=\"\"><label class=\"field-label-19\">VALOR MINIMO DE VENDAS</label><div class=\"div-block-63\"><p class=\"paragraph-56\">R$:</p><input type=\"text\" class=\"text-field-13 w-input\" maxlength=\"256\" name=\"field-3\" data-name=\"Field 3\" placeholder=\"VALOR EM R$\" id=\"field-3\" required=\"\"></div><div class=\"div-block-64\"><label class=\"field-label-20\">pis %</label><label class=\"field-label-20\">cofins %</label><label class=\"field-label-20\">ICMS %</label><input type=\"number\" class=\"text-field-14 w-input\" maxlength=\"256\" name=\"field-4\" data-name=\"Field 4\" placeholder=\"PIS %\" id=\"field-4\" required=\"\"><input type=\"number\" class=\"text-field-14 w-input\" maxlength=\"256\" name=\"field-4\" data-name=\"Field 4\" placeholder=\"COFINS %\" id=\"field-4\" required=\"\"><input type=\"number\" class=\"text-field-14 w-input\" maxlength=\"256\" name=\"field-4\" data-name=\"Field 4\" placeholder=\"ICMS %\" id=\"field-4\" required=\"\"></div><input type=\"submit\" value=\"EDITAR\" data-wait=\"Please wait...\" class=\"submit-button-5 w-button\"></form><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div><div data-w-tab=\"Tab 3\" class=\"w-tab-pane\"><p class=\"paragraph-57\">DADOS FINANCEIROS COM A PLAICOS</p><p class=\"paragraph-58\">PLANO ESCOLHIDO <span class=\"text-span-12\">" +
    marko_escapeXml(data.chosen_plan) +
    "</span></p></div></div></div></div><div class=\"w-col w-col-3\"><div><p class=\"paragraph-50\">ALGO</p></div><div></div></div></div></div></div><script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js\" type=\"text/javascript\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script src=\"/public/js/webflow.js\" type=\"text/javascript\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "132");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates/profile.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
