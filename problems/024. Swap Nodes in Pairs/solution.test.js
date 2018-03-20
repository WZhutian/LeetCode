const { buildList } = require('../../scripts/problemUtils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4])],
  output : buildList([2, 1, 4, 3])
}, {
  input  : [buildList([])],
  output : null
}, {
  input  : [buildList([1])],
  output : buildList([1])
}, {
  input  : [buildList([1,2,3])],
  output : buildList([2,1,3])
}];