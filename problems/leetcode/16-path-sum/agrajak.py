# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right 20:28-20:38

class Solution:
        
    def hasPathSum(self, node: TreeNode, sum: int) -> bool:
    
        if node is None: # root가 []인 경우 
            return False

        if node.left is None and node.right is None: # 자식이 없는 노드면 sum 비교하기
            return sum == node.val

        left = right = False

        if node.left:
            left = self.hasPathSum(node.left, sum - node.val)

        if node.right:
            right = self.hasPathSum(node.right, sum - node.val)

        return left | right
        