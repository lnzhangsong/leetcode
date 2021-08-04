/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  m = m - 1;
  n = n - 1;
  let len = m + n + 1;
  while( m >= 0 || n >= 0){
    if(m === -1) {
      nums1[len--] = nums2[n--];
    } else if(n === -1) {
      nums1[len--] = nums1[m--];
    } else if(nums1[m] > nums2[n]) {
      nums1[len--] = nums1[m--]; 
    } else {
      nums1[len--] = nums2[n--];
    }
  }
  return nums1;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end