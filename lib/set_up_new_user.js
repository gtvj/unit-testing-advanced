let Database = require('./database');

let set_up_new_user = function(user, callback) {
    try {
        Database.save(user, callback);
    } catch (e) {
        callback(e);
    }
};

module.exports = set_up_new_user;