## 题目描述

给定一个编码字符串，返回它的解码字符串。 编码规则是：k [encoded_string]，其中方括号内的encoded_string正好重复了k次。

## 例子
```
s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
```
## 解题思路

用栈保存数字和字符串,遇到 ] 则输出字符串到栈的下一层(底层为要返回的数)
注意:
1. 数字有可能有几位
2. 1[ab] 会简写为 ab
 
## 结果

56ms