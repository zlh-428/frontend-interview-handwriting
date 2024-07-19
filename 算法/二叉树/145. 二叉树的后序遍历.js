/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];

  const result = [];

  const dfs = (root) => {
    if (!root) return;

    root.left && dfs(root.left);
    root.right && dfs(root.right);

    result.push(root.val);
  };

  dfs(root);

  return result;
};
