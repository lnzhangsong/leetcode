/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let map = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ]);

  let stack = [];
  for (let ch of s) {
    if (map.has(ch)) {
      if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length; // 这块判定 要注意

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValid;
// @after-stub-for-debug-end