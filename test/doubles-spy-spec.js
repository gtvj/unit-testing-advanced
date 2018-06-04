let add_new_user = require('../lib/user_management');
let Database = require('../lib/database');
let sinon = require('sinon');

describe("add_new_user()", function () {
    
    it('should call Database.save() once', function () {

        // Note: Spies do not affect the behaviour of a function. To do that you need a stub
        let save = sinon.spy(Database, 'save');

        add_new_user({ first_name: 'Gwyn', last_name: 'Jones' }, function () {});

        save.restore();

        sinon.assert.calledOnce(save);

    });
});