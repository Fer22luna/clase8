const fs = require("fs")


class FileDao {

    constructor(file) {
        this.file = `${process.cwd()}/src/files/${file}`
    }

    async loadItems() {

        if (fs.existsSync(this.file)) {
            const data = await fs.promises.readFile(this.file, "utf-8")
            const items = JSON.parse(data)

            return items
        }

        return "El archivo no existe"
    }
}


module.exports = FileDao