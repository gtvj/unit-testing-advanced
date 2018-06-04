const sinon = require('sinon');
const Database = require('../lib/database');
const set_up_new_user = require('../lib/set_up_new_user');

// This is a bit of a tricky one to get your head round so see the note below to see what's going on:

it('should pass the database result into the callback', function () {

    let expected_result = { success: true };

    let save = sinon.stub(Database, 'save');

    save.yields(expected_result);

    let callback = sinon.spy();

    set_up_new_user({ name: 'Gwyn' }, callback);

    save.restore();

    sinon.assert.calledWith(callback, expected_result);

});

// This is an example of using a stub to simplify testing of async code. Here we are stubbing Database.save
// and - via the save.yields - ensuring that the first callback which Database.save receives will be called
// with our expected_result variable. We then create a spy for the callback and assert that it was called with
// the value we expect.
//
// The point here is that, by stubbing out an asynchronous function, we have forced it to call the callback right
// away (removing the need for asynchronous test handling).