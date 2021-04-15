/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 *
 * https://leetcode-cn.com/problems/find-the-duplicate-number/description/
 *
 * algorithms
 * Medium (66.55%)
 * Likes:    1176
 * Dislikes: 0
 * Total Accepted:    137.9K
 * Total Submissions: 207.1K
 * Testcase Example:  '[1,3,4,2,2]'
 *
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
 * 
 * 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,4,2,2]
 * 输出：2
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,1,3,4,2]
 * 输出：3
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 如何证明 nums 中至少存在一个重复的数字? 
 * 你可以在不修改数组 nums 的情况下解决这个问题吗？
 * 你可以只用常量级 O(1) 的额外空间解决这个问题吗？
 * 你可以设计一个时间复杂度小于 O(n^2) 的解决方案吗？ 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    return fun1(nums);
};

/**
 * 暴力破解
 * Your runtime beats 92.21 % of javascript submissions
 * @param { number[] } nums 
 * @returns (number)
 */
const fun1 = (nums) => {
    let number = new Array(nums.length);
    number.fill(0);
    for (let i = 0; i < nums.length; i++) {
        number[nums[i]]++;
        if (number[nums[i]] === 2) {
            return nums[i];
        }
    }
}
// @lc code=end

