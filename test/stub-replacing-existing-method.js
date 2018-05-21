const rewire = require('rewire');
const assert = require('assert');
const order = rewire('../lib/order');
const sinon = require('sinon');

describe('Ordering items', function () {

    beforeEach(function () {

        this.warehouse = {
            package_and_ship: sinon.stub().returns('Order placed')
        };

        order.__set__('warehouse', this.warehouse)
    });

    describe('Warehouse interaction', function () {

        beforeEach(function () {

            this.callback = sinon.spy();

            order.place('Lego Super Star Destroyer', 232, this.callback);

        });

        it('should call package_and_ship with the correct arguments', function () {

            // Because stubs are also spies, we can do this
            assert.ok(this.warehouse.package_and_ship.calledWith('Lego Super Star Destroyer', 232), 'Package and ship was not called with the correct arguments');

        });

        it('should return "order placed"', function () {

            assert.ok(this.warehouse.package_and_ship.returned('Order placed'));

        });

    });
});


