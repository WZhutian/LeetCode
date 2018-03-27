## 题目描述(*)

给定可能包含重复项的数字集合，返回所有可能的唯一排列

## 例子
```
For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
```
## 解题思路

直接排列的复杂度相当高,O(n!),但是一般都需要遍历所有情况

方法1,通用高效率解法,参考[讨论](https://leetcode.com/problems/permutations-ii/discuss/18594/Really-easy-Java-solution-much-easier-than-the-solutions-with-very-high-vote)

1. 通过排序,聚集相同的数
2. 从第一个位置开始,尝试每个可能的数字a
3. 若a被使用过,或a和其上一个数字相同(上一个数字被使用过的情况),则跳过
4. 当到达最后一个位置时,增加一个结果b
5. 弹出b的最后一个数字,重新判断该位置是否有其他可能,最后输出结果
6. 继续向上弹出.

## 结果
80ms