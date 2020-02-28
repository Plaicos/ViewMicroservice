// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/suggestion-box/suggestion_box.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  if (data.length > 0) {
    var $for$0 = 0;

    marko_forEach(data, function(i) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<p class=\"paragraph-69\"" +
        marko_attr("value", "" + i.value) +
        ">" +
        marko_escapeXml(i.name) +
        "</p>");
    });
  } else {
    out.w("<p class=\"paragraph-69\" value=\"\">NENHUM RESULTADO</p>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/suggestion-box/suggestion_box.marko"
  };
