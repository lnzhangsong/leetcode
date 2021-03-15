/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * 
 * @param {number[]} nums 待处理数组
 * @return {number[]} 返回未出现数字的结果
 */
 var findDisappearedNumbers = function(nums) {
    return fun4(nums);
};


/**
 * 暴力解决(错误)  测试用例[1, 1]未通过 原因是终止条件错了 
 * @param {number[]} nums 待处理数组
 * @returns 返回未出现数字的结果
 */
let fun1 = (nums) => {
    let result = new Array();
    for (let i = 1; i < nums.length; i++) {
        if (nums.indexOf(i)  === -1) {
            result.push(i);
        }
    }
    return result;
}

/**
 * 暴力解决  超过了 6.04 %
 * @param {number[]} nums 待处理数组
 * @returns 返回未出现数字的结果
 */
let fun2 = (nums) => {
    let result = new Array();
    // indexOf 方法是循环遍历数组 时间复杂度为 O(n^2) [显然不满足题目要求]
    for (let i = 1; i < nums.length + 1; i++) {
        if (nums.indexOf(i)  === -1) {
            result.push(i);
        }
    }
    return result;
}

/**
 * 替换（看的评论 思路属实牛皮 我也想到替换=>我想的是利用和来处理但是失败了）
 * 将原数组所有正数作为数组下标，置对应值为负值。
 * 值为正的对应的下标 即为所丢失的数字 
 * 【为什么可以这么做呢： 因为由题意知 数组值的范围肯定是 1-n 的】
 * **结果错误** 未找到原因
 * @param {number[]} nums 待处理数组
 * @returns 返回未出现数字的结果
 */
let fun3 = (nums) => {
    let result = new Array();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            if (nums[-(nums[i] + 1)] < 0) break;
            nums[-(nums[i] + 1)] = -nums[-(nums[i] + 1)];
        } else {
            if (nums[nums[i] - 1] < 0) break;
            nums[nums[i] - 1] = -nums[nums[i] - 1];
        }
    }
    let index = 1;
    nums.forEach(val => {
        if(val > 0) {
            result.push(index);
        }
        index++;
    })
    return result;
}

/**
 *  Your runtime beats 72.64 % of javascript submissions
 * @param {number[]} nums 待处理数组
 * @returns 返回未出现数字的结果
 */
let fun4 = (nums) => {
    let result = new Array();
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = - Math.abs(nums[index]); 
    }
    let index = 1;
    nums.forEach(val => {
        if (val > 0) {
            result.push(index);
        }
        index++;
    })
    return result;
}

/**
 * 未完待续 利用空间处理 速度会更快 （但是不符合题意）
 * @param {number[]} nums 
 */
let fun5 = (nums) => {

}



// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDisappearedNumbers;
// @after-stub-for-debug-end