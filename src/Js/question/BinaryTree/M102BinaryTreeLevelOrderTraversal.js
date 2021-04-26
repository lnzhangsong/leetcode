/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (64.23%)
 * Likes:    848
 * Dislikes: 0
 * Total Accepted:    295.4K
 * Total Submissions: 460.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 * 
 * 
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 返回其层序遍历结果：
 * 
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    return fun1(root);
};

/**
 * 二叉树层次遍历
 * Your runtime beats 25.19 % of javascript submissions
 * @param {TreeNode} root 根节点
 * @return {number[][]} 遍历数组
 */
let fun1 = (root) => {
    if (root === null) return [];
    let result = [];
    let query = []; // 临时队列
    
    query.push(root); // 将头节点放入队列

    while (query.length > 0) { // 当队列值大于零的时候 意味着可能存在数据
        const tempArr = []; // 临时数据 存储该层节点
        const size = query.length; // 保存当前队列数组长度 PS：此处很关键 因为还要用这个这个队列 下面直接用query.length会有问题。
        for (let i = 0; i < size; i++) { // 此处直接用size代替query.length
            const nood = query.shift();
            tempArr.push(nood.val);
            if (nood.left !== null) {
                query.push(nood.left);
            }
            if (nood.right !== null) {
                query.push(nood.right);
            }
        }
        result.push(tempArr);
    }
    return result;
}

// @lc code=end

