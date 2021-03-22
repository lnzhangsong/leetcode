/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let result = [];
    fun1(result, [], nums);
    return result;
};

/**
 * 回溯 Your runtime beats 94.21 % of javascript submissions
 * 代码待总结 八皇后 机器人路径 
 * @param {Number[][]} result 结果集
 * @param {Number[]} temp 临时数组
 * @param {Number[]} nums 处理数组
 * @returns 
 */
const fun1 = (result, temp, nums) => {
    // 如果满足则 返回结果
    if(nums.length === temp.length) 
        return result.push(JSON.parse(JSON.stringify(temp))); // 深拷贝
    for (let i = 0; i < nums.length; i++) {
        if (temp.indexOf(nums[i]) !== -1) {
            continue;
        }
        temp.push(nums[i]);
        fun1(result, temp, nums); // 递归调用
        temp.pop();
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end