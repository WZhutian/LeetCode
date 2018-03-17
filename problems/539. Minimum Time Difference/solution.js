/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let min = 12 * 60
    for (let i in timePoints) {
        let time = timePoints[i]
        let hour = parseInt(time.split(":")[0])
        let mimute = parseInt(time.split(":")[1])
        let timestamp = hour * 60 + mimute
        timePoints[i] = timestamp
    }
    timePoints.sort((a, b) => {
        return a - b
    })
    timePoints.push(timePoints[0] + 24 * 60)
    for (let i = 0; i < timePoints.length - 1; ++i) {
        timestamp_diff = Math.abs(timePoints[i] - timePoints[i + 1])
        if (timestamp_diff < min) {
            min = timestamp_diff
        }
    }
    return min
};
module.exports = findMinDifference