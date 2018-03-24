const { buildTree } = require('../../scripts/problemUtils');

module.exports = [{
    input: [buildTree([5,3,6,2,4,null,7]),9],
    output: true
},{

    input: [buildTree([5,3,6,2,4,null,7]),28],
    output: false
}];
