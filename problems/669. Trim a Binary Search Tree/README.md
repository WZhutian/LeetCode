## 题目描述(*)

给定一个二叉搜索树并将最低和最高边界定义为L和R，修剪该树使其所有元素位于[L，R]（R> = L）中。您可能需要更改树的根，所以结果应返回修剪后的二叉搜索树的新根。

## 例子
```
Example 1:
Input: 
    1
   / \
  0   2

  L = 1
  R = 2

Output: 
    1
      \
       2
Example 2:
Input: 
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

Output: 
      3
     / 
   2   
  /
 1

```
## 解题思路

刚开始陷入了错误的思想,从树遍历的过程一点一点做

正确的做法应该将问题分解如下(分析L):
1. 当前个节点若小于L,说明不在裁剪区域内,返回向右递归结果
2. 左子树应当指向左叶子节点的递归结果

## 结果