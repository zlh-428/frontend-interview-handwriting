// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // 如果链表为空或只有一个节点，直接返回head
  if (!head || !head.next) return head;

  // 创建一个虚拟节点，并使其指向head
  let dummy = new ListNode(null);

  dummy.next = head;

  // current用于遍历链表，初始时指向dummy
  let current = dummy;

  while (current.next && current.next.next) {
    // 定义要交换的两个节点
    let temp = current.next;
    let pre = current.next.next;

    // 交换节点
    temp.next = pre.next;
    current.next = pre;
    pre.next = temp;

    // current移到下一对节点前
    current = temp;
  }
  // 返回新的链表头节点
  return dummy.next;
}