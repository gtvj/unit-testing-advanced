# Advanced Unit Testing

This repository introduces and provides examples of some advanced Unit Testing features. Examples are in Node.js but the techniques are applicable across languages and platforms. We'll use: 

* [Mocha](https://mochajs.org) for describing, running and building tests
* [Chai](http://www.chaijs.com) for our assertions

## Development environment setup

You'll obviously need Node.js to run the examples here.

* You'll need to install Mocha globally to use the `mocha` command. To do this type `npm install -g mocha`
* Install other dependencies with `npm install`

## Examples

* [simple-spec.js](test/simple-spec.js) illustrates the simplest form of Unit Test
* [asynchronous-spec.js](test/asynchronous-spec.js) illustrates an asynchronous test. A few things to note here:
    * the use of `done()` to signify to Mocha that the asynchronous test is complete. Without this the test would appear to pass 
    * this example is actually an anti-pattern because our test is reliant upon the network and Wikipedia being up. This will result in a slow running test which could fail because of reasons outside of the System Under Test (SUT). We will address this later with mocking.
* [asynchronous-spec-with-mocked-server.js](test/asynchronous-spec-with-mocked-server-spec.js) illustrates using the [Nock](https://github.com/node-nock/nock) library to create a 'mock' for our server endpoint. In this way we can intercept requests to the endpoint and provide a mocked response. In this way we are able to isolate our code (the SUT) from the collaborator (the HTTP endpoint).