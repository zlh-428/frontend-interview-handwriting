/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return null;

  if (!l1) return l2;

  if (!l2) return l1;

  let dummy = new ListNode(null);

  let count = 0;

  let current = dummy;

  while (l1 || l2) {
    let value1 = l1 ? l1.value : 0;
    let value2 = l2 ? l2.value : 0;

    let sum = value1 + value2 + count;

    count = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);

    current = current.next;

    if (l1.next) {
      l1 = l1.next;
    }

    if (l2.next) {
      l2 = l2.next;
    }
  }

  if (count > 0) {
    current.next = new ListNode(count);
  }

  return dummy.next;
}
