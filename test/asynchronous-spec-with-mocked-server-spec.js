let { expect } = require('chai');
let { fetch_it } = require('../lib/discovery_loader');
let nock = require('nock');
let assert = require('assert');

describe("Loading from Discovery", function () {

    before(function () {

        nock("http://discovery.nationalarchives.gov.uk")
            .get(`/details/r/e468b7ad-5f24-4759-ae0c-14e27886ae2c`)
            .reply(200, "Mock response - The Cultivator");

    });

    it("Should load the details page for 'The Cultivator'", function (done) {
        fetch_it('e468b7ad-5f24-4759-ae0c-14e27886ae2c', function (html) {

            assert.ok(html.match(/\bMock\b/i), "We're not hitting the mock server");

            assert.ok(html.match(/\bCultivator\b/i), "'Cultivator' is not found in the page");

            done();
        })
    })
});
