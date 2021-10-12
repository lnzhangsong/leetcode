/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Your runtime beats 96.46 % of javascript submissions
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 目标结果头节点 设定
  let temp = new ListNode(-1);
  let res = temp;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      temp.next = l2;
      // temp 需要向前走
      temp = temp.next;
      l2 = l2.next;
    } else {
      temp.next = l1;
      temp = temp.next;
      l1 = l1.next;
    }
  }
  if (l1) {
    temp.next = l1;
  } else {
    temp.next = l2;
  }
  return res.next;
};
// @lc code=end
