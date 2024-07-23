// 给你一个链表的头节点 head ，判断链表中是否有环。

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let fast = head,
    slow = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};
