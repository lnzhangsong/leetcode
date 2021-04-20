/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (54.39%)
 * Likes:    1352
 * Dislikes: 0
 * Total Accepted:    307.5K
 * Total Submissions: 563.2K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 * 
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
 * [1,2,2,2,null,2]
 * 以为分成两个二叉树 分别按（左中右、右中左）遍历 结果没通过
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let left_list = [];
    let right_list = [];
    leftList(left_list, root.left);
    rightList(right_list, root.right);
    const leftListLen = left_list.length;
    const rightListLen = right_list.length;
    if (leftListLen !== rightListLen) {
        return false;
    }
    for (let i = 0; i < leftListLen; i++) {
        if (left_list[i] !== right_list[i]) {
            return false;
        }
    }
    return true;
};

/**
 * @param {node[]} list 左侧序列
 * @param {TreeNode} node 节点
 */
const leftList = (list, node) => {
    if (node !== null) {
        leftList(list, node.left);
        list.push(node.val);
        leftList(list, node.right);  
    }
}

/**
 * 
 * @param {node[]} list 右侧序列
 * @param {TreeNode} node 节点
 */
const rightList = (list, node) => {
    if (node !== null) {
        leftList(list, node.right);
        list.push(node.val);
        leftList(list, node.left);  
    }
} 
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end