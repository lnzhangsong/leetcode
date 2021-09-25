/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * Your runtime beats 13.72 % of javascript submissions
 */
// 转移方程 dp[i] = min(dp[i - 1], nums[i] - minnum)
var maxProfit = function (prices) {
  let len = prices.length;
  if (!len) return 0;
  const dp = new Array(len).fill(0);
  let minPrice = prices[0];
  for (let i = 1; i < len; i++) {
    // 当前最小值
    minPrice = Math.min(prices[i], minPrice);
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
  }
  return dp[len - 1];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end