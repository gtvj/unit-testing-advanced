const fs = require('fs');

class UserDatabase {

    constructor(filename) {
        this.filename = filename;
        this.data = {};
    }

    save(callback) {
        fs.writeFile(this.filename, JSON.stringify(this.data), callback);
        this.saved = true;
    }

    insert(key, value) {
        console.log(`Saving '${key}' as '${value}'`);
        this.data[key] = value;
    }

}

module.exports = UserDatabase;
