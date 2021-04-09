/**
 * 题目描述：
 * 输入一个递增排序的数
 * 
 * 示例 1：
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[2,7] 或者 [7,2]
 * 
 * 
 * 示例 2：
 * 输入：nums = [10,26,30,31,47,60], target = 40
 * 输出：[10,30] 或者 [30,10]
 *  
 * 
 * 限制：
 * 
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^6
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    return fun1(nums, target);
};

/**
 * 方法1： 双指针[左右] 
 * 执行用时：104 ms 在所有 JavaScript 提交中击败了98.96%的用户
 * @param {numbers[]} nums 数字序列
 * @param {number} target 目标值
 */
const fun1 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            left++;
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else {
            return [nums[left], nums[right]];
        }
    }
    return [0];
}