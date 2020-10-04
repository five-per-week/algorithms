# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

def getHeight(node):
    if node is None:
        return 0
    left = getHeight(node.left)
    right = getHeight(node.right)
    
    return max(left, right)+1

class Solution:
    
    def isBalanced(self, root: TreeNode) -> bool:
        if root is None:
            return True
        
        if abs(getHeight(root.left) - getHeight(root.right)) > 1:
            return False
            
        left = self.isBalanced(root.left)
        right = self.isBalanced(root.right)
        
        return left & right
        
        