/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode-cn.com/problems/rotate-image/description/
 *
 * algorithms
 * Medium (72.55%)
 * Likes:    855
 * Dislikes: 0
 * Total Accepted:    161.9K
 * Total Submissions: 223K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    return fun2(matrix);
};

/**
 * 方法1 必须原地操作
 * @param {number[][]} matrix 
 */
const fun1 = (matrix) => {
    const x_length = matrix[0].length - 1;
    const y_length = matrix.length - 1;
    // 左右对称交换 
    for (let y = 0; y <= y_length; y++) {
        for (let x = 0; x <= parseInt(x_length / 2); x++) {
            const temp = matrix[y][x];
            matrix[y][x] = matrix[y][x_length - x];
            matrix[y][x_length - x] = temp;
        }
    }
    // 对角线交换 以y = -x对称 （x,y） <==> (-x,-y); 
    // 此处卡住 真的脑瘫
}

/**
 * Your runtime beats 32.34 % of javascript submissions
 * @param {number[][]} matrix 
 */
const fun2 = (matrix) => {
    const x_length = matrix[0].length - 1;
    const y_length = matrix.length - 1;
    // 上下对称交换 
    for (let x = 0; x <= x_length; x++) {
        for (let y = 0; y <= parseInt(y_length / 2); y++) {
            const temp = matrix[y][x];
            matrix[y][x] = matrix[y_length - y][x];
            matrix[y_length - y][x] = temp;
        }
    }
    // 坐标交换即可
    for (let x = 0; x <= x_length; x++) {
        for (let y = x + 1; y <= y_length; y++) {
            let temp = matrix[x][y];
            matrix[x][y] = matrix[y][x];
            matrix[y][x] = temp;
        }
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = rotate;
// @after-stub-for-debug-end