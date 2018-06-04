let Database = {
    save(user, callback) {
        let created = `${user.first_name} ${user.last_name} ${user.user_name}`;
        callback(created);
    }
};

module.exports = Database;