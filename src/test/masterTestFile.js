var tests = require('mc-testing');
var write = tests.write;
var helper = './testTheHelpers';

let allTests = [
    helper
];

write.masterTestFile(allTests);