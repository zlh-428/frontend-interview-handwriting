/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];

  const result = [];

  const dfs = (root) => {
    if (!root) return;

    root.left && dfs(root.left);
    result.push(root.val);
    root.right && dfs(root.right);
  };

  dfs(root);

  return result;
};
