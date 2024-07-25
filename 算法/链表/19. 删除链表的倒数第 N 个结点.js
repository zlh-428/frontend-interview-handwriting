// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;

  let dummy = new ListNode(null);
  dummy.next = head;
  let fast = dummy,
    slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
