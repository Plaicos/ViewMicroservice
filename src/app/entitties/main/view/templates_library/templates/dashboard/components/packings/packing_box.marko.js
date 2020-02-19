// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/packings/packing_box.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  if (data.isEdit === true) {
    out.w("<div data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21473\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21473&amp;quot;]\" class=\"packing-div-edit\"" +
      marko_attr("id", (data.name + "-") + data.counter) +
      "><p data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21474\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21474&amp;quot;]\" class=\"paragraph-72\">PESO:</p><input class=\"packing-text-input-edit w-input\" maxlength=\"256\" name=\"weigth\" data-name=\"Field 20\" placeholder=\"?\" data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21476\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21476&amp;quot;]\" type=\"number\"" +
      marko_attr("id", ((data.name + "-") + data.counter) + "-weigth") +
      " required=\"\"><p data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21477\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21477&amp;quot;]\" class=\"paragraph-73\">KG</p><a data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21479\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21479&amp;quot;]\" href=\"#\" class=\"button-24 w-button\" onclick=\"update_rawMaterial_packing(this.parentElement)\">EDITAR</a></div>");
  } else {
    out.w("<div data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed2146b\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed2146b&amp;quot;]\" class=\"packing-div\"" +
      marko_attr("id", (data.name + "-") + data.counter) +
      " onclick=\"edit_rawMaterial_packing(this);\"><p data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed2146c\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed2146c&amp;quot;]\" class=\"paragraph-72\">PESO:</p><input class=\"packing-text-input-copy w-input\" maxlength=\"256\" name=\"weigth\" data-name=\"Field 20\" placeholder=\"?\" data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed2146e\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed2146e&amp;quot;]\" type=\"number\" id=\"field-20\" required=\"\"><div data-w-id=\"493beda7-79bc-c566-0408-64bd144faa80\" data-wf-id=\"[&amp;quot;493beda7-79bc-c566-0408-64bd144faa80&amp;quot;]\" class=\"div-block-90\"><p data-w-id=\"5a6a78da-0c7e-0816-55c3-e3dfcd6e6c0f\" data-wf-id=\"[&amp;quot;5a6a78da-0c7e-0816-55c3-e3dfcd6e6c0f&amp;quot;]\">" +
      marko_escapeXml(data.value) +
      "</p></div><p data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed2146f\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed2146f&amp;quot;]\" class=\"paragraph-73\">KG</p><a data-w-id=\"31092d1b-fe12-d9a5-9cd5-59498ed21471\" data-wf-id=\"[&amp;quot;31092d1b-fe12-d9a5-9cd5-59498ed21471&amp;quot;]\" href=\"#\" class=\"button-24 w-button\" onclick=\"delete_rawMaterial_packing(this.parentElement)\">DELETAR</a></div>");
  }
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/view_microservice$1.0.0/src/app/entitties/main/view/templates_library/templates/dashboard/components/packings/packing_box.marko"
  };
