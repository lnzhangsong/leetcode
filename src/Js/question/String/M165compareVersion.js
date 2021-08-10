/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    let num1 = arr1[i] ? Number(arr1[i]) : 0;
    let num2 = arr2[i] ? Number(arr2[i]) + 0 : 0;
    if (num1 === num2) {
      continue;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 1;
    }
  }
  return 0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = compareVersion;
// @after-stub-for-debug-end