/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = []
    if (nums == null || nums.length == 0) return res;
    let used = []
    let list = [];
    nums.sort((a,b)=>{
        return a-b
    })
    dfs(nums, used, list, res);
    return res;
};

var dfs = function (nums, used, list, res) {
    if (list.length == nums.length) {
        res.push([].concat(list));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i - 1] == nums[i] && !used[i - 1]) continue;
        used[i] = true;
        list.push(nums[i]);
        dfs(nums, used, list, res);
        used[i] = false;
        list.pop();
    }
}

module.exports = permuteUnique