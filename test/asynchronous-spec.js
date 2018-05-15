let { expect } = require('chai');
let { fetch_it } = require('../lib/wiki_loader');
let assert = require('assert');

describe("Loading from Wikipedia", function () {

    it("Should load The National Archives' Wikipedia page", function (done) {
        fetch_it('The_National_Archives_(United_Kingdom)', function (html) {

            assert.ok(html.match(/\bkew\b/i), "Kew is not found in the page");

            done();
        })
    });
});