/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return towSum1(nums, target);
};

/**
 * 方法1： 双指针(成思维定式了) 
 * @param {number[]} nums 被查找数组
 * @param {number} target 目标数字
 */
function towSum1(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    // sort排序字符串 数字需要些方法
    nums.sort((a,b) => {
        return a - b;
    });
    while(left < right) {
        if (nums[left] + nums[right] < target) {
            left++;
        } else if (nums[left] + nums[right] > target) {
            right--;
        } else {
            result = [left, right];
            break;
        }
    }
    return result;
}

/**
 * 方法2：待完成 hashTable
 * @param {number[]} nums 
 * @param {number} target 
 */
function twoSum2(nums, target) {
    
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end