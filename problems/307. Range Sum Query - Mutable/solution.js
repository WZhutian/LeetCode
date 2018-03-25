//区间树
var SegmentTreeNode = function (start, end) {
    this.start = start
    this.end = end
    this.sum = 0
    this.left = this.right = null
}
var BuildSegmentTree = function (nums, start, end) {
    if (start > end) {
        return null;
    } else {
        var ret = new SegmentTreeNode(start, end);
        if (start == end) {
            ret.sum = nums[start];
        } else {
            var mid = start + parseInt((end - start) / 2);
            ret.left = BuildSegmentTree(nums, start, mid);
            ret.right = BuildSegmentTree(nums, mid + 1, end);
            ret.sum = ret.left.sum + ret.right.sum;
        }
        return ret;
    }
}
var UpdateSegmentTree = function (root, pos, val) {
    if (root.start == root.end) {
        root.sum = val;
    } else {
        var mid = root.start + parseInt((root.end - root.start) / 2);
        if (pos <= mid) {
            UpdateSegmentTree(root.left, pos, val);
        } else {
            UpdateSegmentTree(root.right, pos, val);
        }
        root.sum = root.left.sum + root.right.sum;
    }
}
var SumSegmentTreeRange = function (root, start, end) {
    if (root.end == end && root.start == start) {
        return root.sum;
    } else {
        var mid = root.start + parseInt((root.end - root.start) / 2);
        if (end <= mid) {
            return SumSegmentTreeRange(root.left, start, end);
        } else if (start >= mid + 1) {
            return SumSegmentTreeRange(root.right, start, end);
        } else {
            return SumSegmentTreeRange(root.right, mid + 1, end) + SumSegmentTreeRange(root.left, start, mid);
        }
    }
}
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.root = BuildSegmentTree(nums, 0, nums.length - 1)
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    UpdateSegmentTree(this.root, i, val)
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return SumSegmentTreeRange(this.root, i, j)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
module.exports = NumArray