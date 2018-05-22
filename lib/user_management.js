let Database = require('./database');

function add_new_user(data, callback) {
    let user = {
        first_name: data.first_name,
        last_name: data.last_name,
        user_name: `${data.first_name}_${data.last_name}`.toLowerCase()
    };

    try {
        Database.save(user, callback);
    } catch (e) {
        callback(e);
    }
}

module.exports = add_new_user;