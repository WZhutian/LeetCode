## 题目描述

给定一个二叉树，返回其节点值的级别遍历。 （即从左到右，逐级）。

## 例子
```
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
```
## 解题思路

一层一层进行遍历
1. nowLevel 保存当前层节点
2. nextLevel 保存下一层节点
3. addArray 下一层的遍历结果
4. 下一层节点数组为空时,跳出循环
时间复杂度:O(n)

## 结果

68ms