// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/checkout.marko",
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

  out.w("<!DOCTYPE html><html data-wf-page=\"5dd2e3afd8e6f233ddc909b7\" data-wf-site=\"5dcb535bc74abf03fdf7fcb7\"><head><meta charset=\"utf-8\"><title>checkout</title><meta content=\"checkout\" property=\"og:title\"><meta content=\"width=device-width, initial-scale=1\" name=\"viewport\"><meta content=\"Webflow\" name=\"generator\"><link href=\"/public/css/normalize.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/webflow.css\" rel=\"stylesheet\" type=\"text/css\"><link href=\"/public/css/plaicos.webflow.css\" rel=\"stylesheet\" type=\"text/css\"><script src=\"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js\" type=\"text/javascript\"></script><script type=\"text/javascript\">WebFont.load({  google: {    families: [\"Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic\"]  }});</script><script type=\"text/javascript\">!function(o,c){var n=c.documentElement,t=\" w-mod-\";n.className+=t+\"js\",(\"ontouchstart\"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+\"touch\")}(window,document);</script><link href=\"/public/images/favicon.ico\" rel=\"shortcut icon\" type=\"image/x-icon\"><link href=\"/public/images/webclip.png\" rel=\"apple-touch-icon\"></head><body class=\"body-2\">");

  component_globals_tag({}, out);

  out.w("<div data-collapse=\"medium\" data-animation=\"default\" data-duration=\"400\" class=\"navigation-adm-dashboard w-nav\"><div class=\"navigation-wrap\"><a href=\"index.html\" class=\"logo-link w-nav-brand\"><img src=\"/public/images/PLAICOS-LOGO.png\" width=\"108\" srcset=\"/public/images/PLAICOS-LOGO-p-500.png 500w, /public/images/PLAICOS-LOGO-p-800.png 800w, /public/images/PLAICOS-LOGO.png 1047w\" sizes=\"(max-width: 479px) 100vw, 107.99715423583984px\" alt=\"\" class=\"logo-image\"></a><div class=\"menu\"><nav role=\"navigation\" class=\"navigation-items w-nav-menu\"><a href=\"index.html\" class=\"navigation-item w-nav-link\">HOMe</a><a href=\"marketplace.html\" class=\"navigation-item w-nav-link\">marketplace</a><a href=\"team.html\" class=\"navigation-item w-nav-link\">equipe</a><a href=\"blog.html\" class=\"navigation-item w-nav-link\">Blog</a><a href=\"contact.html\" class=\"navigation-item w-nav-link\">contato</a><a href=\"#\" class=\"nav-link w-nav-link\">CADASTRE-SE</a><a href=\"#\" class=\"nav-link-2 w-nav-link\">LOGIN</a></nav><div class=\"menu-button w-nav-button\"><img src=\"/public/images/menu-icon_1menu-icon.png\" width=\"22\" alt=\"\" class=\"menu-icon\"></div></div></div><div data-delay=\"0\" class=\"dropdown-2 w-dropdown\"><div class=\"dropdown-toggle-3 w-dropdown-toggle\"><div class=\"w-icon-dropdown-toggle\"></div><div>MINHA CONTA</div></div><nav class=\"dropdown-list w-dropdown-list\"><a href=\"#\" class=\"w-dropdown-link\">MEU PERFIL</a><a href=\"#\" class=\"w-dropdown-link\">DASHBOARD</a><a href=\"#\" class=\"w-dropdown-link\">SAIR</a></nav></div></div><div class=\"section-3\"></div><div class=\"section-10\"><h3 class=\"heading-8\">Revise seus dados</h3><div class=\"columns-3 w-row\"><div class=\"column-14 w-col w-col-3\"><p class=\"paragraph-27\">TIPO DE CONTA</p>");

  if (data.sign_in_data.type === "supplier") {
    out.w("<p class=\"paragraph-28\">FORNECEDOR</p>");
  }

  if (data.sign_in_data === "cosmetic industri") {
    out.w("<p class=\"paragraph-28\">INDUSTRIA COSMETICA</p>");
  }

  if (data.sign_in_data === "") {
    out.w("<p class=\"paragraph-28\">TERCEIROS</p>");
  }

  out.w("</div><div class=\"column-15 w-col w-col-6\"><p class=\"paragraph-29\">DADOS DE CADASTRO</p><ul class=\"list-5 w-list-unstyled\"><li><p class=\"paragraph-30\">EMAIL:<span class=\"text-span-5\">" +
    marko_escapeXml(data.company.email) +
    "</span></p></li><li><p>PORTE:<span class=\"text-span-4\">MÉDIA-GRANDE</span></p><div class=\"div-block-31\"></div></li><li><p>NOME DA EMPRESA:<span class=\"text-span-3\">" +
    marko_escapeXml(data.company.company_name) +
    "</span></p><div class=\"div-block-31\"></div></li><li><p>CNPJ: <span class=\"text-span-8\">" +
    marko_escapeXml(data.company.cnpj) +
    "</span></p><div class=\"div-block-31\"></div></li><li><p>LOGIN: <span class=\"text-span-7\">" +
    marko_escapeXml(data.sign_in_data.login) +
    "</span></p><div class=\"div-block-31\"></div></li><li>SENHA: <span class=\"text-span-6\">" +
    marko_escapeXml(data.sign_in_data.password) +
    "</span></li></ul></div><div class=\"w-col w-col-3\"><ul class=\"list-7\"><li><p>PLANO ESCOLHIDO: <span class=\"text-span-9\">" +
    marko_escapeXml(data.sign_in_data.chosen_plan) +
    "</span></p><div class=\"div-block-31\"></div></li><li><p>PREÇO: R$ 0</p></li></ul></div></div><div class=\"div-block-32\"><p class=\"paragraph-31\">Seus dados estão errados? Clique aqui para voltar ao formulário de cadastro</p><a href=\"#\" class=\"button-15 w-button\">VOLTAR</a></div></div><div><div class=\"container-3 w-container\"><h1 class=\"heading-6\">Checkout</h1><p class=\"paragraph-17\">Quase lá! Escolha seu método de pagamento de preferencia</p></div></div><div class=\"container-4 w-container\"><p class=\"paragraph-18\">Quer saber sobre a segurança dessa transação e para onde vão seus dados?</p><a href=\"#\" class=\"button-8 w-button\">Saiba Mais</a></div><div class=\"w-container\"><div data-duration-in=\"400\" data-duration-out=\"100\" data-easing=\"ease-in-out\" class=\"tabs w-tabs\"><div class=\"tabs-menu-2 w-tab-menu\"><a data-w-tab=\"Tab 1\" whenclicked=\"set_payment_method('credit_card')\" class=\"tab-link-tab-1 w-inline-block w-tab-link w--current\"><div>Cartão de Crédito</div></a><a data-w-tab=\"Tab 2\" class=\"tab-link-tab-2 w-inline-block w-tab-link\"><div>Tab 2</div></a><a data-w-tab=\"Tab 3\" class=\"tab-link-tab-3 w-inline-block w-tab-link\"><div>Tab 3</div></a></div><div class=\"tabs-content w-tab-content\"><div data-w-tab=\"Tab 1\" class=\"w-tab-pane w--tab-active\"><div class=\"form-block-3 w-form\"><form id=\"payment-form\" name=\"wf-form-Email-Form\" data-name=\"Email Form\" class=\"form-3\"><label for=\"node\">nome no cartão</label><input type=\"text\" maxlength=\"256\" required=\"\" id=\"card-name\" class=\"w-input\"><label for=\"node\">email</label><input type=\"email\" maxlength=\"256\" required=\"\" id=\"card-email\" class=\"w-input\"><div class=\"div-block-17\"><label class=\"field-label-4\">numero do cartão</label><label class=\"field-label-5\">vencimento mes</label><label class=\"field-label-5\">vencimento ano</label><label for=\"node-2\" class=\"field-label-5\">código</label><input type=\"text\" maxlength=\"256\" placeholder=\"Example Text\" id=\"card-number\" required=\"\" class=\"text-field-6 w-input\"><select id=\"card-expire-month\" class=\"select-field-2 w-select\"><option value=\"01\">01</option><option value=\"02\">02</option><option value=\"03\">03</option><option value=\"04\">04</option><option value=\"05\">05</option><option value=\"06\">06</option><option value=\"07\">07</option><option value=\"08\">08</option><option value=\"09\">09</option><option value=\"10\">10</option><option value=\"11\">11</option><option value=\"12\">12</option></select><input type=\"number\" maxlength=\"256\" placeholder=\"Example Text\" id=\"card-expire-year\" required=\"\" class=\"text-field-5 w-input\"><input type=\"number\" maxlength=\"256\" placeholder=\"Example Text\" id=\"card-code\" required=\"\" class=\"text-field-5 w-input\"></div><div class=\"div-block-18\"><label class=\"field-label-6\">numero do documento</label><label for=\"node-6\" class=\"field-label-7\">tipo do documento</label><input type=\"number\" maxlength=\"256\" placeholder=\"Example Text\" id=\"document-number\" required=\"\" class=\"text-field-7 w-input\"><select id=\"document-type\" required=\"\" class=\"select-field w-select\"><option value=\"cpf\">CPF?</option></select></div><input type=\"text\" class=\"w-input\" maxlength=\"256\" name=\"paymentMethodId\" data-name=\"paymentMethodId\" placeholder=\"method id\" id=\"paymentMethodId\" required=\"\"><div class=\"w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key\"></div><div class=\"div-block-19\"><p class=\"paragraph-19\">Plano Selecionado: Mensal-R$ 350,00</p><a href=\"#\" class=\"button-9 w-button\">MUDAR</a></div><input type=\"button\" value=\"PAGAR\" data-wait=\"Please wait...\" whenclicked=\"pay()\" class=\"submit-button-3 w-button\"></form><div class=\"w-form-done\"><div>Pagamento processado com sucesso! Sua conta foi criada</div></div><div class=\"w-form-fail\"><div>Oops! Something went wrong while submitting the form.</div></div></div></div><div data-w-tab=\"Tab 2\" class=\"w-tab-pane\"></div><div data-w-tab=\"Tab 3\" class=\"w-tab-pane\"></div></div></div></div><script src=\"https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js\" type=\"text/javascript\" integrity=\"sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=\" crossorigin=\"anonymous\"></script><script src=\"/public/js/webflow.js\" type=\"text/javascript\"></script><script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script><script src=\"/public/js/checkout/checkout.js\" defer=\"\"></script><script src=\"https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js\" async=\"\"></script><script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script><input id=\"main-server-link\"" +
    marko_attr("value", "" + data.links.main) +
    "><input id=\"view-server-link\"" +
    marko_attr("value", "" + data.links.view) +
    "><input id=\"subscription-data\"" +
    marko_attr("value", "" + data.subscription_data) +
    "><script src=\"https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "146");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/checkout.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
