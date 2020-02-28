// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/plans.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"div-block-26\" id=\"plans\"><div>Tamanho de empresa: " +
    marko_escapeXml(data.size) +
    "</div><div class=\"w-row\"><div class=\"w-col w-col-4\"><div><h4 class=\"heading-12\">Trimestral</h4><div class=\"div-block-23\"></div><ul class=\"list-4\">");

  var $for$0 = 0;

  marko_forEach(data.quarterly.benefits, function(benefit) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<li>" +
      marko_escapeXml(benefit) +
      "</li>");
  });

  out.w("</ul><div class=\"div-block-23\"></div><h1>R$ " +
    marko_escapeXml(data.quarterly.price) +
    "</h1></div><a href=\"#\" class=\"button-12 w-button\" onclick=\"select_plan('quarterly')\">SELECIONAR</a></div><div class=\"w-col w-col-4\"><div><h4 class=\"heading-12\">Semestral</h4><div class=\"div-block-23\"></div><ul class=\"list-4\">");

  var $for$1 = 0;

  marko_forEach(data.semianual.benefits, function(benefit) {
    var $keyScope$1 = "[" + (($for$1++) + "]");

    out.w("<li>" +
      marko_escapeXml(benefit) +
      "</li>");
  });

  out.w("</ul><div class=\"div-block-23\"></div><h1>R$ " +
    marko_escapeXml(data.semianual.price) +
    "</h1></div><a href=\"#\" class=\"button-12 w-button\" onclick=\"select_plan('semianual')\">SELECIONAR</a></div><div class=\"w-col w-col-4\"><div><h4 class=\"heading-12\">ANUAL</h4><div class=\"div-block-23\"></div><ul class=\"list-4\">");

  var $for$2 = 0;

  marko_forEach(data.anual.benefits, function(benefit) {
    var $keyScope$2 = "[" + (($for$2++) + "]");

    out.w("<li>" +
      marko_escapeXml(benefit) +
      "</li>");
  });

  out.w("</ul><div class=\"div-block-23\"></div><h1>R$ " +
    marko_escapeXml(data.anual.price) +
    "</h1></div><a href=\"#\" class=\"button-12 w-button\" onclick=\"select_plan('anual')\">SELECIONAR</a></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/plans.marko"
  };
