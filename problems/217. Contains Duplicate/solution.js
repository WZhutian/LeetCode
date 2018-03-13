/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set(nums)
    return set.size !== nums.length && nums.length !== 0 && nums.length !== 1
};
module.exports = containsDuplicate