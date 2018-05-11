/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length
  let pos = new Array(m + n)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = num1.charAt(i) * num2.charAt(j)
      let p1 = i + j,
        p2 = i + j + 1
      let sum = mul + (pos[p2] || 0)
      let front = Math.floor(sum / 10)
      pos[p1] = pos[p1] === undefined ? front : pos[p1] + front;
      pos[p2] = sum % 10;
    }
  }
  let sb = []
  for (let p of pos)
    if (!(sb.length == 0 && p == 0)) sb.push(p)
  return sb.length == 0 ? "0" : sb.join("")
};

module.exports = multiply