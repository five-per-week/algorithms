def solution(prices):
    answer = [0] * len(prices)
    stack = []

    for i in range(len(prices)):
        while stack and prices[stack[len(stack) - 1]] > prices[i]:
            answer[stack[len(stack) - 1]] = i - stack[len(stack) - 1]
            stack.pop()
        stack.append(i)

    while stack:
        answer[stack[len(stack) - 1]] = len(prices) - stack[len(stack) - 1] - 1
        stack.pop()

    return answer
