let assert = require('assert');
let fetch_json = require('../lib/fetch_json');

describe("fetch_json()", function () {

    it("should fetch some JSON", function (done) {

        fetch_json()
            .then(function (value) {
                assert.equal(value, '{"data":"Blah, blah, blah"}');
                done();
            })
            .catch(function (err) {
                assert.equal(err.message, `It's all gone wrong!`);
                done();
            });
    });
});