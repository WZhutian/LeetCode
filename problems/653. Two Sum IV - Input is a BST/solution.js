/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    let map = new Map()
    let deep = function(root,k){
        if(root == null){
            return false
        }
        let val = root.val
        if(map.has(k-val)){
            return true
        }else{
            map.set(val,"")
        }
        result = deep(root.left,k)
        if(result){
            return result
        }
        result = deep(root.right,k)
        return result
    }
    return deep(root,k)
};
module.exports = findTarget