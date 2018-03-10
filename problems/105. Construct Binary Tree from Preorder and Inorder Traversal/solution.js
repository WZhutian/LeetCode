/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder == null || preorder.length == 0) {
        return null
    }
    let tree = new TreeNode(preorder[0]) //最终生成的树
    let nodeStack = [tree] //尚可出分支的节点栈
    for (let i = 1; i < preorder.length; i++) {
        let judgeValue = preorder[i] // 待判断的节点值
        let judgeIndex = inorder.indexOf(judgeValue)
        let between = 0 //计算前面有多少个路径节点
        for (let j = nodeStack.length - 1; j >= 0; j--) {
            let preValue = nodeStack[j].val
            let preIndex = inorder.indexOf(preValue)
            if (preIndex < judgeIndex) {
                between++
            } else if (preIndex > judgeIndex && j == nodeStack.length - 1) {
                between = -1
            } else {
                break
            }
        }
        let addNew = new TreeNode(judgeValue)
        if (between < 0) { //放置在当前节点
            nodeStack[nodeStack.length - 1].left = addNew
        } else { //放置在当前路径中间的某个节点的右子树下
            nodeStack[nodeStack.length - 1 - between + 1].right = addNew
            for (let i = 0; i < between; i++) { //删除相应数量的节点
                nodeStack.pop()
            }
        }
        nodeStack.push(addNew)
    }
    return tree
};
module.exports = buildTree