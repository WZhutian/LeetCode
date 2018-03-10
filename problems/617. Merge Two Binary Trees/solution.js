
//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var best = function (t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;
    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1
};
var mergeTrees = function (t1, t2) {
    if (t1 === null && t2 !== null) {
        t1 = t2
        return t1
    } else if (t2 === null && t1 === null) {
        return t1
    } else if (t1 !== null && t2 !== null) {
        t1.val = (t1 ? t1.val : 0) + (t2 ? t2.val : 0)
    }
    if (t1 && t2 && t1.left === null && t2.left !== null) {
        t1.left = t2.left
    } else if (t1 && t2) {
        mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null)
    }
    if (t1 && t2 && t1.right === null && t2.right !== null) {
        t1.right = t2.right
    } else if (t1 && t2) {
        mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null)
    }
    return t1
};
module.exports = mergeTrees