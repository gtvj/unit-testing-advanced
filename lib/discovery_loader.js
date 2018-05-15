let http = require('http');

let wiki_loader = {
    fetch_it(arg, callback) {

        var url = `http://discovery.nationalarchives.gov.uk/details/r/${arg}`;

        http.get(url, function (res) {
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