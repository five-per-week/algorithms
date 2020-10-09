from heapq import heappush, heappop, heappushpop
class KthLargest: # 15:01

    def __init__(self, k: int, nums: List[int]):
        self.heap = []
        self.max_heap = []
        self.k = k
        for n in nums:
            self.add(n)

    def add(self, val: int) -> int:

        if len(self.heap) < self.k-1:
            heappush(self.heap, val)

        else:
            pop = heappushpop(self.heap, val)
            heappush(self.max_heap, -pop)
        
        if len(self.max_heap):
            return -self.max_heap[0]
        return None
        


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)