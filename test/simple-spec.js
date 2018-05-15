let { expect } = require('chai');
let calculator = require('../lib/calculator');

describe("add()", function () {
    it("should do a simple sum", function () {

        let result = calculator.add(2, 2);

        expect(result).to.equal(4);

    });
});