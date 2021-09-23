/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 快慢指针 击败了 76%
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head;
  let fast = head;
  while (k > 0) {
    fast = fast.next;
    k--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};