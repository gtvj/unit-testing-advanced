let rewire = require('rewire'),
    UserDatabase = rewire('../lib/user_database'),
    assert = require('assert'),
    fs = require('fs'),
    sinon = require('sinon');

describe("UserDatabase", function () {

    beforeEach(function () {
        this.console = {
            log: sinon.spy()
        };

        this.fsWriteFileSpy = sinon.spy(fs, 'writeFile');

        // Replaces 'console' so that our test output is not muddied
        UserDatabase.__set__('console', this.console);

    });

    it("should add a user", function (done) {

        let db = new UserDatabase('this_will_be_created.txt');

        db.insert('name', 'Clarence');

        db.save(function () {
            // Saved
        });

        // We can assert the fs.writeFile is called by our code
        sinon.assert.calledOnce(this.fsWriteFileSpy);

        // We can assert which arguments it was called with
        sinon.assert.calledWith(this.fsWriteFileSpy, 'this_will_be_created.txt');

        // And we can still assert that the object has been updated accordingly
        assert.equal(db.saved, true, "The information was not saved");

        done();

    })
});
