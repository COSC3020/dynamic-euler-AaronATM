const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(e(10) === 2.7182818011463845);
