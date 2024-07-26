# JavaScript 链表 (Linked List)

## 介绍

链表是一种线性数据结构，其中的元素按顺序链接在一起。
每个元素（称为节点）包含一个数据部分和一个指向下一个节点的引用（或指针）。链表可以是单链表、双链表或循环链表。


## 数据结构
```javascript
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
