/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * Your runtime beats 64.54 % of javascript submissions
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    return dfs(root, targetSum);
};
/**
 * 
 * @param {TreeNode} node 节点
 * @param {number} val 当前剩余数值
 * @returns {boolean} 结果是否存在
 */
let dfs = function (node, val) {
    if (node === null) return false;
    val -= node.val;
    if (node.left === null && node.right === null) {
        return val === 0;
    } 
    return dfs(node.left, val) || dfs(node.right, val);
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end