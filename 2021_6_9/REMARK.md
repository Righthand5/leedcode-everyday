#定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及pop 的时间复杂度都是 O(1)
示例:
``` javascript
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();   --> 返回 -3.
minStack.pop();               //弹出最后一个值
minStack.top();   --> 返回 0. //顶部的元素
minStack.min();   --> 返回 -2.//值最小的元素
```
提示：
各函数的调用总次数不超过 20000 次
#解题思路：
1. 由于题目的要求在O(1)级中完成，所以一般的查找无效
2. 在时间复杂度不行的情况下我们就采取如何扩大空间复杂度
3. 我们可以采用一个辅助栈来完成
#解题代码：

