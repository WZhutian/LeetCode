## 题目描述

TinyURL是一个URL缩短服务，您可以在其中输入一个URL，例如https://leetcode.com/problems/design-tinyurl，并返回一个简短的URL，例如http://tinyurl.com/4e9iAk。 设计TinyURL服务的编码和解码方法。对你的编码/解码算法应该如何工作没有限制。你只需要确保一个URL可以被编码成一个小的URL，而这个小的URL可以被解码为原始的URL。

## 例子
```
https://leetcode.com/problems/design-tinyurl
->
http://tinyurl.com/4e9iAk
```
## 解题思路

    这题其实不算严格的算法题, 只是模拟一个服务端的url存储器,将每个长url保存下来,用短url的键对应,每次收到客户端发来的短url就解码返回长url
    就像微信的链接一样
    实现的难点主要在于如何使短url唯一,以及存储器的实现(在这里体现不出来,设计服务架构方面)
[leetcode讨论版块](https://leetcode.com/problems/encode-and-decode-tinyurl/discuss/)
## 结果
