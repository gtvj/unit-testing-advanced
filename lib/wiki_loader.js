let https = require('https');

let wiki_loader = {
    fetch_it(arg, callback) {

        let url = `https://en.wikipedia.org/wiki/${arg}`;

        https.get(url, function (res) {
            let body = '';

            res.setEncoding('UTF-8');

            res.on('data', chunk => {
                body += chunk;
            });

            res.on('end', () => {
                callback(body)
            })
        });

    }
};

module.exports = wiki_loader;