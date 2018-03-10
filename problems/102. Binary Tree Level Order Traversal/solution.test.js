const { buildTree } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildTree([1,2,3,4,null,null,5])],
    output: [[1],[2,3],[4,5]]
}, {
    input: [buildTree([1])],
    output: [[1]]
}];

