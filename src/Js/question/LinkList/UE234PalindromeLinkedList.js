/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    return fun2(head);
};

/**
 * Your runtime beats 27.64 % of javascript submissions
 * 方法1 链表转化为数组
 */
let fun1 = (head) => {
    let cur = head;
    let tempArr = [];
    while (cur) {
        tempArr.push(cur.val);
        cur = cur.next;
    }
    let len = tempArr.length;
    let h_len = parseInt(len / 2); // 取整
    for (let i = 0; i < h_len; i++) {
        if (tempArr[i] !== tempArr[len - i - 1]) {
            return false;
        }
    }
    return true;
}

/**
 * 双指针[快慢 前后]
 * @param {ListNode} head 头指针
 */
let fun2 = (head) => {
    
}

/**
 * 反转链表
 * @param {ListNode} head 头节点
 * @returns 反转链表的头节点
 */
let reserveLink = (head) => {
    let cur = head;
    let prev = null;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
        // cur = cur.next; // 多余了 cur = temp 已经向右移动
    }
    return prev;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end