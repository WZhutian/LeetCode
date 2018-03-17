## 题目描述

给定一个非空的单词列表，返回k个最频繁的元素。 您的答案应按照从最高到最低的频率排序。如果两个单词具有相同的频率，那么字母顺序较低的单词首先出现。

注意： 你可以假设k总是有效的，1≤k≤唯一元素的个数。 输入字只包含小写字母。

跟进： 尝试在O（n log k）时间和O（n）额外空间中解决它。

## 例子
```
Example 1:

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
```
## 解题思路

    先进行词频统计,
    再排序(根据次数和首字母)
    得到list

## 结果
88ms