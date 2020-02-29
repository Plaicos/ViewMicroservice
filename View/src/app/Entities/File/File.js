module.exports = class File {
    constructor({ path, root }) {
        this.path = path
        this.root = root
    }

    load() {
        let fs = require("fs")
        let { path, root } = this

        if(!path || typeof path !== "string"){
            throw(Error("Fle path must be a valid string"))
        }

        try {
            let File = fs.readFileSync(`${root}${path}`, "binary")
            File.__proto__.pack = this.pack()
            return File;
        }
        catch (erro) {
            throw(erro)
        }
    }

    pack(){
        return function() {
            this = this.toJSON()
        }
    }

}