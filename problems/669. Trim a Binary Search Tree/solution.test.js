const { buildTree } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildTree([1, 0, 2]), 1, 2],
    output: buildTree([1, null, 2])
}, {
    input: [buildTree([1, null, 2]), 2, 4],
    output: buildTree([2])
}];
