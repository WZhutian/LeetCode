/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ret = [];
  function per(tempList) {
    if (tempList.length === nums.length) {
      ret.push(tempList);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (tempList.indexOf(nums[i]) !== -1) continue;
        tempList.push(nums[i]);
        per(tempList.concat([]));
        tempList.pop();
      }
    }
  }
  per([]);
  return ret;
};
module.exports = permute;
