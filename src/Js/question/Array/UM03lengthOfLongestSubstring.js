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
var lengthOfLongestSubstring = function(s) {
    return fun2(s);
};

/**
 * 方法一 模拟
 * @param {String} s 
 */
const fun1 = s => {
    if (s.length === 1) return 1;
    let len = 0;
    let temp = '';
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (temp.indexOf(s.charAt(i)) === -1) {
            temp += s.charAt(i);
            len++
        } else {
            if (len > max) {
                max = JSON.parse(JSON.stringify(len));
            }
            temp = '';
            i--;
            len = 0;
        }
    }
    return max;
}


const fun2 = s => {
    if (s.length === 1) return 1;
    let left = 0;
    let tempString = '';
    let max = 0;
    while (left < s.length) {
        if (tempString.indexOf(s.charAt(left)) === -1) {
            tempString += s.charAt(left);
        } else {
            if (max < tempString.length) {
                left--;
                max = tempString.length;
            }
            tempString = "";
        }
        left++;
    }
    return max;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end