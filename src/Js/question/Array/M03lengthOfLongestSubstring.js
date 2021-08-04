/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0; // 字符串长度
  let char_set = new Set(); // 存储窗口中字符
  let left = 0;
  let right = 0; // 左右指针指向第一位字符
  while (right < s.length) {
    if (!char_set.has(s[right])) {
      char_set.add(s[right]);
      right++;
      res = Math.max(res, right - left);
    } else {
      char_set.delete(s[left]);
      left++;
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end