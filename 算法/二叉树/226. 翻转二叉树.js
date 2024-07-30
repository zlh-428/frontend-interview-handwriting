// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;

    let reverseLeft = invertTree(root.right);
    let reverseRight = invertTree(root.left);

    root.left = reverseLeft;

    root.right = reverseRight;

    return root;
};