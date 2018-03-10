/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) {
        return []
    }
    let levelArray = [[root.val]]
    let nowLevel = [root]
    let nextLevel = []
    let addArray = []
    do {
        nextLevel = []
        addArray = []
        while (nowLevel.length > 0) {
            let nowAt = nowLevel.shift()
            if (nowAt.left !== null) {
                nextLevel.push(nowAt.left)
                addArray.push(nowAt.left.val)
            }
            if (nowAt.right !== null) {
                nextLevel.push(nowAt.right)
                addArray.push(nowAt.right.val)
            }
        }
        if (addArray.length > 0) {
            levelArray.push(addArray)
        }
        nowLevel = nextLevel
    } while (nextLevel.length > 0)
    return levelArray
};
module.exports = levelOrder