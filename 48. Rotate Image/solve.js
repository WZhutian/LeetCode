/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var length = matrix.length
    for (var i = 0; i < parseInt(length / 2); i++) {
        for (var j = 0; j < Math.ceil(length / 2); j++) {
            var temp = matrix[i][j]
            matrix[i][j] = matrix[length - 1 - j][i]
            matrix[length - 1 - j][i] = matrix[length - 1 - i][length - 1 - j]
            matrix[length - 1 - i][length - 1 - j] = matrix[j][length - 1 - i]
            matrix[j][length - 1 - i] = temp
        }
    }
};
//test
var matrix=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotate(matrix);
console.log(matrix);
