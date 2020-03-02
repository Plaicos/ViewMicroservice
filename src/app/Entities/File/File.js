module.exports = class File {
    constructor({ path, root }) {
        this.path = path
        this.root = root
    }

    load() {
        let fs = require("fs")
        let { path, root } = this
        let File = {}
        path = root + path

        if (!path || typeof path !== "string") {
            throw (Error("Fle path must be a valid string"))
        }

        try {
            let stream = fs.createReadStream(path)
            return stream;
        }
        catch (erro) {
            throw (erro)
        }
    }

    pack() {
        return function (file) {
            file = file.toJSON()
            return file
        }
    }

}