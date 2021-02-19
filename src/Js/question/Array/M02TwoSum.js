/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return addTwoNumbers1(l1,l2);
};

/**
 * 方法1： 模拟
 * @param {ListNode} l1 
 * @param {ListNode} l2 
 */
function addTwoNumbers1(l1, l2) {
    // 进位标志
    let t = 0;
    let res = new ListNode(-1);
    let pre = res; // 如果最后返回res.next则会导致只有最后一个值
    // 1. 遇到超时 指针未向前
    while(l1 || l2 || t === 1) { // t === 1 判断的是是否最后一位有进位
        if (!l1) {
            l1Val = 0;
        } else {
            l1Val = l1.val;
        }
        if (!l2) {
            l2Val = 0;
        } else {
            l2Val = l2.val; // 如果为null空指针异常 
        }
        let curVal = l1Val + l2Val + t;
        res.next = new ListNode(curVal % 10);
        res = res.next;
        t =  Math.floor(curVal / 10); // 取整函数
        if(l1) {
           l1 = l1.next; 
        }
        if(l2) {
           l2 = l2.next;  
        }
       
    }
    return pre.next;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end