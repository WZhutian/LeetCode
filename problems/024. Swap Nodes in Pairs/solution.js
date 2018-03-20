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
var swapPairs = function (head) {
    let firstNode = head && head.next ? head.next:head//首节点的选择
    let nowAt = head
    let next = nowAt && head.next
    let mid;
    while (next !== null) {
        mid = next.next//暂存第二个指向第三个的指针
        next.next = nowAt //第二个指针必指向第一个
        if (mid && mid.next) {//存在第四个节点,第一个指针指向第四个
            nowAt.next = mid.next
        } else {//不存在第四个,就把第一个指针指向第三个
            nowAt.next = mid
        }
        nowAt = mid//到第三个节点
        next = nowAt && nowAt.next//到第四个节点
    }
    return firstNode
};
module.exports = swapPairs