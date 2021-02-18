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
    return twoSum2(nums, target);
};

/**
 * 方法1： 双指针(成思维定式了) 
 * 1. 排序 暂时不知道js排序是什么排序
 * 2. 双指针 找完之后还要找结果值原数组对应的下标【重复计算】
 * @param {number[]} nums 被查找数组
 * @param {number} target 目标数字
 */
function twoSum1(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    // sort排序字符串 数字需要些方法
    nums.sort((a,b) => {
        return a - b;
    });
    /* 模板 */
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
    return result;// 此结果并不是所求结果
}

/**
 * 方法2：*看题解完成* hashTable
 * 哈希表按key查找复杂度 为O(1) 一次遍历 **边读边写** 
 * @param {number[]} nums 被查找数组
 * @param {number} target 目标数字
 */
function twoSum2(nums, target) {
    let numberMap = new Map();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (!numberMap.has(target - nums[i])) {
            numberMap.set(nums[i], i)
        } else {
            res = [i, numberMap.get(target - nums[i])];
            break;
        }
    }
    return res;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end