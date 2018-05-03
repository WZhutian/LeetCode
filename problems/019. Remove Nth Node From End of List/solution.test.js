const { buildList } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildList([1, 2, 3, 4, 5]), 2],
    output: buildList([1, 2, 3, 5])
},{
    input: [buildList([1, 2,]), 2],
    output: buildList([2])
},{
    input: [buildList([1, 2,]), 1],
    output: buildList([1])
}];