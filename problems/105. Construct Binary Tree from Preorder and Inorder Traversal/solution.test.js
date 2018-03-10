const { buildTree } = require('../../scripts/problemUtils');

module.exports = [{
    input: [[3, 9, 20], [9, 20, 3]],
    output: buildTree([3, 9, null, null, 20])
},{
    input: [[3,9,20,15,7],[9,3,15,20,7]],
    output: buildTree([3,9,20,null,null,15,7])
}];