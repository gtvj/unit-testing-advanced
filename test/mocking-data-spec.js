let rewire = require('rewire');
let newsletter_app = rewire('../lib/newsletter_application');
let assert = require('assert');


describe("Checking for users", function () {

    beforeEach(function () {
        this.test_data = [
            {
                name: 'Bob',
                email: 'bob@bob.com'
            },
            {
                name: 'Jen',
                email: 'jen@jen.com'
            }
        ];

        newsletter_app.__set__('data', this.test_data);
    });

    it("Should check for users in the data", function () {

        let user = 'bob@bob.com';

        let result = newsletter_app.check_for_user(user);

        assert.ok(result, "the user was not found");

    });
});


