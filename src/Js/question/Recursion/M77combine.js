/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  let res = [];
  let temp_res = [];
  recursion(n, k, 1, res, temp_res);
  return res;
};

const recursion = (n, k, floor, res, temp_res) => {
  if (temp_res.length === k) {
    res.push(temp_res.slice()); // 深拷贝
    temp_res = [];
    return;
  } 
  for (let i = floor; i <= n; i++) {
    temp_res.push(i);
    recursion(n, k, i + 1, res, temp_res);
    temp_res.pop();
  }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = combine;
// @after-stub-for-debug-end