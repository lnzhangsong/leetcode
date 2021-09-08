/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false; // 只有一个值或没有值 直接返回false 特判
  let slow = head; // 快慢指针，一开始就不一样
  let fast = head.next;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) return true; // 判断两节点是否一致
  }
  return false;
};
// @lc code=end
