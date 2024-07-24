/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head) return null;

  let fast = head, slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;

    slow = slow.next;

    if (fast === slow) break;
  }

  if (!fast || !fast.next) return null

  slow = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}