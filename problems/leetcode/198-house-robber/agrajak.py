class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        d = [0] * n
        if n == 0:
            return 0
        for i in range(n):
            d[i] = nums[i]
            if i >= 2:
                d[i] = max(d[i-1], d[i-2] + nums[i])
                
            if i >= 3:
                d[i] = max(d[i], d[i-3] + nums[i])
            
        return max(d)
