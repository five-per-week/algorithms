class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n = len(nums)
        sum = (n+1)*(n)//2
        for n in nums:
            sum -= n
        return sum