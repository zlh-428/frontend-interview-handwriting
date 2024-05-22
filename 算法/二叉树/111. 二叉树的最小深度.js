/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;

  const queue = [root];

  let minDeep = 0;

  while (queue.length) {
    let len = queue.length;

    minDeep++;
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();

      if (!curNode.left && !curNode.right) return minDeep;

      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
  }

  return minDeep;
};
