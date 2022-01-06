/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let res = [];
  helper(n, n, '', res);
  return res;
};

const helper = (leftSum, rightSum, temp_str, res) => {
  if(leftSum > rightSum) return; // 剪枝 
  if(leftSum === 0 && rightSum === 0) { // 终止条件
    res.push(temp_str);
    temp_str = ''; // 清空 在终止重置
    return;
  }
  if(leftSum > 0) {
    temp_str += '('; // 节点操作
    helper(leftSum - 1, rightSum, temp_str, res); // 向下递归
    temp_str = temp_str.slice(0, -1); // 删除最后一个字符 回头
  }
  if(rightSum > 0) {
    temp_str += ')';
    helper(leftSum, rightSum - 1, temp_str, res);
    temp_str = temp_str.slice(0, -1);
  }
}
// @lc code=end

