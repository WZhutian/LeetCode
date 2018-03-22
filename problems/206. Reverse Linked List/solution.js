/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let lastNode = null
    let nextNode = head
    while (nextNode != null) {
        let mid = nextNode.next
        nextNode.next = lastNode
        lastNode = nextNode
        nextNode = mid
    }
    return lastNode
};
module.exports = reverseList