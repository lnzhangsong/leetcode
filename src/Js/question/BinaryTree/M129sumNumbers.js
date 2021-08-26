/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return dfs(root, 0);
};

const dfs = (root, sum) => {
  if (root === null) return 0;
  let res = root.val + sum * 10;
  if (root.left === null && root.right === null) {
    return res;
  }
  return dfs(root.left, res) + dfs(root.right, res);
};
// @lc code=end