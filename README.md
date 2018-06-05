# Advanced Unit Testing

This repository introduces and provides examples of some advanced Unit Testing features. Examples are in Node.js but the techniques are applicable across languages and platforms. We'll use: 

* [Mocha](https://mochajs.org) for describing, running and building tests
* [Chai](http://www.chaijs.com) for our assertions

## Development environment setup

You'll obviously need Node.js to run the examples here.

* You'll need to install Mocha globally to use the `mocha` command. To do this type `npm install -g mocha`
* Install other dependencies with `npm install`

## Examples

### The basics - a simple test

* [simple-spec.js](test/simple-spec.js) illustrates the simplest form of Unit Test

### Asynchronous testing

* [asynchronous-spec-hits-real-server-spec.js](test/asynchronous-spec-hits-real-server-spec.js) illustrates an asynchronous test. A few things to note here:
    * the use of `done()` to signify to Mocha that the asynchronous test is complete. Without this the test would appear to pass 
    * this example is actually an anti-pattern because our test is reliant upon the network and Wikipedia being up. This will result in a slow running test which could fail because of reasons outside of the System Under Test (SUT). We will address this later with mocking.
* [asynchronous-spec-mocked-server-spec.js](test/asynchronous-spec-mocked-server-spec.js) is a more realistic example that uses the 'Nock' library to mock a server.
* [asynchronous-spec-promise-based.js](test/asynchronous-spec-promise-based.js) is an example of testing a promise-based async API (similar to Fetch)

### Doubles

Spies, stubs and mocks are all forms of _test double_. Think of a double is being like a 'stunt double' (in that it stands in for an actor)

#### Spies are a type of double

Spies are used to get detailed information about function calls. See [test/doubles-spy-spec.js](test/doubles-spy-spec.js) for an example of spy double. Note: **spies do not affect the behaviour of a function**. To do that you need a stub.

#### Stubs are a type of double

Stubs are like spies but they **replace the target**. See:
 
* [test/doubles-stub-simple-replacement-spec.js](test/doubles-stub-simple-replacement-spec.js) for an example of a simple stub double.
* [test/doubles-stub-trigger-specific-path-spec.js](test/doubles-stub-trigger-specific-path-spec.js) for an example of using a stub to simulate a collaborator (in this case, our database) to throw an error and assert that our callback receives the error.
* [test/doubles-stub-simplify-testing-async.js](test/doubles-stub-to-simplify-testing-async.js) for an example of using a stub to simplify testing async code.

Remember this: **stubs _replace_ the function under test**
