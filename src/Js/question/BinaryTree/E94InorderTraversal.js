/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 非递归操作
 * @param {TreeNode} root
 * @return {number[]}
 * Your runtime beats 78.06 % of javascript submissions
 */
var inorderTraversal = function (root) {
  let res = []; // 结果集
  let stack = []; // 栈
  // 栈为空 或者 当前节点为null => 循环结束
  while (root || stack.length) {
    while (root) {
      stack.push(root); // 栈需要存节点
      root = root.left; // 向左侧遍历
    }
    // 直到左节点不存在 开始弹栈
    const node = stack.pop();
    // 在访问完 node 后，node 就可以出栈了。因为 node 和其左子树都已经访问完成。
    res.push(node.val);
    // 向右遍历 循环左侧操作
    root = node.right;
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = inorderTraversal;
// @after-stub-for-debug-end