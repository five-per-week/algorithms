class Solution:
    def romanToInt(self, s: str) -> int:
        answer = 0
        cheatsheet = {'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900}
        word = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        for c in cheatsheet:
            if s.count(c) == 1:
                s = re.sub(c, '', s)
                answer += cheatsheet[c]
        for c in word:
            answer += s.count(c)*word[c]            
        return answer
