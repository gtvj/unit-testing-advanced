let data = require('./newsletter_subscribers_database');

check_for_user = function (email) {

    let found = false;

    data.forEach(function (i) {
        if (i.email === email) {
            found = true;
        }
    });

    return found;
};

module.exports.check_for_user = check_for_user;