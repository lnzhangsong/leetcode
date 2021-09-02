/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * 双指针 + 快排
 * Your runtime beats 90.17 % of javascript submissions
 * Your memory usage beats 94.95 % of javascript submissions(47.5 MB)
 * @param {number[]} nums 被选数组
 * @return {number[][]} 结果
 */
var threeSum = function (nums) {
  if (nums === null) return [];
  let res = [];
  const len = nums.length;
  if (len < 3) return []; // 特判
  nums.sort((a, b) => a - b); // 排序
  for (let i = 0; i < len; i++) { // 重头开始进行处理
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重 
    let left = i + 1; // 如果直接等于 i， 则会重复计算第一项
    let right = len - 1;
    while (left < right) { // 双指针
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        res.push([nums[left], nums[i], nums[right]]);
        // 去重 while 可以视作持续的 if 
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else {
        if (sum < 0) left++;
        if (sum > 0) right--;
      }
    }
  }
  return res;
};
// @lc code=end
