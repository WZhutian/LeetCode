/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let numReg = /^[0-9]*$/
    let stackTimes = [1]
    let stackStr = [""]
    let numMode = false
    for (let value of s) {
        if (numReg.test(value)) {
            if (numMode) {
                stackTimes[stackTimes.length - 1] += value
            } else {
                stackTimes.push(parseInt(value))
                numMode = true
            }
        } else if (value === "[") {
            stackStr.push("")
            numMode = false
        } else if (value === "]") {
            let times = stackTimes.pop()
            let str = stackStr.pop()
            stackStr[stackStr.length - 1] += str.repeat(times)
        } else {
            stackStr[stackStr.length - 1] += value

        }
    }
    return stackStr[0]
};
module.exports = decodeString