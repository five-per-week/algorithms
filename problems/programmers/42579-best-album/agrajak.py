from collections import defaultdict
import heapq

def solution(genres, plays):
    sum, n, data = defaultdict(int), len(genres), defaultdict(list)
    answer = []

    for idx, (genre, play) in enumerate(zip(genres, plays)):
        sum[genre] += play
        heapq.heappush(data[genre], (-play, idx))
    
    for (genre, play) in sorted(sum.items(), key=lambda x:x[1], reverse=True):
        if len(data[genre]) >= 2:
            answer.append(heapq.heappop(data[genre])[1])
            answer.append(heapq.heappop(data[genre])[1])
        elif len(data[genre]) == 1:
            answer.append(heapq.heappop(data[genre])[1])    
        
    return answer