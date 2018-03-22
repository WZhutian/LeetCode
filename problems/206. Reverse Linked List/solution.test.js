const { buildList } = require('../../scripts/problemUtils');

module.exports = [{
  input  : [buildList([1, 2, 3, 4])],
  output : buildList([4,3,2,1])
}, {
  input  : [buildList([])],
  output : null
}, {
  input  : [buildList([1])],
  output : buildList([1])
}, {
  input  : [buildList([1,2,3])],
  output : buildList([3,2,1])
}];