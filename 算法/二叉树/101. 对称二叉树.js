/**
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return false;

  return isMirror(root.left, root.right)
}

const isMirror = (left, right) => {
  if (!left && !right) return true;

  if (!left || !right) return false;

  const isLeftMirror = isMirror(left.right, right.left);
  const isRightMirror = isMirror(left.left, right.right);

  return left.val === right.val && isLeftMirror && isRightMirror;
}