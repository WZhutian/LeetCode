/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.split(/\s+/g)
    if (arr && (arr[arr.length - 1] === "")) {
        arr.pop()
    }
    return arr && arr.length > 0 ? arr[arr.length - 1].length : 0
};

module.exports = lengthOfLastWord