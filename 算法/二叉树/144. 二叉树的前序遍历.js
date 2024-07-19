/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  let result = [];

  const fn = (root) => {
    if (!root) return;

    result.push(root.val);

    root.left && fn(root.left);
    root.right && fn(root.right);
  };

  fn(root);

  return result;
};
