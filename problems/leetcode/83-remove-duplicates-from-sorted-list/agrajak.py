# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        cur = head
        while cur != None:
            next = cur.next
            while next != None and next.val == cur.val:
                next = next.next
            cur.next = next
            cur = cur.next
        return head
            
                
            
        