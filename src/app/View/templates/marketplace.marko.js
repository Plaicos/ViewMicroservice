// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/marketplace.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html data-wf-page=\"5dcb535bc74abf238df7fcc6\" data-wf-site=\"5dcb535bc74abf03fdf7fcb7\"><head><meta charset=\"utf-8\"><title>Projects</title><meta content=\"Projects\" property=\"og:title\"><meta content=\"width=device-width, initial-scale=1\" name=\"viewport\"><meta content=\"Webflow\" name=\"generator\"><link href=\"/public/css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/webflow.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public//css/plaicos.webflow.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"/public/js/marketplace/marketplace.js\" type=\"text/javascript\"></script><script src=\"/public/js/tools_pack.js\" type=\"text/javascript\"></script><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\" type=\"text/javascript\"></script><script type=\"text/javascript\">WebFont.load({  google: {    families: [\"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic\"]  }});</script><script type=\"text/javascript\">!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);</script><link href=\"/public//images/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link href=\"/public//images/webclip.png\" rel=\"apple-touch-icon\"></head><body class=\"body\">");

  component_globals_tag({}, out);

  out.w("<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-adm-dashboard w-nav\"><div class=\"navigation-wrap\"><a href=\"../index.html\" class=\"logo-link w-nav-brand\"><img src=\"/public/images/PLAICOS-LOGO.png\" width=\"108\" srcset=\"/public/images/PLAICOS-LOGO-p-500.png 500w, /public/images/PLAICOS-LOGO-p-800.png 800w, /public/images/PLAICOS-LOGO.png 1047w\" sizes=\"107.99715423583984px\" alt=\"\" class=\"logo-image\"></a><div class=\"menu\"><nav role=\"navigation\" class=\"navigation-items w-nav-menu\"><a href=\"../index.html\" class=\"navigation-item w-nav-link\">HOMe</a><a href=\"../marketplace/marketplace.html\" class=\"navigation-item w-nav-link w--current\">marketplace</a><a href=\"../team.html\" class=\"navigation-item w-nav-link\">equipe</a><a href=\"../blog.html\" class=\"navigation-item w-nav-link\">Blog</a><a href=\"../contact.html\" class=\"navigation-item w-nav-link\">contato</a><a href=\"#\" class=\"nav-link w-nav-link\">CADASTRE-SE</a><a href=\"#\" class=\"nav-link-2 w-nav-link\">LOGIN</a></nav><div class=\"menu-button w-nav-button\"><img src=\"/public/images/menu-icon_1menu-icon.png\" width=\"22\" alt=\"\" class=\"menu-icon\"></div></div></div><div data-delay=\"0\" class=\"dropdown-2 w-dropdown\"><div class=\"dropdown-toggle-3 w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>MINHA CONTA</div></div><nav class=\"dropdown-list w-dropdown-list\"><a href=\"#\" class=\"w-dropdown-link\">MEU PERFIL</a><a href=\"../dashboard/dashboard.html\" class=\"w-dropdown-link\">DASHBOARD</a><a href=\"#\" class=\"w-dropdown-link\">SAIR</a></nav></div></div><div class=\"section-3\"></div><div class=\"section-2\"><ul class=\"list-2 w-list-unstyled\"><li class=\"list-item-4\"><div data-delay=\"0\" class=\"w-dropdown\"><div class=\"dropdown-toggle w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>BUSCO POR</div></div><nav class=\"w-dropdown-list\"><a href=\"#\" class=\"w-dropdown-link\">MATERIAIS</a><a href=\"#\" class=\"w-dropdown-link\">PRODUTOS</a></nav></div></li><li class=\"list-item-2\"><a href=\"#\" class=\"button-6 w-button\">DESTAQUES</a></li><li class=\"list-item-2\"><a href=\"#\" class=\"button-6 w-button\">MAIS VENDIDOS</a></li><li class=\"list-item-2\"><a href=\"#\" class=\"button-6 w-button\">LIMITADOS</a></li><li class=\"list-item-2\"><a href=\"#\" class=\"button-6 w-button\">ANUNCIAR</a></li><li class=\"list-item-3\"></li></ul></div><div class=\"section-4\"><div class=\"div-block-99\"><div class=\"w-form\"><form id=\"search-filters\" name=\"email-form-5\" data-name=\"Email Form 5\"><div class=\"columns-8 w-row\"><div class=\"w-col w-col-6\"><label for=\"inci_name-2\">inci name</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"inci_name\" data-name=\"inci_name\" id=\"inci_name-2\" onkeyup=\"inci_name_suggestion_box('inci_name-2')\"><div id=\"product-listing-inci-name-suggestion\" class=\"suggestion-box\"><p class=\"paragraph-69\">INCI NAME SUGESTION</p><p class=\"paragraph-69\">INCI NAME SUGESTION</p><div class=\"loading-animation w-embed\"></div></div><label for=\"title\">titulo do anúncio</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"title\" data-name=\"title\" placeholder=\"Example Text\" id=\"title\" required=\"\"><div class=\"div-block-107\"><div class=\"div-block-108\"><label for=\"origin\">origem</label><select id=\"origin\" name=\"origin\" data-name=\"origin\" class=\"w-select\"><option value=\"\">Select one...</option>");

  var $for$0 = 0;

  marko_forEach(data.system.origins, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i.origin) +
      ">" +
      marko_escapeXml(i.origin) +
      "</option>");
  });

  out.w("</select></div><div class=\"div-block-109\"><label for=\"user\">usuario (login)</label><input type=\"text\" class=\"text-field-27 w-input\" maxlength=\"256\" name=\"user\" data-name=\"user\" placeholder=\"Example Text\" id=\"user\" required=\"\"></div></div><div class=\"div-block-96\"><label class=\"field-label-31\">estado</label><label for=\"state\" class=\"field-label-28\">cidade</label><select id=\"state\" name=\"state\" data-name=\"state\" class=\"select-field-9 w-select\"><option value=\"\">Estado</option>");

  var $for$1 = 0;

  marko_forEach(data.system.locations.state, function(i) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i.name) +
      ">" +
      marko_escapeXml(i.name) +
      "</option>");
  });

  out.w("</select><select id=\"city\" name=\"city\" data-name=\"city\" class=\"select-field-8 w-select\"><option value=\"\">Cidade</option>");

  var $for$2 = 0;

  marko_forEach(data.system.locations.cities, function(i) {
    var $keyScope$2 = "[" + (($for$2++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i.name) +
      ">" +
      marko_escapeXml(i.name) +
      "</option>");
  });

  out.w("</select></div><label for=\"functions\">funções</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"functions\" data-name=\"functions\" placeholder=\"Example Text\" id=\"functions\" required=\"\"></div><div class=\"w-col w-col-6\"><div class=\"div-block-106\"><div class=\"div-block-104\"><label for=\"type\">tipo</label><select id=\"type\" name=\"type\" data-name=\"type\" class=\"w-select\"><option value=\"\">Select one...</option>");

  var $for$3 = 0;

  marko_forEach(data.system.types, function(i) {
    var $keyScope$3 = "[" + (($for$3++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i) +
      ">" +
      marko_escapeXml(i) +
      "</option>");
  });

  out.w("</select></div><div class=\"div-block-105\"><label for=\"application\">aplicação</label><select id=\"application\" name=\"application\" data-name=\"application\" class=\"w-select\"><option value=\"\">Select one...</option>");

  var $for$4 = 0;

  marko_forEach(data.system.applications, function(i) {
    var $keyScope$4 = "[" + (($for$4++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i.name) +
      ">" +
      marko_escapeXml(i.name) +
      "</option>");
  });

  out.w("</select></div></div><div class=\"div-block-102\"><div class=\"div-block-88\"><label class=\"field-label-27\">disponibilidade</label><label class=\"radio-button-field-5 w-radio\"><input type=\"radio\" data-name=\"availability\" id=\"always\" name=\"availability\" value=\"always\" class=\"w-form-formradioinput w-radio-input\"><span for=\"always\" class=\"w-form-label\">SEMPRE EM ESTOQUE</span></label><label class=\"w-radio\"><input type=\"radio\" data-name=\"availability\" id=\"on_demand\" name=\"availability\" value=\"on_demand\" class=\"w-form-formradioinput w-radio-input\"><span for=\"on_demand\" class=\"w-form-label\">Sob ENCOMENDA</span></label></div><div class=\"div-block-103\"><label for=\"made_in\" class=\"field-label-34\">pais de fabricação</label><select id=\"made_in\" name=\"made_in\" data-name=\"made_in\" class=\"select-field-10 w-select\"><option value=\"\">Select one...</option>");

  var $for$5 = 0;

  marko_forEach(data.system.made_in, function(i) {
    var $keyScope$5 = "[" + (($for$5++) + "]");

    out.w("<option" +
      marko_attr("value", "" + i.name) +
      ">" +
      marko_escapeXml(i.name) +
      "</option>");
  });

  out.w("</select></div></div><label for=\"manufacturer\">fabricante</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"manufacturer\" data-name=\"manufacturer\" placeholder=\"Example Text\" id=\"manufacturer\" required=\"\"><div class=\"div-block-101\"><label for=\"shelf_life\" class=\"field-label-32\">SHELF LIFE</label><label for=\"shelf_life-2\" class=\"field-label-33\">lead time</label><input type=\"number\" class=\"text-field-26 w-input\" maxlength=\"256\" name=\"shelf_life\" data-name=\"shelf_life\" placeholder=\"Example Text\" id=\"shelf_life-2\" required=\"\"><input type=\"number\" class=\"text-field-25 w-input\" maxlength=\"256\" name=\"lead_time\" data-name=\"lead_time\" placeholder=\"Example Text\" id=\"lead_time\" required=\"\"></div><label for=\"free_from\">livre dê</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"free_from\" data-name=\"free_from\" placeholder=\"Example Text\" id=\"free_from\" required=\"\"></div></div><div class=\"div-block-97\"><label class=\"field-label-29\">paginação da mesa</label><label for=\"limit-2\" class=\"field-label-30\">limit</label><input type=\"number\" class=\"prosucts-table-filters-pagination w-input\" maxlength=\"256\" name=\"limit\" data-name=\"limit\" placeholder=\"Example Text\" id=\"limit-2\" required=\"\"><label for=\"offset\" class=\"field-label-30\">OFFSET:</label><input type=\"number\" class=\"prosucts-table-filters-pagination w-input\" maxlength=\"256\" name=\"offset\" data-name=\"offset\" placeholder=\"Example Text\" id=\"prosucts-table-filters-pagination\" required=\"\"></div><a href=\"#\" class=\"button-26 w-button\" onclick=\"Search()\">ATUALIZAR</a></form><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div><div class=\"w-form\"><form id=\"filters-toggle\" name=\"email-form\" data-name=\"Email Form\"><div class=\"div-block-100\"><p class=\"paragraph-82\">SELECIONE OS CAMPOS QUE DESEJA VIZUALISAR (BETA)</p><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-2\" name=\"checkbox-2\" data-name=\"Checkbox 2\" class=\"w-checkbox-input\"><span class=\"w-form-label\">nome</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" data-name=\"Checkbox\" class=\"w-checkbox-input\"><span class=\"w-form-label\">localização</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-2\" name=\"checkbox-2\" data-name=\"Checkbox 2\" class=\"w-checkbox-input\"><span class=\"w-form-label\">fabricante</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"Inci Name\" name=\"Inci-Name\" data-name=\"Inci Name\" class=\"w-checkbox-input\"><span for=\"Inci Name\" class=\"w-form-label\">origem</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-3\" name=\"checkbox-3\" data-name=\"Checkbox 3\" class=\"w-checkbox-input\"><span class=\"w-form-label\">pais de fab</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-4\" name=\"checkbox-4\" data-name=\"Checkbox 4\" class=\"w-checkbox-input\"><span class=\"w-form-label\">aplicação</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-5\" name=\"checkbox-5\" data-name=\"Checkbox 5\" class=\"w-checkbox-input\"><span class=\"w-form-label\">tipo</span></label><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox-6\" name=\"checkbox-6\" data-name=\"Checkbox 6\" class=\"w-checkbox-input\"><span class=\"w-form-label\">shelf life</span></label></div></form><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div><div id=\"search-result\"><div class=\"t-head\"><div class=\"header-row\"><div class=\"field\"><p><span class=\"text-span-17\">INCI NAME</span></p></div><div class=\"field\"><p>TITULO</p></div><div class=\"field\"><p>CIDADE</p></div><div class=\"field\"><p><span class=\"text-span-17\">ESTADO</span></p></div><div class=\"field\"><p><span class=\"text-span-17\">LEAD TIME</span></p></div><div class=\"field\"><p>ORIGEM</p></div><div class=\"field\"><p>DISPONIBILIDADE</p></div><div class=\"field\"><p><span class=\"text-span-17\">APLICAÇÃO</span></p></div></div></div><div class=\"t-body\"><div class=\"row\"><div class=\"field\"><p>GLASS</p></div><div class=\"field\"><p>Vidro Temperado?</p></div><div class=\"field\"><p>São Paulo</p></div><div class=\"field\"><p><span class=\"text-span-17\">São Paulo</span></p></div><div class=\"field\"><p>4 dias</p></div><div class=\"field\"><p>Animal</p></div><div class=\"field\"><p>Em Estoque</p></div><div class=\"field\"><p><span class=\"text-span-17\">Janelas</span></p></div></div><div class=\"row\"><div class=\"field\"><p>GLASS</p></div><div class=\"field\"><p>Vidro Temperado?</p></div><div class=\"field\"><p>São Paulo</p></div><div class=\"field\"><p><span class=\"text-span-17\">São Paulo</span></p></div><div class=\"field\"><p>4 dias</p></div><div class=\"field\"><p>Animal</p></div><div class=\"field\"><p>Em Estoque</p></div><div class=\"field\"><p><span class=\"text-span-17\">Janelas</span></p></div></div><div class=\"row\"><div class=\"field\"><p>GLASS</p></div><div class=\"field\"><p>Vidro Temperado?</p></div><div class=\"field\"><p>São Paulo</p></div><div class=\"field\"><p><span class=\"text-span-17\">São Paulo</span></p></div><div class=\"field\"><p>4 dias</p></div><div class=\"field\"><p>Animal</p></div><div class=\"field\"><p>Em Estoque</p></div><div class=\"field\"><p><span class=\"text-span-17\">Janelas</span></p></div></div></div></div><div id=\"error-notification\" class=\"error-notification\"><p class=\"paragraph-75\">ERRO NA MATRIX</p><p id=\"error-notification-message\" class=\"paragraph-76\">SEARCH PARAMS MUST BE AN OBJECT</p><p class=\"paragraph-77\">STATUS: <span id=\"error-notification-status\" class=\"text-span-14\">400</span></p></div><script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js\" type=\"text/javascript\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script src=\"/public/js/webflow.js\" type=\"text/javascript\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.1/axios.min.js\" type=\"text/javascript\"></script><div id=\"main_server_link\"" +
    marko_attr("value", "" + data.links.main) +
    "></div><div id=\"view_server_link\"" +
    marko_attr("value", "" + data.links.view) +
    "></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "256");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/marketplace.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
