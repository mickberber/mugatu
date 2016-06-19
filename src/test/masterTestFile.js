var tests = require('mc-testing');
var write = tests.write;

// TEST MODULES
var helper = require('./testTheHelpers');
var app = require('./testAppJSX');
var piano = require('./testPianoJSX.js');

let allTests = [
    helper,
    app,
    piano
];

write.masterTestFile(allTests);