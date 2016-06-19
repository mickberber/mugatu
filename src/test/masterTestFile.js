var tests = require('mc-testing');
var write = tests.write;
var helper = require('./testTheHelpers');
var app = require('./testAppJSX');

let allTests = [
    helper,
    app
];

write.masterTestFile(allTests);