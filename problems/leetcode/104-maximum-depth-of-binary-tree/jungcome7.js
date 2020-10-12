/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    let depth = 1;
    
    const BFS = (node, level) => {
        if(node === null) return;
        if(level > depth) depth = level;
        BFS(node.right, level + 1);
        BFS(node.left, level + 1);
    }
    
    BFS(root, 1);
    return depth;
};