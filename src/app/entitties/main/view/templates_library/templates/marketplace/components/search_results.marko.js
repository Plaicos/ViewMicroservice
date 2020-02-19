// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/marketplace/components/search_results.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"t-head\"><div class=\"header-row\"><div class=\"field\"><p><span class=\"text-span-17\">INCI NAME</span></p></div><div class=\"field\"><p>TITULO</p></div><div class=\"field\"><p>CIDADE</p></div><div class=\"field\"><p><span class=\"text-span-17\">ESTADO</span></p></div><div class=\"field\"><p><span class=\"text-span-17\">LEAD TIME</span></p></div><div class=\"field\"><p>ORIGEM</p></div><div class=\"field\"><p>DISPONIBILIDADE</p></div><div class=\"field\"><p><span class=\"text-span-17\">APLICAÇÃO</span></p></div></div></div><div class=\"t-body\">");

  var $for$0 = 0;

  marko_forEach(data, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"row\"><div class=\"field\"><p>" +
      marko_escapeXml(i.product.inci_name) +
      "</p></div><div class=\"field\"><p>" +
      marko_escapeXml(i.title) +
      "</p></div><div class=\"field\"><p>" +
      marko_escapeXml(i.location.city) +
      "</p></div><div class=\"field\"><p><span class=\"text-span-17\">" +
      marko_escapeXml(i.location.state) +
      "</span></p></div><div class=\"field\"><p>" +
      marko_escapeXml(i.product.lead_time) +
      "</p></div><div class=\"field\"><p>" +
      marko_escapeXml(i.product.origin) +
      "</p></div><div class=\"field\"><p>" +
      marko_escapeXml(i.product.availability) +
      "</p></div><div class=\"field\"><p><span class=\"text-span-17\">" +
      marko_escapeXml(i.product.application) +
      "</span></p></div></div>");
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/marketplace/components/search_results.marko"
  };
