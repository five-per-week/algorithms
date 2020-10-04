from math import ceil
def solution(p, s):
    answer, finish_at = [], [ceil((100-p[i]) / s[i]) for i in range(len(p))]
    
    while finish_at:
        t = finish_at.pop(0)
        cnt = 1
        while finish_at and finish_at[0] <= t:
            cnt += 1
            finish_at.pop(0)
        answer.append(cnt)
        
    return answer