/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  const keyMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const result = []

};

const helper = (start, digits, keyMap, temp_res, res) =>{
  if (start === digits.length) {
    res.push(temp_res)
    return
  }
  for (let i = start; i < digits.length; i++) {
    const key = digits[i];
    const letters = keyMap[key];
    
  }

}

// @lc code=end

