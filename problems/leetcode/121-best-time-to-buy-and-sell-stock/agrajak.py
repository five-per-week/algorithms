class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        local_min = float('inf')
        answer = 0
        for price in prices:
            if local_min > price:
                local_min = price
            answer = max(answer, price - local_min)

        return answer