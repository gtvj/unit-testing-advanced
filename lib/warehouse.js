const warehouse = {

    package_and_ship(item, quantity, callback) {

        // We're going to fake a longish running task here which is
        // supposed to mimic how long a response from the warehouse
        // might take.

        let current_time = new Date().getTime();

        while (current_time + 1000 >= new Date().getTime()) {
           // Do nothing for a bit - (Note: this is a bad practice because JavaScript is single-threaded)
        }

        callback()

    }
};

module.exports = warehouse;