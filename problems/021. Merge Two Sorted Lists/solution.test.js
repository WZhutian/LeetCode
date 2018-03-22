const { buildList } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildList([1, 2, 4]), buildList([1, 3, 4])],
    output: buildList([1, 1, 2, 3, 4, 4])
}, {
    input: [buildList([]), buildList([])],
    output: null
}, {
    input: [buildList([2]), buildList([1])],
    output: buildList([1, 2])
}];