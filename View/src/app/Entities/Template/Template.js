module.exports = class Template {
    constructor(html) {
        this.html = html
        this.entities = require("./SubEntities/entities")
    }

    build() {
        let { html, entities } = this
        let Template = {}

        try {
            Template.html = entities.html(html)
            Template.__proto__.pack = this.pack()

            return Template
        }
        catch (erro) {
            throw (erro)
        }
    }

    pack(){
        return function(){
            this.html = JSON.stringify(this.html)
        }
    }
}