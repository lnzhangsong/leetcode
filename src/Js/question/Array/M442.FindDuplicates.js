/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    return fun2(nums);
};

/**
 * Your runtime beats 18.16 % of javascript submissions
 * 排序 遍历 O（n） 【暴力】
 * @param { Numbers } nums 待处理数组
 * @returns 重复数字结果数组
 */
const fun1 = (nums) => {
    let result = [];
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (i !== nums.length - 1
            && nums[i] === nums[i + 1])
            result.push(nums[i]);
    }
    return result;
}

/**
 * Your runtime beats 36.02 % of javascript submissions
 * 哈希处理 
 * @param { Numbers } nums 待处理数组
 * @returns 重复数字结果数组
 */
const fun2 = (nums) => {
    let result = [];
    let tempMap = new Map();
    nums.forEach((item) => {
        if (!tempMap.has(item)) {
            tempMap.set(item, 1);
        } else {
            const val = tempMap.get(item);
            tempMap.set(item, val + 1);
        }
        if (tempMap.get(item) === 2) {
            result.push(item);
        }
    });
    return result;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDuplicates;
// @after-stub-for-debug-end