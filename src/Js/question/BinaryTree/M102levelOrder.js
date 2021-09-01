/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * Your runtime beats 93.69 % of javascript submissions
 * Your memory usage beats 70.22 % of javascript submissions(39.5 MB)
 * @param {TreeNode} root 根节点
 * @return {number[][]} 结果
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let tempArr = [];
  tempArr.push(root);
  while (tempArr.length !== 0) {
    const len = tempArr.length;
    let tempRes = [];
    for (let i = 0; i < len; i++) { // 每层提出的时候，使用for循环处理
      const node = tempArr.shift();
      tempRes.push(node.val);
      if (node.left) tempArr.push(node.left);
      if (node.right) tempArr.push(node.right);
    }
    res.push(tempRes);
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end