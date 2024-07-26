// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return null;

  const map = [];

  let dummy = new ListNode(null);

  let current = dummy;
  
  while (head) {
    map.push(head.val);
    head = head.next;
  }

  map.sort((a, b) => a - b);

  for (let i = 0; i < map.length; i++) {
    current.next = new ListNode(map[i]);
    current = current.next;
  }

  return dummy.next;
};
