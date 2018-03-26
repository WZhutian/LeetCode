/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
    if (root == null) return null;
        
    if (root.val < L) return trimBST(root.right, L, R);
    if (root.val > R) return trimBST(root.left, L, R);
    
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    
    return root;
};
//wrong answer
// var trimBST = function (root, L, R) {
//     let lastNode = root
//     let head = root
//     let recursion = function (root, L, R) {
//         if (root === null) {
//             return head
//         }
//         if (root.val < L) {
//             if (root == lastNode) {
//                 head = root.right
//                 lastNode = head
//                 recursion(head, L, R)
//             } else {
//                 lastNode.left = root.right
//             }
//         } else if (root.val === L) {
//             root.left = null
//         } else if (root.val > R) {
//             if (root == lastNode) {
//                 head = root.left
//                 lastNode = head
//                 recursion(head, L, R)
//             } else { 
//                 lastNode.right = root.left
//             }
//         } else if (root.val === R) {
//             root.right = null
//         }
//         lastNode = root
//         recursion(root.left, L, R)
//         recursion(root.right, L, R)
//         return head
//     }
//     return recursion(root, L, R)
// };
module.exports = trimBST