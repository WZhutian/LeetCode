/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        let index2 = nums.indexOf(target - element)
        if (index2 === index) {
            index2 = nums.indexOf(target - element, index2 + 1)
        }
        if (index2 > 0) {
            return [index, index2]
        }
    }
};
let a = twoSum([2, 3, 3, 11], 6)
console.log(a);

module.exports = twoSum