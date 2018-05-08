/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 0; i < triangle.length - 1; i++) {
    let row = triangle[i]
    for (let j = 0; j < triangle[i + 1].length; j++) {
      if (j === 0) {
        triangle[i + 1][j] += row[j]
      } else if (j === triangle[i + 1].length - 1) {
        triangle[i + 1][j] += row[j - 1]
      } else {
        triangle[i + 1][j] += Math.min(row[j - 1], row[j])
      }
    }
  }
  return Math.min(...triangle[triangle.length-1])
};
module.exports = minimumTotal