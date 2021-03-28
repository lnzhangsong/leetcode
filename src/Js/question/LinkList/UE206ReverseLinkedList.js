/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (71.40%)
 * Likes:    1635
 * Dislikes: 0
 * Total Accepted:    488.5K
 * Total Submissions: 683.4K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    return fun1(head);
};

/**
 * 迭代： 循环
 * Your runtime beats 68.38 % of javascript submissions
 * @param {ListNode} head 头节点
 * @return {ListNode} 
 */
const fun1 = (head) => {
    // 初始化数据
    let prev = null;
    let cur = head;
    while (cur) { // 结束标志 链表最后一个位置
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
}
// @lc code=end

