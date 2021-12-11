/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums = fastSort(nums);
  return nums[nums.length - k];
};

const fastSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  let pivotIndex = Math.floor(nums.length / 2);
  let pivot = nums[pivotIndex];
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue;
    } else if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return fastSort(left).concat([pivot], fastSort(right))
}
// @lc code=end
