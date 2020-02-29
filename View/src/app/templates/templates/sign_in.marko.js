// Compiled using marko@4.18.44 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/sign_in.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html data-wf-page=\"5dcc8e08cf5310e960be4b89\" data-wf-site=\"5dcb535bc74abf03fdf7fcb7\"><head><meta charset=\"utf-8\"><title>SIGN IN</title><meta content=\"SIGN IN\" property=\"og:title\"><meta content=\"width=device-width, initial-scale=1\" name=\"viewport\"><meta content=\"Webflow\" name=\"generator\"><link href=\"/public/css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/webflow.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/plaicos.webflow.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\" type=\"text/javascript\"></script><script type=\"text/javascript\">WebFont.load({  google: {    families: [\"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic\"]  }});</script><script type=\"text/javascript\">!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);</script><link href=\"/public/images/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link href=\"/public/images/webclip.png\" rel=\"apple-touch-icon\"><script>\r\n    //window.onload = function() {\r\n        \r\n    //}\r\n</script></head><body>");

  component_globals_tag({}, out);

  out.w("<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-adm-dashboard w-nav\"><div class=\"navigation-wrap\"><a href=\"index.html\" class=\"logo-link w-nav-brand\"><img src=\"/public/images/PLAICOS-LOGO.png\" width=\"108\" srcset=\"/public/images/PLAICOS-LOGO-p-500.png 500w, /public/images/PLAICOS-LOGO-p-800.png 800w, images/PLAICOS-LOGO.png 1047w\" sizes=\"(max-width: 479px) 100vw, 107.99715423583984px\" alt=\"\" class=\"logo-image\"></a><div class=\"menu\"><nav role=\"navigation\" class=\"navigation-items w-nav-menu\"><a href=\"index.html\" class=\"navigation-item w-nav-link\">HOMe</a><a href=\"marketplace.html\" class=\"navigation-item w-nav-link\">marketplace</a><a href=\"team.html\" class=\"navigation-item w-nav-link\">equipe</a><a href=\"blog.html\" class=\"navigation-item w-nav-link\">Blog</a><a href=\"contact.html\" class=\"navigation-item w-nav-link\">contato</a><a href=\"#\" class=\"nav-link w-nav-link\">CADASTRE-SE</a><a href=\"#\" class=\"nav-link-2 w-nav-link\">LOGIN</a></nav><div class=\"menu-button w-nav-button\"><img src=\"/public/images/menu-icon_1menu-icon.png\" width=\"22\" alt=\"\" class=\"menu-icon\"></div></div></div><div data-delay=\"0\" class=\"dropdown-2 w-dropdown\"><div class=\"dropdown-toggle-3 w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>MINHA CONTA</div></div><nav class=\"dropdown-list w-dropdown-list\"><a href=\"#\" class=\"w-dropdown-link\">MEU PERFIL</a><a href=\"#\" class=\"w-dropdown-link\">DASHBOARD</a><a href=\"#\" class=\"w-dropdown-link\">SAIR</a></nav></div></div><div class=\"section-3\"></div><div class=\"section-8\"><div class=\"w-container\"><div data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c33e\" class=\"columns-2 w-row\"><div whenclicked=\"set_type('supplier')\" data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c33f\" class=\"column-10 w-col w-col-4\"><img src=\"/public/images/inventory.png\" alt=\"\" class=\"image-2\"><p class=\"paragraph-14\">FORNECEDOR</p></div><div class=\"column-12 w-col w-col-4\"><img src=\"https://d3e54v103j8qbb.cloudfront.net/plugins/Image/assets/placeholder.60f9b1840c.svg\" alt=\"\"><p class=\"paragraph-16\">INDUSTRIA COSMÉTICA</p></div><div class=\"column-12 w-col w-col-4\"><img src=\"https://d3e54v103j8qbb.cloudfront.net/plugins/Image/assets/placeholder.60f9b1840c.svg\" alt=\"\"><p class=\"paragraph-16\">TERCEIROS</p></div></div><div data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c34b\" style=\"-webkit-transform:translate3d(200%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(200%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(200%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(200%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);display:none\" class=\"div-block-13\"><div class=\"div-block-14\"><img src=\"/public/images/left-arrow.png\" data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c34d\" alt=\"\" class=\"image-3\"><h2 class=\"heading-5\">CADASTRO DE FORNECEDOR</h2></div><div class=\"div-block-20\"><p class=\"paragraph-17\">Preencha automaticamente os dados do formulário através de uma consulta de CNPJ (beta)</p><form action=\"/search\" class=\"search-6 w-form\"><input type=\"search\" class=\"search-input-3 w-input\" maxlength=\"256\" name=\"query\" placeholder=\"CNPJ\" id=\"cnpj-fullfilment-supplier\" required=\"\"><input type=\"button\" value=\"PREENCHER\" whenclicked=\"cnpj_fullfilment('cnpj-fullfilment-supplier', 'supplier-form')\" class=\"search-button-3 w-button\"></form></div><div id=\"form-error-boxes-supplier-form\" class=\"error-boxes\"><p class=\"paragraph-22\">CNPJ INVÁLIDO! ERRO: {erro}</p></div><div class=\"columns-copy\"><div id=\"\" class=\"w-form\"><form id=\"supplier-form\" name=\"wf-form-supplier-form\" data-name=\"supplier-form\"><div class=\"w-row\"><div class=\"w-col w-col-6\"><label for=\"company-name\">razão social</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"company_name\" data-name=\"Company Name\" placeholder=\"RAZÃO SOCIAL\" id=\"company-name\" required=\"\"><label for=\"fantasy_name\">nome fantasia</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"fantasy_name\" data-name=\"Fantasy Name\" placeholder=\"NOME FANTASIA\" id=\"fantasy_name-supplier-form\" required=\"\"><label for=\"cnpj\">cnpj</label><input type=\"number\" class=\"w-input\" maxlength=\"256\" name=\"cnpj\" data-name=\"Cnpj\" placeholder=\"CNPJ\" id=\"cnpj\" required=\"\"><label for=\"email\">inscrição estadual</label><input type=\"number\" class=\"w-input\" maxlength=\"256\" name=\"state_subsid\" data-name=\"Email 3\" placeholder=\"INSCRIÇÃO ESTADUAL\" id=\"email-3\" required=\"\"><label for=\"email\">VALOR MÍNIMO DE VENDAS</label><input type=\"number\" class=\"w-input\" maxlength=\"256\" name=\"minimal_sale_value\" data-name=\"Email 3\" placeholder=\"VALOR\" id=\"email-3\" required=\"\"><label for=\"pis\">PIS(%)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"pis\" data-name=\"pis\" placeholder=\"PIS (%)\" id=\"pis\" required=\"\"><label for=\"cofins\">COFINS (%)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"cofins\" data-name=\"cofins\" placeholder=\"COFINS (%)\" id=\"cofins\" required=\"\"><label for=\"icms\">ICMS (%)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"icms\" data-name=\"icms\" placeholder=\"ICMS (%)\" id=\"icms\" required=\"\"></div><div class=\"w-col w-col-6\"><label for=\"email\" class=\"field-label\">categoria fornecedor</label><div class=\"div-block-25\"><label class=\"radio-button-field-3 w-radio\"><input type=\"radio\" data-name=\"categoria\" name=\"category\" value=\"manufacturer\" class=\"w-form-formradioinput w-radio-input\"><span for=\"fabricante\" class=\"w-form-label\">Fabricante</span></label><label class=\"radio-button-field w-radio\"><input type=\"radio\" data-name=\"Fabricante\" name=\"category\" value=\"reseller\" class=\"w-form-formradioinput w-radio-input\"><span for=\"distribuidor\" class=\"w-form-label\">DISTRIBUIDOR</span></label><label class=\"radio-button-field-2 w-radio\"><input type=\"radio\" data-name=\"Fabricante\" id=\"f\" name=\"category\" value=\"both\" class=\"w-form-formradioinput w-radio-input\"><span for=\"full\" class=\"w-form-label\">AMBOS</span></label></div><label for=\"email\" class=\"field-label\">PORTE DA EMPRESA</label><div><select id=\"field\" name=\"size\" required=\"\" class=\"w-select\"><option value=\"small\">PEQUENA EMPRESA</option><option value=\"medium\">MÉDIA EMPRESA</option><option value=\"large\">MÉDIA-GRANDE EMPRESA</option><option value=\"micro\">MEI (micro empreendedor)</option></select></div><label for=\"name\">AFE (<span class=\"text-span\">CERTIFICADO DE AUTORIZAÇÃO DE FUNCIONAMENTO</span>)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"name-2\" data-name=\"Name 2\" id=\"name-2\"><label for=\"name\">CERTIFICAÇÕES ISO(anexo de documento)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"name-2\" data-name=\"Name 2\" id=\"name-2\"><label for=\"name\">OUTRAS CERTIFICAÇÕES (anexo de documento)</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"name-2\" data-name=\"Name 2\" id=\"name-2\"><label for=\"comercial_email-2\">EMAIL DE RECUPERÇÃO DE SENHA</label><input type=\"email\" class=\"w-input\" maxlength=\"256\" name=\"recovery_email\" data-name=\"comercial_email\" placeholder=\"EMAIL DE COTAÇÕES E CONTATO\" id=\"comercial_email-2\" required=\"\"><label for=\"email-6\">EMAIL cadastro</label><input type=\"email\" class=\"w-input\" maxlength=\"256\" name=\"email\" data-name=\"email\" placeholder=\"EMAIL DE CADASTRO\" id=\"email-6\"><label for=\"EMAIL\">ENDEREÇO</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"address\" data-name=\"EMAIL 5\" placeholder=\"ENDEREÇO\" id=\"EMAIL-5\"><label class=\"w-checkbox\"><input type=\"checkbox\" id=\"checkbox\" name=\"checkbox\" data-name=\"Checkbox\" class=\"w-checkbox-input\"><span class=\"w-form-label\">LI E ACEITO OS TERMOS DE PRIVACIDADE E USO. <span class=\"text-span-2\">termos</span></span></label></div></div><div class=\"div-block-28\"></div><div><div class=\"w-row\"><div class=\"w-col w-col-6\"><label for=\"login\">LOGIN</label><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"login\" data-name=\"login\" placeholder=\"SEU LOGIN\" id=\"login\" required=\"\"><p>Seu Login deverá ter, pelo menos, 10 carácteres.</p></div><div class=\"w-col w-col-6\"><label for=\"password\">SENHA</label><input type=\"password\" class=\"w-input\" maxlength=\"256\" name=\"password\" data-name=\"password\" placeholder=\"SUA SENHA\" id=\"password\" required=\"\"><p>Sua senha deverá ter, no mínimo, 15 caracteres. Pelo menos uma letra maiúscula e 1 número. Todos os caracteres UTF8 são permitidos.</p></div></div></div><a id=\"form-next-supplier-form\" whenclicked=\"plans()\" data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c375\" href=\"#\" class=\"button-11 w-button\">AVANÇAR</a><a id=\"form-next-fake-supplier-form\" data-w-id=\"cdc3a181-0939-8c7c-3a07-d3e78245d1d9\" href=\"#\" class=\"button-14 w-button\">AVANÇAR</a><a whenclicked=\"validate_form('supplier-form')\" href=\"#\" class=\"w-button\">VALIDAR FORMULÁRIO</a><input type=\"submit\" value=\"AVANÇAR\" data-wait=\"Please wait...\" data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c379\" class=\"submit-button w-button\"></form><div class=\"w-form-done\"><div>Thank you! Your submission has been received!</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div></div><div data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c3aa\" style=\"display:none\" class=\"div-block-22\"><img src=\"/public/images/left-arrow.png\" data-w-id=\"6a5bebe0-8692-b305-b633-7893eaa8c3ab\" alt=\"\" class=\"image-3\"><h3 class=\"heading-9\">Planos para o porte de sua empresa</h3><p class=\"paragraph-21\">Escolha o plano de acordo com o seu porte. Dica: Plano anual tem o preço melhor custo benefício</p><div class=\"error-boxes\"><p class=\"paragraph-22\">ERRO: {erro}</p></div><div id=\"plans-loading\" class=\"div-block-29\"><p class=\"paragraph-23\">CARREGANDO PLANOS.....</p></div><div id=\"plans-500-error\" class=\"div-block-30\"><img src=\"/public/images/500_error.png\" srcset=\"/public/images/500_error-p-500.png 500w, /public/images/500_error.png 800w\" sizes=\"100vw\" alt=\"\" class=\"image-5\"><p class=\"paragraph-24\">OOOPS.. ALGO DEU ERRADO</p><p class=\"paragraph-25\">UM ERRO INTERNO ACONTECEU EM NOSSO LADO, NÃO SE PREOCUPE EM BREVE CONSERTAREMOS O PROBLEMA. POR FAVOR, TENTE MAIS TARDE.</p></div><div class=\"div-block-26\" id=\"plans\"></div></div></div></div><div></div><script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js\" type=\"text/javascript\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script><input id=\"main-server\" hidden" +
    marko_attr("value", "" + data.links.main) +
    "><input id=\"view-server\" hidden" +
    marko_attr("value", "" + data.links.view) +
    "><script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script><script src=\"/public/js/webflow.js\" type=\"text/javascript\"></script><script src=\"/public/js/sign_in/sign_in.js\" type=\"text/javascript\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "152");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/sign_in.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };