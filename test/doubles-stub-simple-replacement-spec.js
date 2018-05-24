let add_new_user = require('../lib/user_management');
let Database = require('../lib/database');
let sinon = require('sinon');

describe("add_new_user()", function () {

    it('should call Database.save() once', function () {

        // Note: Stubs replace the function being tested - which, in this case
        //       would mean that you do not need to have created a database connection

        let save = sinon.stub(Database, 'save');

        let expected_user = { first_name: 'Gwyn', last_name: 'Jones' };

        add_new_user(expected_user, function () {});

        save.restore();

        sinon.assert.calledWith(save, { first_name: 'Gwyn', last_name: 'Jones', user_name: 'gwyn_jones' });

    });
});