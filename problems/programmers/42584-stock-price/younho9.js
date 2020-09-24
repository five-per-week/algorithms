function solution(prices) {
    const answer = Array(prices.length);
    const s = new Stack();

    prices.forEach((price, i) => {
        while (!s.isEmpty() && prices[s.top()] > price) {
            answer[s.top()] = i - s.top();
            s.pop();
        }
        s.push(i);
    });

    while (!s.isEmpty()) {
        answer[s.top()] = prices.length - s.top() - 1;
        s.pop();
    }

    return answer;
}

class Stack {
    constructor() {
        this._arr = [];
    }

    push(value) {
        this._arr.push(value);
    }

    pop() {
        return this._arr.pop();
    }

    top() {
        return this._arr[this._arr.length - 1];
    }

    isEmpty() {
        return this._arr.length === 0;
    }
}

module.exports = solution;
