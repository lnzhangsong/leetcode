/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    
};


/**
 * 步骤：（如何证明是正确的呢）
 * 1. 从后向前找第一组升序的字符串（i，j）【序号】
 * 2. 找到后接着在（j,end）中找到最小【至少大于i所对应的值】
 * 3. 如果不存在则说明是完全降序。直接替换为最小。
 * 以上
 */
// @lc code=end

