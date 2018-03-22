/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2
    } else if (l2 == null) {
        return l1
    }
    //以首节点小的为l1
    let l1Now = l1.val > l2.val ? l2 : l1
    let result = l1Now
    let l2Now = l1.val > l2.val ? l1 : l2
    while (l1Now !== null) {
        let nowVal1 = l1Now.val
        if (l1Now.next === null) {
            l1Now.next = l2Now
            break;
        }
        let nextVal1 = l1Now.next.val //获取当前区间的最大值
        let l1Next = l1Now.next //l1上的下一个
        let mid2 = l2Now//l2上的当前节点
        let mid3 = l2Now //判断时的上一个节点
        while (l2Now && (l2Now.val < nextVal1)) { // 找到l2上最大值的位置
            mid3 = l2Now
            l2Now = l2Now.next
        }
        if (mid3 !== l2Now) {
            l1Now.next = mid2
            mid3.next = l1Next
        }
        l1Now = l1Next
    }
    return result
};
module.exports = mergeTwoLists