/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let nowAt = head
    let nBefore = head
    let index = 0
    let moved = false
    while (nowAt !== null) {
        if (index > n) {
            nBefore = nBefore.next
            moved = true
        }
        nowAt = nowAt.next
        index++
    }
    if (!moved && index == n) {
        return nBefore.next
    }
    if (nBefore.next !== null) {
        nBefore.next = nBefore.next.next
    } else {
        return null
    }
    return head
};
module.exports = removeNthFromEnd