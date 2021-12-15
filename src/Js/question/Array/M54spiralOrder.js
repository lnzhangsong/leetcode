/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/spiral-matrix-ii/solution/spiral-matrix-ii-mo-ni-fa-she-ding-bian-jie-qing-x/
var spiralOrder = function (matrix) {
  let result = [];
  let left = 0; // 左边界
  let right = matrix[0].length - 1; // 右边界
  let top = 0; // 上边界
  let bottom = matrix.length - 1; // 下边界
  let sum = matrix[0].length * matrix.length;
  // 循环条件 
  while (result.length < sum) {
    for (let i = left; i <= right && result.length < sum; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && result.length < sum; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && result.length < sum; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && result.length < sum; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end