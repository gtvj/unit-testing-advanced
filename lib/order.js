const warehouse = require('./warehouse');

const order = {
    place(item, quantity, callback) {

        // In the real world the warehouse.package_and_ship method will do two things
        // that we do not want in our tests:
        //    * Place an order
        //    * Take a while

        warehouse.package_and_ship(item, quantity, function () {
            console.log(`${quantity} ${item}s have been ordered from the warehouse`);
            return "Order placed"
        });

        callback();
    }
};

module.exports = order;