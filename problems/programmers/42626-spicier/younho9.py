import heapq


def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0

    while any(food < K for food in scoville):
        if len(scoville) < 2:
            return -1

        heapq.heappush(scoville, heapq.heappop(scoville) + heapq.heappop(scoville) * 2)
        count += 1

    return count


if __name__ == "__main__":
    print(solution([1, 2, 3, 9, 10, 12], 7) == 2)
