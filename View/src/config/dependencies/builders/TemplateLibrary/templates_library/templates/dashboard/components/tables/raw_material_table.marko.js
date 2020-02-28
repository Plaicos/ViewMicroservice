// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/tables/raw_material_table.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  var $for$0 = 0;

  marko_forEach(data, function(i) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div id=\"the-row-man\" class=\"product-table-row\"><p class=\"paragraph-78\">" +
      marko_escapeXml(i.name) +
      "</p><p class=\"paragraph-78\">" +
      marko_escapeXml(i.inci_name) +
      "</p><p class=\"paragraph-78\">" +
      marko_escapeXml(i.functions) +
      "</p><p class=\"paragraph-78\">" +
      marko_escapeXml(i.application) +
      "</p><p class=\"paragraph-78\">" +
      marko_escapeXml(i.origin) +
      "</p><p class=\"paragraph-78\">" +
      marko_escapeXml(i.manufacturer) +
      "</p></div>");
  });
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/tables/raw_material_table.marko"
  };
