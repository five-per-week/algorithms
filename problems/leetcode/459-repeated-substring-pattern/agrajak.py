class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)
        if n == 2:
            return s[0] == s[1]
        for i in range(1, n):
            if n % i == 0:
                if s[:i]*(n // i) == s:
                    return True
                
        return False
