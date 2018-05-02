/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ret = []
    function a(nowStr, open, close) {
        if (nowStr.length === n * 2) {
            ret.push(nowStr)
            return
        }
        if (open < n) {
            a(nowStr + "(", open + 1, close)
        }
        if (close < open) {
            a(nowStr + ")", open, close + 1)
        }
    }
    a("", 0, 0)
    return ret
};
module.exports = generateParenthesis