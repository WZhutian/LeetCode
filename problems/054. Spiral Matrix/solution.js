/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length == 0) {
        return []
    }
    let turn = 0, x = 0, y = 0, width = matrix[0].length, height = matrix.length
    let round = 0, nums = 0
    let result = [matrix[0][0]]
    while (nums < width * height - 1) {
        if (turn == 0) {
            if (y == width - 1 - round) {
                turn = 1
                ++x
            } else {
                ++y
            }
        } else if (turn == 1) {
            if (x == height - 1 - round) {
                turn = 2
                --y
            } else {
                ++x
            }
        } else if (turn == 2) {
            if (y == round) {
                turn = 3
                --x
            } else {
                --y
            }
        } else {
            if (x == round + 1) {
                turn = 0
                ++round
                ++y
            } else {
                --x
            }
        }
        result.push(matrix[x][y])
        ++nums
    }
    return result
};
spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
module.exports = spiralOrder