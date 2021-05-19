/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    return check1(root, -Infinity, Infinity);
};

/**
 * 判断当前节点是否属于二叉搜索树
 * @param {TreeNode} node 被判断的节点
 * @returns 
 */
let check = (node) => {
    if (node.left === null && node.right === null) {
        return true;
    } else if (node.left === null) {
        const rightVal = node.right.val;
        const nodeVal = node.val;
        return rightVal > nodeVal;
    } else {
        const leftVal = node.left.val;
        const nodeVal = node.val;
        return leftVal < nodeVal;
    }
    
}

let bsf = (node) => {
    if (node === null) return;
    bsf(node.left);
    bsf(node.right);
}

let check1 = (node, min, max) => {
    if (node === null) return true;
    if (node.val >= max || node.val <= min)
        return false;
    return check1(node.left, min, node.val) && 
            check1(node.right, node.val, max);
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidBST;
// @after-stub-for-debug-end