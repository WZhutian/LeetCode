/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let count = 0
    for (let stone of S) {
        if (J.indexOf(stone) >= 0) {
            ++count
        }
    }
    return count
};
module.exports = numJewelsInStones