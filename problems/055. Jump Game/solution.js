/**
 * @param {number[]} nums
 * @return {boolean}
 */
var best = function(nums){
    var lastPosition = nums.length - 1;
    for (var i=nums.length-1;i>=0;i--) {
        if (i+nums[i]>=lastPosition)
            lastPosition = i;
    }
    return lastPosition == 0;
}
//timeout
var canJump1 = function (nums) {
    let length = nums.length
    let set = new Set([0])
    let stack = [0]
    while (stack.length > 0) {
        let nowAt = stack.pop()
        let value = nums[nowAt]
        if (nowAt + value >= length - 1) {
            return true
        }
        //记录下可以跳的位置
        for (let i = nowAt + 1; i <= nowAt + value; i++) {
            if (!set.has(i)) {
                stack.push(i)
                set.add(i)
            }
        }
    }
    return false
};
var canJump = function (nums) {
    if (nums[0] + 0 >= nums.length - 1) {
        return true
    }
    nums.pop()
    let length = nums.length
    let result = false
    for (let i = length - 1; i >= 0; i--) {
        if (i + nums[i] >= length) {
            if (i == 0) {
                return true
            } else {
                result = canJump(nums.splice(0, i + 1))
                return result
            }
        }
    }
    return false
};
module.exports = canJump