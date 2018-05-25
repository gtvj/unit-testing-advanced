let add_new_user = require('../lib/user_management');
let Database = require('../lib/database');
let sinon = require('sinon');

describe("add_new_user()", function () {

    it('should pass the error into the callback if save fails', function () {

        let expected_error = new Error('Oh no!');

        // Stub Database.save
        let save = sinon.stub(Database, 'save');

        // Set the stub to throw our error when called
        save.throws(expected_error);

        let callback = sinon.spy();

        // Because we have:
        //   - 'stubbed' Database.save to throw
        //   - made the callback a spy
        // We can assert that the callback was passed the expected_error (See below)

        add_new_user({ first_name: 'Gwyn', last_name: 'Jones' }, callback);

        save.restore();

        // Assert that callback was actually called with expected error
        sinon.assert.calledWith(callback, expected_error);

    });
});