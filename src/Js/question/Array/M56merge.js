/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * Your runtime beats 86.07 % of javascript submissions
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let l = intervals[i][0];
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i]); // 如果当前值左边界大于res右边界 说明两个区间无法合并
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1]);
    }
  }
  return res;
};
// @lc code=end
