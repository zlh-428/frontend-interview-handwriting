/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null;

  let current = head, pre = null;

  while(current) {
    let next = current.next;

    current.next = pre;

    pre = current;

    current = next;
  }

  return pre;
}